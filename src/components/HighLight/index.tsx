import { Container, Description, Title } from './styles'

type HighLightProps = {
  title: string,
  description: string,
  short: boolean
}

export function HighLight({title , description, short}: HighLightProps) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Description>
        {short ? description.substring(0, 76) + `...` : description}
      </Description>
    </Container>
  )
}