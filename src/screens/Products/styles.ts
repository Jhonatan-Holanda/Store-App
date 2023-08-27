import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE_200};
  padding: 24px;
`

export const Title = styled.Text`
  text-align: center;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: bold;
  `}
`