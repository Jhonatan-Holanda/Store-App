import AsyncStorage from "@react-native-async-storage/async-storage";

import { CART_COLLECTION } from "../storageConfig";
import { PropProductInCart } from "./cartDTO";

export async function cartGetALL() {
  try {
    const storage = await AsyncStorage.getItem(CART_COLLECTION);
    const productsCart: PropProductInCart[] = storage ? JSON.parse(storage) : [];

    return productsCart;
  } catch (error) {
    throw error;
  }
}