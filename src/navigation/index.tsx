import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishListScreen from '../screens/WishListScreen/WishListScreen.container';
import { HomeStack } from './HomeStack';
import { Heart, Home } from 'lucide-react-native';
import { colors } from '../theme/Colors';


const Tab = createBottomTabNavigator();


function TabNavigator(){
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: colors.primary}} >
      <Tab.Screen 
      name="Home" 
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