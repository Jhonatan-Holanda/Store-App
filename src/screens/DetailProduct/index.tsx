import { useTheme } from "styled-components/native";
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

import { HighLight } from "../../components/HighLight"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { QuantityCount } from "../../components/QuantityCount";
import { Loading } from "../../components/Loading";

import { ProductProps } from '../../@types/productsDTO';

import { Container, Image, ViewImageCenter, Value, ContainerValue } from "./styles";
import { getProductByID } from '../../services/products';
import { ScrollView, View } from "react-native";

type RouteParams = {
  id: string
}

export function DetailProduct(){
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  async function fetchProductById() {
    setLoading(true);
    const response = await getProductByID(id);
    setProduct(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchProductById();
  }, [])
  
  return (
    <Container>
      <Header
        showBackButton={true}
        showCartIcon={true}
        title={'Detalhe do produto'}
      />

      {loading || !product ?
        <Loading />
      :
        <ScrollView showsVerticalScrollIndicator={false}>
          <ViewImageCenter>
            <Image source={{uri: product.image}} resizeMode='contain'/>
          </ViewImageCenter>

          <HighLight
            title={product.title}
            description={product.description}
            short={false}
            detail={true}
          />

          <ContainerValue>
            <Value>
              {'R$ ' + product.price}
            </Value>
            
            <QuantityCount sizeIcon={48} value={quantity} setQuantity={setQuantity}/>
          </ContainerValue>

          <Button
            title='Adicione ao carrinho'
          />
        </ScrollView>
      }
    </Container>
  )
}