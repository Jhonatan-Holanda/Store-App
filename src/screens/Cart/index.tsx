import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { CardProduct, Header, Loading } from '../../components';
import { AppError, CartProductWithDetails } from '../../models';
import {
  getCartProducts,
  getProductById,
  removeProductFromCart,
} from '../../services';

import { Container } from './styles';

export function Cart() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<CartProductWithDetails[]>([]);

  async function fetchCartProducts() {
    try {
      const cartProducts = await getCartProducts();

      const cartProductsWithDetails: CartProductWithDetails[] = [];

      for (const cartProduct of cartProducts) {
        const product = await getProductById(cartProduct.id);

        cartProductsWithDetails.push({ ...cartProduct, ...product });
      }

      setProducts(cartProductsWithDetails);
    } catch (error) {
      const isAppError = error instanceof AppError;

      Alert.alert(
        isAppError
          ? error.message
          : 'Não foi possível carregar os produtos, tente novamente mais tarde.'
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleRemoveProduct(id: string) {
    try {
      await removeProductFromCart(id);
      fetchCartProducts();
    } catch (error) {
      Alert.alert(
        'Remover produto',
        'Não foi possível remover o produto do carrinho, tente novamente mais tarde.'
      );
    }
  }

  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <Container>
      <Header title="Carrinho" showBackButton />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardProduct
              id={item.id}
              product={item}
              quantity={item.quantity}
              onRemoveProductInCart={() => handleRemoveProduct(item.id)}
              fill
            />
          )}
        />
      )}
    </Container>
  );
}
