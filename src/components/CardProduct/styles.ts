import { TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  fill?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ fill }) => css`
    width: ${fill ? `100%` : '163px'};
    height: ${fill ? 150 : 250}px;
  `}

  background-color: white;
  border-radius: 10px;
  elevation: 4;

  ${({ fill }) =>
    fill &&
    css`
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
    `}
`;
export const ViewImageCenter = styled(View)<Props>`
  align-items: center;
  justify-content: center;

  padding: ${({ fill }) => (!fill ? '20px 0px 0px 0px' : '0px 10px 0px')};
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Value = styled.Text<Props>`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}

  padding: 0px 10px;
  margin-bottom: ${({ fill }) => (!fill ? 0 : 15)}px;
`;

export const ContainerInfoProduct = styled(View)<Props>`
  padding: 5px 10px;
  width: ${({ fill }) => (!fill ? 165 : 140)}px;
`;

export const ContainerValue = styled.View`
  display: flex;
  align-items: space-between;
`;

export const ContainerRemoveProduct = styled(TouchableOpacity)<Props>`
  margin-bottom: 30px;
  right: 0;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin: 5px 0px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD_MONO};
    color: ${theme.COLORS.GRAY_400};
  `}
`;

export const SubTitle = styled.Text`
  text-align: left;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;
