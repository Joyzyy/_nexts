import type { Application } from 'express';
import type { PrismaClient } from '@prisma/client';

import { ProductController } from '../controllers/ProductController';

export { ProductRoutes };

class ProductRoutes extends ProductController {
  constructor(app: Application, prisma: PrismaClient) {
    super(prisma);

    app.get('/api/products', this.GetProducts);
    app.get('/api/products/:name', this.GetProduct);
    app.post('/api/products', this.CreateProduct);
  }
}
