
import styled from "styled-components/native";
import { ActivityIndicator } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
  background-color: ${({theme}) => theme.COLORS.WHITE_200};
`
export const LoadingIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_400,
  size: 40
}))``;