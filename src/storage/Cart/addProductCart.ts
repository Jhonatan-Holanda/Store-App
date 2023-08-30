import AsyncStorage from "@react-native-async-storage/async-storage";
import { CART_COLLECTION } from "../storageConfig";
import { cartGetALL } from "./getProductsCarts";
import { AppError } from "../../utils/AppError";

export async function addProductInCart(idProduct: string, quantity: number){
  try {
    
    const storedProductCart = await cartGetALL();
    const productAlreadyInCart = storedProductCart.filter(item => item.productId === idProduct);
    if(productAlreadyInCart.length > 0) {
      throw new AppError("Produto já foi adicionado no carrinho.")
    }

    const storage = JSON.stringify([...storedProductCart, {productId:idProduct,quantity:quantity}])

    await AsyncStorage.setItem(`${CART_COLLECTION}`, storage)
  } catch (error) {
    throw error;
  }
}