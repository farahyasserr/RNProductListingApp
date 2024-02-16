import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme/Colors';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    resizeMode: 'cover',
  },
  descTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  infoContainer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    height: '100%',
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    maxWidth: 260,
  },
  price: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  brand: {
    fontWeight: 'bold',
    color: colors.gray,
  },
  description: {
    marginVertical: 10,
  },
  horizontalSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
