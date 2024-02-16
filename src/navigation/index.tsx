import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishListScreen from '../screens/WishListScreen/WishListScreen.container';
import { HomeStack } from './HomeStack';


const Tab = createBottomTabNavigator();


function TabNavigator(){
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
      <Tab.Screen name="WishList" component={WishListScreen} />
    </Tab.Navigator>
  )
}





export default TabNavigator;