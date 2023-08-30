import { Container, Description, Title } from './styles';

type HighLightProps = {
  title: string;
  description: string;
  short: boolean;
};

export function HighLight({ title, description, short }: HighLightProps) {
  function substring(string: string, length: number) {
    if (string.length <= length) {
      return string;
    }
    return `${string.substring(0, length)}...`;
  }

  return (
    <Container>
      <Title short={short}>{short ? substring(title, 22) : title}</Title>
      <Description short={short}>
        {short ? substring(description, 50).toLowerCase() : description}
      </Description>
    </Container>
  );
}
