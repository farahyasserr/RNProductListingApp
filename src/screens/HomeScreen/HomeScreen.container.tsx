import React from 'react'
import HomeScreenView from './HomeScreen.view'
import { useGetProductsQuery } from '../../services/product/productsApi';

interface Props {}

function HomeScreen(props: Props) {
    const {} = props

    const { data , isLoading } = useGetProductsQuery();


    return (
        <HomeScreenView products={data?.products} isLoading={isLoading}/>
    )
}

export default HomeScreen
