import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cart, ProductDetails, Products } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="products" component={Products} />

      <Screen name="productDetails" component={ProductDetails} />

      <Screen name="cart" component={Cart} />
    </Navigator>
  );
}
