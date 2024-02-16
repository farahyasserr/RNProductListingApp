import { Text, View } from 'react-native';
import React from 'react';
import { Divider, Rating } from '../../../components';
import Product from '../../../types/Product';
import styles from './productInfo.styles';
import { currency } from '../../../data';
interface Props {
  item?: Product;
}

function ProductInfo(props: Props) {
  const {item} = props;

  return (
    <View style={styles.infoContainer}>
      <View style={styles.horizontalSubContainer}>
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          <Rating rating={item?.rating} />
        </View>
        <Text style={styles.price}>
          {item?.price} {currency}
        </Text>
      </View>
      <Divider />
      <Text style={styles.descTitle}>Description</Text>
      <Text style={styles.description}>{item?.description}</Text>
      <Text style={styles.brand}>Sold by: {item?.brand}</Text>
    </View>
  );
}

export default ProductInfo;
