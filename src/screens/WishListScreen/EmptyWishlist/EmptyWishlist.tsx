import { View , Text } from 'react-native'
import React from 'react'
import styles from './EmptyWishlist.styles'

interface Props {}

function EmptyWishlist(props: Props) {
    const {} = props

    return (
        <View>
            <Text style={styles.title}>Your wishlist is empty!</Text>
            <Text style={styles.description}>Explore more and shortlist some items</Text>
        </View>
    )
}

export default EmptyWishlist
