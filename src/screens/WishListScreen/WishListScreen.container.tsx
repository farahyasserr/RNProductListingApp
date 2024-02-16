import React from 'react'
import WishListView from './WishListScreen.view'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'

interface Props {}

function WishListScreen(props: Props) {
    const {} = props

    const wishlist = useSelector((state: RootState) => state.wishlist.items)

    return (
        <WishListView wishlist = {wishlist}/>
    )
}

export default WishListScreen
