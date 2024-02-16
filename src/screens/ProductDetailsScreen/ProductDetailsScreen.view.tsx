import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './ProductDetailsScreen.styles'
import Product from '../../types/Product'
import { Divider, Loader, Rating } from '../../components'
import { currency } from '../../data/mock/Currency'

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
                <View style={styles.infoContainer}>
                    <View  style={styles.horizontalSubContainer}>
                        <View>
                            <Text style={styles.title}>{productItem?.title}</Text>
                            <Rating rating={productItem?.rating} />
                        </View>
                        <Text style={styles.price}>{productItem?.price} {currency}</Text>

                    </View>
                  
                    <Divider />
                    <Text style={styles.descTitle}>Description</Text>
                    <Text style={styles.description}>{productItem?.description}</Text>
                    <Text style={styles.brand}>Sold by: {productItem?.brand}</Text>
                </View>
            </ScrollView>

    )
}

export default ProductDetailsView
