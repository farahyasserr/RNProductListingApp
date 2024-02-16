import React from 'react'
import { View , Text } from 'react-native'
import { Rating } from 'react-native-ratings'
import styles from './Rating.styles'

interface Props {
    rating?: number
}

function RatingView(props: Props) {
    const {rating} = props
    console.log("rating", rating)

    return (
        <View style={styles.container}>
            <Rating
            type='star'
            ratingCount={5}
            imageSize={18}
            readonly
            startingValue={rating}
            />
        </View>
    )
}

export default RatingView
