import { useTheme } from "styled-components/native";

import { HighLight } from "../../components/HighLight"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { QuantityCount } from "../../components/QuantityCount";

import { Container, Image, ViewImageCenter, Value, ContainerValue } from "./styles";

export type CardProductProps = {
  image: string;
  title: string;
  description: string;
  value: string;
} 

export function DetailProduct(){
  const theme = useTheme();

  const mockProduct: CardProductProps = {
    title: 'Mens Casual Slim Fit',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    value: '15.99',
  };
  
  return (
    <Container>
      <Header
        showBackButton={true}
        title={'Detalhe do produto'}
      />

      <ViewImageCenter>
        <Image source={{uri: mockProduct.image}} />
      </ViewImageCenter>

      <HighLight
        title={mockProduct?.title}
        description={mockProduct?.description}
        short={false}
        detail={true}
      />

      <ContainerValue>
        <Value>
          {'R$ ' + mockProduct.value}
        </Value>
        
        <QuantityCount />
      </ContainerValue>
        

      <Button
        title='Adicione ao carrinho'
      />
    </Container>
  )
}