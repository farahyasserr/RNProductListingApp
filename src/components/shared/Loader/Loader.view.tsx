import React from 'react'
import { ActivityIndicator , View } from 'react-native'
import styles from './Loader.styles'
import { colors } from '../../../theme/Colors'

interface Props {}

function Loader(props: Props) {
    const {} = props

    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size={30} color={colors.gray} />
        </View> 
    )
}

export default Loader
