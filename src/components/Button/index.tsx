import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

export function Button({ children, ...rest }: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
}
