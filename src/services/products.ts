import { Alert } from "react-native";
import { AppError } from "../utils/AppError";
import { api } from "./api";
import { ProductProps } from "../@types/productsDTO";

export async function getAllProducts() {
  try{
    const response = await api.get('/products');
    return response.data;
  }catch(error) {
    const isAppError = error instanceof AppError;

    if(isAppError) {
      Alert.alert(error.message)
    }else{
      Alert.alert("Não foi possível carregar os produtos, tente novamente mais tarde.")
    }
  }
}

export async function getProductByID(id:string) {
  try{
    const response = await api.get(`/products/${id}`);
    return response.data;
  }catch(error) {
    const isAppError = error instanceof AppError;

    if(isAppError) {
      Alert.alert(error.message)
    }else{
      Alert.alert("Não foi possível carregar os dados do produto, tente novamente mais tarde.")
    }
  }
}