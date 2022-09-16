import type { Request, Response } from 'express';
import type { PrismaClient, Product } from '@prisma/client';

export { ProductController };

class ProductController {
  constructor(private readonly prisma: PrismaClient) {}

  // PR = product response
  private PR({ error, product }: { error?: string; product?: Product | Product[] }) {
    return {
      error: error ? error : null,
      data: product ? product : null,
    };
  }

  GetProducts = async (req: Request, res: Response): Promise<void> => {
    await this.prisma.product
      .findMany()
      .then((products) => {
        products
          ? res.json(this.PR({ product: products }))
          : res.json(this.PR({ error: 'No products found' }));
      })
      .catch((err) => {
        res.status(500).json(this.PR({ error: err }));
      });
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
        product ? res.json(this.PR({ product })) : res.json(this.PR({ error: 'No product found' }));
      })
      .catch((err) => {
        res.status(500).json(this.PR({ error: err }));
      });
  };

  CreateProduct = async (req: Request, res: Response): Promise<void> => {
    const { name, description, category, price, image, sizes, tabtype } = req.body;

    await this.prisma.product
      .create({
        data: {
          name,
          category,
          description,
          price,
          image,
          sizes,
          tabtype,
        },
      })
      .then((newProduct) => {
        newProduct
          ? res.json(this.PR({ product: newProduct }))
          : res.json(this.PR({ error: 'Failed to create product' }));
      })
      .catch((err) => {
        res.status(500).json(this.PR({ error: err }));
      });
  };
}
