import { httpClient } from '../infra';
import { Product } from '../models';

export async function getProducts() {
  const response = await httpClient.get<Product[]>('/products');
  return response.data;
}

export async function getProductById(id: string) {
  const response = await httpClient.get<Product>(`/products/${id}`);
  return response.data;
}
