import styled, { css } from 'styled-components/native';

type HighLightStyleProps = {
  short: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text<HighLightStyleProps>`
  margin: 10px 0px;
  ${({ theme, short }) => css`
    font-size: ${short ? theme.FONT_SIZE.SM : theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD_MONO};
    color: ${theme.COLORS.GRAY_400};
  `}
`;

export const Description = styled.Text<HighLightStyleProps>`
  text-align: left;
  margin-bottom: 10px;

  ${({ theme, short }) => css`
    font-size: ${short ? theme.FONT_SIZE.SM : theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}

  ${({ short }) =>
    short &&
    css`
      height: 45px;
    `}
`;
