import { HighLight } from '../HighLight';
import { Container, ContainerInfoProduct, Description, Icon, Image, Title, Value, ViewImageCenter } from './styles';
import { AntDesign } from '@expo/vector-icons'

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
        />

        <Value>
          {`R$ ` + value}
        </Value>
      
      </ContainerInfoProduct>
    </Container>
  )
}