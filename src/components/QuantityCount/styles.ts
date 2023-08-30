import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ContainerQuantity = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px;
`;

export const QuantityProduct = styled.Text`
  padding: 0px 15px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL};
  `}
`;

export const CountQuantity = styled(TouchableOpacity)``;
