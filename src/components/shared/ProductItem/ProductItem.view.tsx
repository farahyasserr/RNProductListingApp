import React from 'react'
import Product from '../../../types/Product'
import { Image, Text, TouchableOpacity} from 'react-native'
import styles from './ProductItem.styles'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavType } from '../../../navigation/Navigation'

interface Props {
    product: Product
}

const CURRENCY = "AED"

function ProductItem(props: Props) {
    const {product} = props
    const navigation = useNavigation<HomeStackNavType<'Home'>>();

    const pressItemhandler = () => {
        navigation.navigate('ProductDetails', { id: product.id });
      };

    return (
        <TouchableOpacity style={styles.mainContainer} onPress={pressItemhandler}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price} {CURRENCY}</Text>
        </TouchableOpacity>
    )
}

export default ProductItem
