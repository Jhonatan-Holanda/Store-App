import styled, { css } from "styled-components/native";

export const Container = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
margin: 10px 0px 30px;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
  right: 0;
`;


export const Title = styled.Text`
  flex: 2 100%;
  text-align: center;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: bold;
  `}
`