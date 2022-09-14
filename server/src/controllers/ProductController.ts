import type { Request, Response } from 'express';
import type { PrismaClient } from '@prisma/client';

export { ProductController };

class ProductController {
  constructor(private readonly prisma: PrismaClient) {}

  GetProducts = async (res: Response): Promise<void> => {
    const products = await this.prisma.product.findMany();
    res.json(products);
  };

  GetProduct = async (req: Request, res: Response): Promise<void> => {
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

  CreateProduct = async (req: Request, res: Response): Promise<void> => {
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
