import type { Request, Response, Application } from 'express';
import type { PrismaClient } from '@prisma/client';

export { ProductRoutes };

class ProductController {
  constructor(private readonly prisma: PrismaClient) {}

  /* TODO - replace Promise<any> */

  GetProducts = async (res: Response): Promise<any> => {
    const products = await this.prisma.product.findMany();
    res.json(products);
  };

  GetProduct = async (req: Request, res: Response): Promise<any> => {
    const params = req.params;
    await this.prisma.product
      .findFirst({
        where: {
          name: params.name,
        },
      })
      .then((product) => {
        product ? res.json(product) : res.json("Product doesn't exist");
      })
      .catch(() => {
        res.json({
          error: 'We have an error!',
        });
      });
  };

  CreateProduct = async (req: Request, res: Response): Promise<any> => {
    const { name, description, price, image, sizes, tabtype } = req.body;

    await this.prisma.product
      .create({
        data: {
          name,
          description,
          price,
          image,
          sizes,
          tabtype,
        },
      })
      .then((newProduct) => {
        res.json(newProduct);
      });
  };
}

class ProductRoutes extends ProductController {
  constructor(app: Application, prisma: PrismaClient) {
    super(prisma);
    app.get('/api/products', this.GetProducts);
    app.post('/api/products', this.CreateProduct);
    app.get('/api/products/:name', this.GetProduct);
  }
}
