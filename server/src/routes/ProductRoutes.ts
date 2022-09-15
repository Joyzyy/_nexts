import type { Application } from 'express';
import type { PrismaClient } from '@prisma/client';

import { ProductController } from '../controllers/ProductController';

export { ProductRoutes };

class ProductRoutes extends ProductController {
  constructor(app: Application, prisma: PrismaClient) {
    super(prisma);

    app.route('/api/products').get(this.GetProducts);
    app.route('/api/products/:name').get(this.GetProduct);
    app.route('/api/products').post(this.CreateProduct);
  }
}
