import { HighLight } from '../HighLight';
import { Container, ContainerInfoProduct, ContainerValue, Icon, Image, Value, ViewImageCenter } from './styles';
import { QuantityCount } from '../QuantityCount';

type CardProductProps = {
  image: string;
  title: string;
  description: string;
  value: string;
  fill?: boolean;
}

export function CardProduct({image, title, description, value, fill, ...rest}: CardProductProps){
  return (
    <Container
      fill={fill}
      {...rest}
    >
      {!fill && <Icon name='hearto'/>}

      <ViewImageCenter 
        fill={fill}
      >
        <Image source={{uri: image}}/>
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
          {`R$ ` + value}
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