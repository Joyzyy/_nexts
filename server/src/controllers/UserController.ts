import type { Request, Response } from 'express';
import type { PrismaClient } from '@prisma/client';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export { UserController };

class UserController {
  constructor(private readonly prisma: PrismaClient) {}

  GetUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.prisma.user
      .findUnique({
        where: {
          id: id,
        },
      })
      .then((user) => {
        user ? res.json({ data: user }) : res.json({ error: 'User not found ' });
      })
      .catch((err) => console.error(err));
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
        res.json({
          data: newUser,
          jwt: jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '7d' }),
        });
      })
      .catch((err) => res.json({ error: err }));
  };

  UpdateUser = async (req: Request, res: Response): Promise<void> => {
    // @TODO
  };
}
