import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

import { ProductRoutes } from './controllers/ProductController';

const app = express();
const port = 8080;
const prisma = new PrismaClient();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

new ProductRoutes(app, prisma);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
