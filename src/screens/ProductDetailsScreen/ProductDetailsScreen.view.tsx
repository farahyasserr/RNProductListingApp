import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './ProductDetailsScreen.styles'
import Divider from '../../components/shared/Divider/Divider.view.tsx'
import Product from '../../types/Product'
import Rating from '../../components/shared/Rating/Rating.view.tsx'
import Loader from '../../components/shared/Loader/Loader.view.tsx'

interface Props{
    isLoading: Boolean
    productItem?: Product
}

const CURRENCY = "AED";

function ProductDetailsView({ isLoading, productItem }:Props) {

    return (
             isLoading ? 
                <Loader />
            : 
            <ScrollView>
             <Image source={{ uri: productItem?.thumbnail }} style={styles.image} resizeMode = {'contain'} />
             <View style={styles.infoContainer}>
                <Text style={styles.title}>{productItem?.title}</Text>
                <Text style={styles.price}>{productItem?.price} {CURRENCY}</Text>
                <Rating rating={productItem?.rating} />
                <Divider />
                <Text style={styles.description}>{productItem?.description}</Text>
                <Text style={styles.brand}>Sold by: {productItem?.brand}</Text>
                {/* <Text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </Text> */}
            </View>
            </ScrollView>

    )
}

export default ProductDetailsView
