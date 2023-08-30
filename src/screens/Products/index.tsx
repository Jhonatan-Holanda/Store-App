import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { CardProduct, Header, Loading } from '../../components';
import { AppError, Product } from '../../models';
import { getProducts } from '../../services/';

import { Container } from './styles';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  async function fetchProducts() {
    try {
      const products = await getProducts();
      setProducts(products);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleOpenDetailProduct(id: string) {
    navigation.navigate('productDetails', { id });
  }

  return (
    <Container>
      <Header title="Produtos" showCartIcon />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'center',
            gap: 10,
            marginBottom: 10,
          }}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardProduct
              product={item}
              fill={false}
              onPressOut={() => handleOpenDetailProduct(item.id)}
            />
          )}
        />
      )}
    </Container>
  );
}
