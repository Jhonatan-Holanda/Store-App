import { Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";

import { CardProduct } from "../../components/CardProduct";
import { Header } from "../../components/Header";

import { Container } from "./styles";
import { Loading } from "../../components/Loading";
import { cartGetALL } from "../../storage/Cart/getProductsCarts";
import { ProductProps } from "../../@types/productsDTO";
import { getProductByID } from "../../services/products";
import { AppError } from "../../utils/AppError";
import { productRemoveInCart } from "../../storage/Cart/productRemoveInCart";

type PropProduct = ProductProps &  {
  quantity: number
};

export function Cart(){
  const [loading, setLoading] = useState (false);
  const [products, setProducts] = useState<PropProduct[]>([]);

  async function fetchCartGetALL() {
    try {
      setLoading(true);
      const productsInCart = await cartGetALL();

      const productsInCartWithDetail: PropProduct[] = [];
      
      for(const product of productsInCart){
        const response = await getProductByID(product.productId);

        productsInCartWithDetail.push({...product, ...response });
      };

      setProducts(productsInCartWithDetail)
    } catch (error) {
      const isAppError = error instanceof AppError;

      if(isAppError) {
        Alert.alert(error.message)
      }else{
        Alert.alert("Não foi possível carregar os dados do produto, tente novamente mais tarde.")
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleRemoveProduct(id: string) {
    try {
      await productRemoveInCart(id);
      fetchCartGetALL();
    }catch (error) {
      console.log(error);
      Alert.alert("Remover produto", "Não foi possível remover o produto do carrinho, tente novamente mais tarde.")
    }
  }

  useEffect(()=> {
    fetchCartGetALL();
  },[])


  return(
    <Container>
      <Header
        title='Carrinho'
        showBackButton={true}
      />

      {loading 
      ?
        <Loading />
      :
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardProduct
              title={item.title}
              id={item.id}
              image={item.image}
              description={item.description}
              price={item.price}
              fill={true}
              quantity={item.quantity}
              onRemoveProductInCart={() => handleRemoveProduct(item.id)}
            />
          )}
        />
      }
    </Container>
  )
}