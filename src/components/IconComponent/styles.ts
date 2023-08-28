import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

type IconStyleProps = {
  size: number;
  color: string
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`

export const IconComponent = styled(AntDesign).attrs<IconStyleProps>(({size, color}) => ({
  size: size,
  color: color
}))``;