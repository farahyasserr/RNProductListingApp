import React from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import ProductItem from '../../components/shared/ProductItem/ProductItem.view'
import Product from '../../types/Product';
import Loader from '../../components/shared/Loader/Loader.view';
import styles from './HomeScreen.styles';

interface Props {
    isLoading: Boolean,
    products?: Product[],
}

function HomeScreenView({isLoading, products}: Props) {

    return (
        <View style={{paddingHorizontal: 14}}>
            {isLoading? 
            <Loader />
                 :
            <FlatList
            data={products}
            renderItem={({item}) => <ProductItem product={item}/> }
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{alignItems:'center', justifyContent:'space-between'}}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={()=> <Text style={styles.listHeaderText}>Products</Text>}
            />}
        </View>
    )
}

export default HomeScreenView
