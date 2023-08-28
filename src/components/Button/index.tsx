import { Container, Title } from "./styles";

type Props = {
  title:string
}

export function Button({title, ...rest}: Props) {
  return(
    <Container
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}
