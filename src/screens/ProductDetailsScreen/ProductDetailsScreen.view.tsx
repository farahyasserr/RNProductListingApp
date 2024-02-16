import React from 'react'
import { Image, ScrollView } from 'react-native'
import styles from './ProductDetailsScreen.styles'
import Product from '../../types/Product'
import { Loader } from '../../components'
import ProductInfo from './blocks/ProductInfo.view'

interface Props{
    isLoading: Boolean
    productItem?: Product
}

function ProductDetailsView({ isLoading, productItem }:Props) {

    return (
             isLoading ? 
                <Loader />
            :
            <ScrollView style={styles.scrollview}>
                <Image source={{ uri: productItem?.thumbnail }} style={styles.image}  />
                <ProductInfo item={productItem} />
            </ScrollView>

    )
}

export default ProductDetailsView
