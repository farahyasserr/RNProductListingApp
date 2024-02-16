import React, { useEffect } from 'react'
import ProductDetailsView from './ProductDetailsScreen.view'
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductDetailsQuery } from '../../services/product/productApi';
import { TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';
import { colors } from '../../theme/Colors';
import { addItem, removeItem } from '../../store/reducers/WishList';
import Product from '../../types/Product';
import { RootState } from '../../store/reducers';
import { HomeStackPropsType } from '../../navigation/Home/HomeStack';

interface Props extends HomeStackPropsType<'ProductDetails'>{}

function ProductDetailsScreen({navigation, route}: Props) {

    const dispatch = useDispatch();
    const productId =  route.params?.id

    const { data: productItem, isLoading } = useGetProductDetailsQuery(productId);

    const wishList = useSelector((state: RootState) => state.wishlist.items)

    const isWishList = wishList.find((item : Product) => item.id === productItem?.id)

    useEffect(() => {
        // Customize header options
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{marginEnd: 12}} onPress={addToWishlistHandler}>
                    <Heart fill={isWishList ? colors.primary : colors.transparent} size={20} color={isWishList? colors.primary: colors.black}/>
                </TouchableOpacity>
            ),
        });
    }, [productItem, wishList.toString()]);



    const addToWishlistHandler = () => {
        if(productItem){
            //Check if it's in wishlist remove from wishlist, otherwise add to wishlist
            isWishList ? dispatch(removeItem(productItem.id)) : dispatch(addItem(productItem));
        }
    }
   

    return (
        <ProductDetailsView isLoading={isLoading} productItem={productItem} />
    )
}

export default ProductDetailsScreen
