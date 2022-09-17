import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ProductResponse, ProductResponseIndividual } from '@/lib/product';
import axios from 'axios';

const ProductPage: NextPage<ProductResponseIndividual> = ({ error, data }) => {
  console.log(data);
  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <h1>{key}</h1>
            <p>{JSON.stringify(value, null, 2)}</p>
          </div>
        ))
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = (await axios.get<ProductResponse>(`${process.env.NEXT_PUBLIC_API}/api/products`))
    .data;

  const paths = response.data.map((product) => ({
    params: {
      name: product.name.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = (
    await axios.get<ProductResponseIndividual>(
      `${process.env.NEXT_PUBLIC_API}/api/products/${params?.name}`,
    )
  ).data;

  return {
    props: {
      error: response.error,
      data: response.data,
    },
  };
};

export default ProductPage;
