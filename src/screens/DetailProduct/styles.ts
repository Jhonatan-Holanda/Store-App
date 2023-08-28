import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 30px;
`

export const ViewImageCenter = styled.View`
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 20px;
`

export const Value = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-weight: bold;
  `} 
`

export const ContainerQuantity = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px;
`

export const QuantityProduct = styled.Text`
  padding: 0px 15px;

  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_400}
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
  `} 
`

export const CountQuantity = styled(TouchableOpacity)``

export const ContainerValue = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`