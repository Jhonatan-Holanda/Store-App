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
import { Alert, ScrollView, View } from "react-native";
import { addProductInCart } from "../../storage/Cart/addProductCart";
import { AppError } from "../../utils/AppError";

type RouteParams = {
  id: string
}

export function DetailProduct(){
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  async function fetchProductById() {
    try {
      setLoading(true);
      const response = await getProductByID(id);
      setProduct(response);
    } catch (error) {
      const isAppError = error instanceof AppError;

      if(isAppError) {
        Alert.alert(error.message)
      }else{
        Alert.alert("Não foi possível carregar osa dados do produto, tente novamente mais tarde.")
      }
    } finally {
      setLoading(false);
    }
  }

  async function AddProductInCart(idProduct: string, quantity: number){
    try {
      if(quantity === 0){
        return Alert.alert('Informe a quantidade que deseja adicionar ao carrinho');
      }

      await addProductInCart(idProduct, quantity);
    }catch(error){
      if(error instanceof AppError){
        Alert.alert(error.message);
      }else{
        console.log(error);
        Alert.alert('Não foi possível adicionar o produto no carrinho, tente novamente mais tarde.')
      }
    }
  }

  function handleAddProductInCart() {
    AddProductInCart(id, quantity);
    Alert.alert(
      'Adicionar produto ao carrinho',
      'Deseja continuar comprando?',
      [
        {text: "Sim", onPress: () => navigation.navigate('products')},
        {text: "Ir para ao carrinho", onPress: () => navigation.navigate('cart')},
      ]
    )
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
            onPress={handleAddProductInCart} 
          />
        </ScrollView>
      }
    </Container>
  )
}