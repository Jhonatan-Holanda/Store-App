import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import {
  Button,
  Header,
  HighLight,
  Loading,
  QuantityCount,
} from '../../components';
import { AppError, Product } from '../../models';
import { addProductInCart, getProductById } from '../../services';

import {
  Container,
  ContainerValue,
  Image,
  Value,
  ViewImageCenter,
} from './styles';

type RouteParams = {
  id: string;
};

export function ProductDetails() {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  async function fetchProductById() {
    try {
      setLoading(true);
      const response = await getProductById(id);
      setProduct(response);
    } catch (error) {
      const isAppError = error instanceof AppError;

      Alert.alert(
        isAppError
          ? error.message
          : 'Não foi possível carregar os dados do produto, tente novamente mais tarde.'
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleAddProductInCart() {
    try {
      await addProductInCart({ id, quantity: `${quantity}` });
    } catch (error) {
      const isAppError = error instanceof AppError;

      Alert.alert(
        isAppError
          ? error.message
          : 'Não foi possível adicionar o produto no carrinho, tente novamente mais tarde.'
      );
    }

    Alert.alert(
      'Produto adicionado ao carrinho',
      'Deseja continuar comprando?',
      [
        { text: 'Sim', onPress: () => navigation.navigate('products') },
        {
          text: 'Ir para ao carrinho',
          onPress: () => navigation.navigate('cart'),
        },
      ]
    );
  }

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <Container>
      <Header title="Detalhe do produto" showBackButton showCartIcon />

      {loading || !product ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ViewImageCenter>
            <Image source={{ uri: product.image }} resizeMode="contain" />
          </ViewImageCenter>

          <HighLight
            title={product.title}
            description={product.description}
            short={false}
          />

          <ContainerValue>
            <Value>{`R$ ${product.price}`}</Value>

            <QuantityCount
              iconSize={48}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </ContainerValue>

          <Button onPress={handleAddProductInCart}>Adicione ao carrinho</Button>
        </ScrollView>
      )}
    </Container>
  );
}
