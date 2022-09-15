import type { Request, Response } from 'express';
import type { PrismaClient, User } from '@prisma/client';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export { UserController };

class UserController {
  constructor(private readonly prisma: PrismaClient) {}

  private UR({ error, user }: { error?: string; user?: User }) {
    return {
      error: error ? error : null,
      data: user ? user : null,
    };
  }

  GetUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.prisma.user
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((user) => {
        user ? res.json(this.UR({ user })) : res.json(this.UR({ error: 'User not found ' }));
      })
      .catch((err) => res.status(500).json(this.UR({ error: err })));
  };

  CreateUser = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password } = req.body;

    await this.prisma.user
      .create({
        data: {
          name: username,
          email: email,
          password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
        },
      })
      .then((newUser) => {
        res.json({ jwt: jwt.sign({ id: newUser.id }, process.env.JWT_SECRET) });
      })
      .catch((err) => res.status(500).json(this.UR({ error: err })));
  };

  UpdateUser = async (req: Request, res: Response): Promise<void> => {
    let uid: string | undefined;
    const token: string =
      req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) {
      res.json(this.UR({ error: 'No token, authorization denied' }));
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded: { id: string }) => {
      if (err) {
        res.json(this.UR({ error: 'Token is not valid' }));
        return;
      }

      uid = decoded.id;
      return;
    });

    await this.prisma.user
      .update({
        where: {
          id: uid,
        },
        data: {
          name: req.body?.username,
          email: req.body?.email,
          password:
            req.body?.password && (await bcrypt.hash(req.body?.password, await bcrypt.genSalt(10))),
        },
      })
      .then((updatedUser) => {
        updatedUser
          ? res.json(this.UR({ user: updatedUser }))
          : res.json(this.UR({ error: 'User not found' }));
      })
      .catch((err) => res.status(500).json(this.UR({ error: err })));
  };
}
