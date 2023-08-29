import { HighLight } from '../HighLight';
import { Container, ContainerInfoProduct, ContainerValue, Icon, Image, Value, ViewImageCenter } from './styles';
import { QuantityCount } from '../QuantityCount';
import { ProductProps } from '../../@types/productsDTO';
import { TouchableOpacityProps } from 'react-native';

type Props = ProductProps & TouchableOpacityProps & {
  fill?: boolean;
}

export function CardProduct({description, image, price, title, fill, ...rest}: Props){
  return (
    <Container
      fill={fill}
      {...rest}
    >
      {!fill && <Icon name='hearto'/>}

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
        <Value>
          {`R$ ` + price}
        </Value>

        {fill && 
          <QuantityCount 
            sizeIcon={32}
          />
        }
      </ContainerValue>
    </Container>
  )
}