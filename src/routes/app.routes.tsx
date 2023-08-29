import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Products } from '../screens/Products';
import { DetailProduct } from '../screens/DetailProduct';
import { Cart } from '../screens/Cart';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="products"
        component={Products}
      />

      <Screen 
        name="detailProduct"
        component={DetailProduct}
      />

      <Screen 
        name="cart"
        component={Cart}
      />
    </Navigator>
  )
}