import { Storage } from '../infra';
import { AppError, CartProduct, StorageTokens } from '../models';

export async function getCartProducts() {
  const cartProducts = await Storage.getItem<CartProduct[]>(
    StorageTokens.CART_COLLECTION_TOKEN
  );

  if (!cartProducts) return [];

  return cartProducts;
}

export async function addProductInCart(product: CartProduct) {
  const cartProducts = await getCartProducts();
  const productAlreadyInCart = cartProducts.find(
    (cartProduct) => cartProduct.id === product.id
  );
  if (productAlreadyInCart) {
    throw new AppError('Produto já foi adicionado no carrinho.');
  }

  await Storage.setItem(StorageTokens.CART_COLLECTION_TOKEN, [
    ...cartProducts,
    product,
  ]);
}

export async function removeProductFromCart(id: string) {
  const cartProducts = await getCartProducts();

  const filteredProducts = cartProducts.filter(
    (cartProduct) => cartProduct.id !== id
  );

  await Storage.setItem(StorageTokens.CART_COLLECTION_TOKEN, filteredProducts);
}
