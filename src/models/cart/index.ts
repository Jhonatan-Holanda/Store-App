import { Product } from '..';

export type CartProduct = {
  id: string;
  quantity: string;
};

export type CartProductWithDetails = CartProduct & Product;
