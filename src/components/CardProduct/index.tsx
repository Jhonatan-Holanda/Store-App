import { Container, Description, Icon, Image, Title, Value, ViewImageCenter } from './styles';
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
      
      <Title>
        {title}
      </Title>

      <Description>
        {description.substring(0, 76) + `...`}
      </Description>

      <Value>
        {`R$ ` + value}
      </Value>
    </Container>
  )
}