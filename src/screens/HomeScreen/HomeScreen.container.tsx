import React from 'react'
import HomeScreenView from './HomeScreen.view'
import { useGetProductsQuery } from '../../services/product/productApi';

function HomeScreen() {
    const { data , isLoading } = useGetProductsQuery();

  return <HomeScreenView products={data?.products} isLoading={isLoading} />;
}

export default HomeScreen;
