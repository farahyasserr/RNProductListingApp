import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './ProductDetailsScreen.styles'
import Product from '../../types/Product'
import { Divider, Loader, Rating } from '../../components'

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
             <Image source={{ uri: productItem?.thumbnail }} style={styles.image}  />
             <View style={styles.infoContainer}>
                <Text style={styles.title}>{productItem?.title}</Text>
                <Text style={styles.price}>{productItem?.price} {CURRENCY}</Text>
                <Rating rating={productItem?.rating} />
                <Divider />
                <Text style={styles.description}>{productItem?.description}</Text>
                <Text style={styles.brand}>Sold by: {productItem?.brand}</Text>
            </View>
            </ScrollView>

    )
}

export default ProductDetailsView
