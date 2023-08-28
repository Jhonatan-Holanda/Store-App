import { HighLight } from '../HighLight';
import { Container, ContainerInfoProduct, Icon, Image, Value, ViewImageCenter } from './styles';

type CardProductProps = {
  image: string;
  title: string;
  description: string;
  value: string;
}

export function CardProduct({image, title, description, value}: CardProductProps){
  return (
    <Container>
      <Icon name='hearto'/>

      <ViewImageCenter>
        <Image source={{uri: image}}/>
      </ViewImageCenter>
      
      <ContainerInfoProduct>
        <HighLight
          title={title}
          description={description}
          short={true}
          detail={false}
        />

        <Value>
          {`R$ ` + value}
        </Value>
      
      </ContainerInfoProduct>
    </Container>
  )
}