import { createStackNavigator, StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen.view';
import { ChevronLeft } from 'lucide-react-native'
import { colors } from '../theme/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishListScreen from '../screens/WishListScreen/WishListScreen.container';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen.container';

export type HomeStackParamList = {
  Home: undefined
  ProductDetails: {
    id: number
  }
}

export type HomeStackPropsType<T extends keyof HomeStackParamList> = StackScreenProps<HomeStackParamList, T>
export type HomeStackNavType<T extends keyof HomeStackParamList> = StackNavigationProp<HomeStackParamList, T>

const Stack = createStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator();


function TabNavigator(){
  return (
    <Tab.Navigator >
    <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
    <Tab.Screen name="WishList" component={WishListScreen} />
  </Tab.Navigator>
  )
}



function HomeStack() {
  return (
    <Stack.Navigator  
    screenOptions={{
      headerBackTitleVisible:false,
      headerBackImage: ()=> (<ChevronLeft size={30} color={colors.black} />)

    }}
     >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
}


export default TabNavigator;