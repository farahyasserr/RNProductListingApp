import { View , Text, Image } from 'react-native'
import React from 'react'
import { Heart, ShoppingCart } from 'lucide-react-native'
import { colors } from '../../../../theme/Colors'
import styles from './WishlistItem.styles'
import Product from '../../../../types/Product'
import { currency } from '../../../../data/mock/Currency'

interface Props {
    item: Product
    addToCartHandler: ()=>void
    removeFromWishlistHandler: (item : Product)=> void
}


function WishlistItem(props: Props) {

    const {item, addToCartHandler, removeFromWishlistHandler} = props

    return (
    <View style={styles.mainContainer}>
        <View style={styles.imageAndTextContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode={'cover'} />
            <View>
                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price} {currency}</Text>
            </View>
        </View>
            <View style={styles.iconsContainer}>
                <ShoppingCart onPress={addToCartHandler} size={20} color={colors.black} style={styles.cartIcon} />
                <Heart fill={colors.primary} onPress={() => removeFromWishlistHandler(item)} size={20} color={colors.primary} />
            </View>
    </View>
    )
}

export default WishlistItem
