import React from 'react'
import Product from '../../../../types/Product'
import { Image, Text, TouchableOpacity, View} from 'react-native'
import styles from './ProductItem.styles'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavType } from '../../../../navigation/Home/HomeStack'
import { currency } from '../../../../data/mock/Currency'
interface Props {
    product: Product
}

function ProductItem(props: Props) {
    const {product} = props
    const navigation = useNavigation<HomeStackNavType<'Home'>>();

    const pressItemhandler = () => {
        navigation.navigate('ProductDetails', { id: product.id });
      };

    return (
        <TouchableOpacity style={styles.mainContainer} onPress={pressItemhandler} testID={String(product.id)}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
            <View style={styles.dataContainer}>
                <Text numberOfLines={1} style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} {currency}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem
