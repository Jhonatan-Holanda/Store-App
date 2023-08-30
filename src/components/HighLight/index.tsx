import { Container, Description, Title } from './styles'

type HighLightProps = {
  title: string,
  description: string,
  short: boolean,
  detail: boolean
}

export function HighLight({title , description, short, detail = false}: HighLightProps) {
  return (
    <Container>
      <Title testID='titleHighLight' detail={detail}>
        {short ? title.substring(0,22) + '...' : title}
      </Title>
      <Description testID='descriptionHighLight' detail={detail}>
        {short ? description.substring(0, 50).toLowerCase() + `...` : description}
      </Description>
    </Container>
  )
}