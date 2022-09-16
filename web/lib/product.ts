import { createContext } from 'react';

// from prisma
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes: number[];
  tabtype: string;
};

export type ProductResponse = {
  error: string;
  data: Product | Product[];
};

export const ProductContext = createContext({} as Product[]);
