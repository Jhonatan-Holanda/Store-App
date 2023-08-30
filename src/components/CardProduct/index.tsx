import { useTheme } from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

import { HighLight } from '../HighLight';
import { ProductProps } from '../../@types/productsDTO';
import { IconComponent } from '../IconComponent';

import { 
  Container,
  ContainerInfoProduct, 
  ContainerRemoveProduct, 
  ViewImageCenter, 
  ContainerValue,
  ContainerText,
  SubTitle, 
  Title,
  Image, 
  Value 
} from './styles';

type Props = ProductProps & TouchableOpacityProps & {
  fill?: boolean;
  quantity?: number;
  onRemoveProductInCart?: (id:string) => void;
}

export function CardProduct({description, image, price, title, fill, quantity, id, onRemoveProductInCart, ...rest}: Props){
  const theme = useTheme();
  return (
    <Container
      fill={fill}
      {...rest}
    >
      <ViewImageCenter 
        fill={fill}
      >
        <Image source={{uri: image}} resizeMode='contain'/>
      </ViewImageCenter>
      
      <ContainerInfoProduct
        fill={fill}
      >
        <HighLight
          title={title}
          description={description}
          short={true}
          detail={false}
        />
      </ContainerInfoProduct>

      <ContainerValue>
        {fill && 
          <ContainerRemoveProduct onPress={() => onRemoveProductInCart(id)}>
            <IconComponent iconName='close' size={24} color={theme.COLORS.RED_DARK}/>
          </ContainerRemoveProduct>
        }
        <Value>
          {`R$ ` + price}
        </Value>

        {fill && 
          <ContainerText>
            <Title>Quantidade: </Title>
            <SubTitle>{quantity}</SubTitle>
          </ContainerText>
        }
      </ContainerValue>
    </Container>
  )
}