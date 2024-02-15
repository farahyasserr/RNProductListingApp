import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}


export default HomeStack;