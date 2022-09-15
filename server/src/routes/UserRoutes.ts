import type { Application } from 'express';
import type { PrismaClient } from '@prisma/client';
import { UserController } from '../controllers/UserController';

export { UserRoutes };

class UserRoutes extends UserController {
  constructor(app: Application, prisma: PrismaClient) {
    super(prisma);

    app.route('/api/user/:id').get(this.GetUser);
    app.route('/api/createUser').post(this.CreateUser);
    app.route('/api/updateUser').patch(this.UpdateUser);
  }
}
