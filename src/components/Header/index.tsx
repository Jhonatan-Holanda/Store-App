import { Icon } from "../IconComponent";
import { Container, Title } from "./styles";
import { useTheme } from "styled-components/native";

type Props = { 
  showBackButton?: boolean;
  title: string
}

export function Header({ showBackButton = false, title}: Props) {
  const theme = useTheme();

  return (
    <Container>
      { showBackButton &&

        <Icon iconName="left" size={32} color={theme.COLORS.GRAY_400}/>
      }
      <Title>
        {title}
      </Title>
    </Container>
  )
}