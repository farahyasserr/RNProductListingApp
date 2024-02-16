import React from 'react'
import { View, Text , FlatList, ListRenderItem, Image, TouchableOpacity} from 'react-native'
import Product from '../../types/Product'
import EmptyWishlist from './EmptyWishlist/EmptyWishlist'
import styles from './WishListScreen.styles'
import { Heart, ShoppingCart } from 'lucide-react-native'
import { colors } from '../../theme/Colors'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../store/reducers/WishList'

interface Props {
    wishlist: Product[]
}

function WishListView(props: Props) {
    const {wishlist} = props

    const dispatch = useDispatch();

   

    const renderItem: ListRenderItem<Product> = ({ item }) => {
        const isWishList = !!wishlist.find((wishlistItem: Product) => wishlistItem.id === item?.id);

        const addToWishlistHandler = (item : Product) => {
            isWishList ? dispatch(removeItem(item.id)) : dispatch(addItem(item));
        }
    
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 , backgroundColor: 'white', borderRadius: 10, padding: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', }}>
                <Image source={{ uri: item?.thumbnail }} style={styles.image} resizeMode={'cover'} />
                <View>
                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontWeight: 'bold', color: colors.gray }}>{item.price} AED</Text>
                </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <ShoppingCart size={20} color={colors.black} style={{marginEnd: 10}} />
                    <Heart fill={colors.black} onPress={() => addToWishlistHandler(item)} size={20} color={colors.black} />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            { wishlist.length ===0?
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
