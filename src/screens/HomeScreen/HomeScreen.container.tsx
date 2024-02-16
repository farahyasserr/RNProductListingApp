import React from 'react'
import HomeScreenView from './HomeScreen.view'
import { useGetProductsQuery } from '../../services/product/productApi';

function HomeScreen() {
    /* `const { data , isLoading } = useGetProductsQuery();` is using the `useGetProductsQuery` hook
    from the `productApi` service to fetch data from the server. */
    const { data , isLoading } = useGetProductsQuery();

  return <HomeScreenView products={data?.products} isLoading={isLoading} />;
}

export default HomeScreen;
