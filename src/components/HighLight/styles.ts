import styled, { css } from "styled-components/native";

type HighLightStyleProps = {
  detail: boolean
}

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text<HighLightStyleProps>`
  margin: 10px 0px;
  ${({theme, detail}) => css`
    font-size: ${detail ? theme.FONT_SIZE.LG : theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD_MONO};
    color: ${theme.COLORS.GRAY_400};
  `}
`;

export const Description = styled.Text<HighLightStyleProps>`
  text-align: left;
  margin-bottom: 10px;

  ${({theme, detail}) => css`
    font-size: ${detail ? theme.FONT_SIZE.MD : theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color:${theme.COLORS.GRAY_300};
  `}
`;