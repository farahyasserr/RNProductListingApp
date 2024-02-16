import React from 'react'
import WishListView from './WishListScreen.view'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
import Product from '../../types/Product'
import { removeItem } from '../../store/reducers/WishList'
import { Alert } from 'react-native'

function WishListScreen() {

    const dispatch = useDispatch();
    const wishlist = useSelector((state: RootState) => state.wishlist.items)

    const removeFromWishlistHandler = (item : Product) => { dispatch(removeItem(item.id)) }
    const addToCartHandler = () =>{
        Alert.alert("Coming soon!")
    }

    return (
        <WishListView wishlist = {wishlist} addToCartHandler={addToCartHandler} removeFromWishlistHandler={removeFromWishlistHandler} />
    )
}

export default WishListScreen
