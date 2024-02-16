
import { StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import { ChevronLeft } from 'lucide-react-native'
import { colors } from '../theme/Colors';
import HomeScreen from '../screens/HomeScreen/HomeScreen.view';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen.container';
import { createStackNavigator } from '@react-navigation/stack';


export type HomeStackPropsType<T extends keyof HomeStackParamList> = StackScreenProps<HomeStackParamList, T>
export type HomeStackNavType<T extends keyof HomeStackParamList> = StackNavigationProp<HomeStackParamList, T>

const Stack = createStackNavigator<HomeStackParamList>();

export type HomeStackParamList = {
    Home: undefined
    ProductDetails: {
      id: number
    }
  }


export function HomeStack() {
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