import { BottomTabNavigationProp, BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './Home/HomeStack';
import { Heart, Home } from 'lucide-react-native';
import { colors } from '../theme/Colors';
import { WishListScreen } from '../screens';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export type BottomTabPropsType<T extends keyof BottomTabParamList> = BottomTabScreenProps<BottomTabParamList, T>
export type BottomTabNavType<T extends keyof BottomTabParamList> = BottomTabNavigationProp<BottomTabParamList, T>

export type BottomTabParamList = {
    HomeStack: undefined
    Wishlist: undefined
}

function TabNavigator(){
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: colors.primary}} >
      <Tab.Screen 
      name="HomeStack" 
      component={HomeStack} 
      options={{headerShown: false, tabBarIcon: ({focused})=> <Home size={20} color={focused? colors.primary : colors.black} /> }}/>
      <Tab.Screen 
      name="Wishlist" 
      component={WishListScreen} 
      options={{tabBarIcon: ({focused})=> <Heart size={20} color={focused? colors.primary : colors.black}/> }}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;