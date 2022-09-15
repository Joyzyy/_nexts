import type { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';
import { HomeC } from '@/components/Home';

import { ProductResponse } from '@/lib/product';

const Home: NextPage<ProductResponse> = ({ error, data }) => {
  console.log(error, data);
  return <HomeC />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const request = (await axios.get<ProductResponse>('http://localhost:8080/api/products')).data;

  return {
    props: {
      error: request.error,
      data: request.data,
    },
  };
};

export default Home;
