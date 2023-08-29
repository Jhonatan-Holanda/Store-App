import { FlatList } from 'react-native'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { CardProduct } from '../../components/CardProduct'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading';

import { getAllProducts } from '../../services/products';
import { ProductProps } from '../../@types/productsDTO';

import { Container } from './styles'

export function Products() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function fetchAllProducts() {
    
    setLoading(true);
    
    const products = await getAllProducts();
    setProducts(products);
    setLoading(false);
  }


  useEffect(() => {
    fetchAllProducts();
  },[])

  function handleOpenDetailProduct(id: string) {
    navigation.navigate('detailProduct', { id })
  }

  return(
    <Container>
      <Header 
        showCartIcon={true}
        title='Produtos'
      />
      {loading || !products
      ?
        <Loading />
      :
        <FlatList
          numColumns={2}
          columnWrapperStyle={{justifyContent:'center', gap: 10, marginBottom: 10}}
          data={products}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <CardProduct
              description={item.description}
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              fill={false}
              onPressOut={() => handleOpenDetailProduct(item.id)}
            />
          )}
        />
      }
    </Container>
  )
}