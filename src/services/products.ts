import { api } from "./api";

export async function getAllProducts() {
  try{
    const response = await api.get('/products');
    return response.data;
  }catch(error) {
    throw error;
  }
}

export async function getProductByID(id:string) {
  try{
    const response = await api.get(`/products/${id}`);
    return response.data;
  }catch(error) {
    throw error;
  }
}