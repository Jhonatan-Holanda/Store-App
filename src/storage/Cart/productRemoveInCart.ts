import AsyncStorage from "@react-native-async-storage/async-storage";

import { CART_COLLECTION } from "../storageConfig";

import { cartGetALL } from "./getProductsCarts";

export async function productRemoveInCart(id: string) {
  try {
    const storage = await cartGetALL();

    const filteredProducts = storage.filter(product => product.productId !== id);
    const products = JSON.stringify(filteredProducts);

    await AsyncStorage.setItem(`${CART_COLLECTION}`, products);
  } catch (error) {
    throw error;
  }
}