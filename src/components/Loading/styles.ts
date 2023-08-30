import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: transparent;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(
  ({ theme }) => ({
    color: theme.COLORS.GRAY_400,
    size: 40,
  })
)``;
