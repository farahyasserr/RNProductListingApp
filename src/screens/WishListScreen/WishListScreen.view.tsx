import React from 'react'
import { View, FlatList, ListRenderItem, Alert} from 'react-native'
import Product from '../../types/Product'
import EmptyWishlist from './EmptyWishlist/EmptyWishlist'
import styles from './WishListScreen.styles'
import WishlistItem from './WishlistItem/WishlistItem.view'

interface Props {
    wishlist: Product[]
    removeFromWishlistHandler: (item : Product)=> void
    addToCartHandler: ()=> void
}

function WishListView(props: Props) {
    const {wishlist, removeFromWishlistHandler, addToCartHandler } = props
   
    const renderItem: ListRenderItem<Product> = ({ item }) => {
        return (
           <WishlistItem item={item} removeFromWishlistHandler={removeFromWishlistHandler} addToCartHandler={addToCartHandler}/>
        );
    };

    return (
        <View style={styles.mainContainer}>
            { wishlist.length ===0 ?
            <EmptyWishlist />:
            <FlatList 
            data={wishlist} 
            renderItem={renderItem} 
            keyExtractor={item => item.id.toString()}/>
            }
        </View>
    )
}

export default WishListView
