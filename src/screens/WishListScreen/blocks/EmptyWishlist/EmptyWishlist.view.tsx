import { View , Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './EmptyWishlist.styles'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavType } from '../../../../navigation';

function EmptyWishlist() {
    const navigation = useNavigation<BottomTabNavType<'Wishlist'>>();

    const startShoppingHandler = () =>{
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container} testID='empty-wishlist'>
            <Text style={styles.title}>Your wishlist is empty!</Text>
            <Text style={styles.description}>Explore more and shortlist some items</Text>
            <TouchableOpacity onPress={startShoppingHandler}><Text style={styles.buttonText}>Start Shopping!</Text></TouchableOpacity>
        </View>
    )
}

export default EmptyWishlist
