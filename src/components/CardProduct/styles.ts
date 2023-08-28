import { AntDesign } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 163px;
  height: 250px;

  background-color: white;
  border-radius: 10px;
  elevation: 4;
`
export const ViewImageCenter = styled.View`
  align-items: center;
  justify-content: center;
  padding: 30px 0px 0px 0px;
`

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`
export const Title = styled.Text`
  padding: 5px 10px;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-weight: bold;
  `}
`

export const Description = styled.Text`
  padding: 5px 10px;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  text-align: justify;
`
export const Value = styled.Text`
  padding: 5px 10px;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: bold;
  `} 
`

export const Icon = styled(AntDesign).attrs(({}) => ({
  size: 26
}))`
  z-index: 999;
  position: absolute;
  right: 0;
  padding: 15px;
`