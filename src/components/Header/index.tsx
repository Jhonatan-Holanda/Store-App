import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Icon } from '..';

import { Container, ContainerButton, Title } from './styles';

type Props = {
  showBackButton?: boolean;
  showCartIcon?: boolean;
  title: string;
};

export function Header({
  showBackButton = false,
  showCartIcon = false,
  title,
}: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('products');
  }

  function handleGoCart() {
    navigation.navigate('cart');
  }

  return (
    <Container>
      {showBackButton && (
        <ContainerButton onPress={handleGoHome}>
          <Icon iconName="left" size={32} color={theme.COLORS.GRAY_400} />
        </ContainerButton>
      )}

      <Title>{title}</Title>

      {showCartIcon && (
        <ContainerButton onPress={handleGoCart}>
          <Icon
            iconName="shoppingcart"
            size={32}
            color={theme.COLORS.GRAY_400}
          />
        </ContainerButton>
      )}
    </Container>
  );
}
