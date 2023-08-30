import { useNavigation } from "@react-navigation/native";
import { IconComponent } from "../IconComponent";
import { Container, ContainerButton, Title } from "./styles";
import { useTheme } from "styled-components/native";

type Props = { 
  showBackButton?: boolean;
  showCartIcon?: boolean;
  title: string
}

export function Header({ showBackButton = false, showCartIcon = false, title}: Props) {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBackHome() {
    navigation.navigate('products')
  }

  function handleGoCart() {
    navigation.navigate('cart')
  }

  return (
    <Container>
      { showBackButton &&
        <ContainerButton onPress={handleGoBackHome}>
          <IconComponent iconName="left" size={32} color={theme.COLORS.GRAY_400}/>
        </ContainerButton>
      }
      <Title>
        {title}
      </Title>
      { showCartIcon &&
        <ContainerButton onPress={handleGoCart}>
          <IconComponent iconName="shoppingcart" size={32} color={theme.COLORS.GRAY_400}/>
        </ContainerButton>
      }
    </Container>
  )
}