import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import defaultTheme from './src/theme/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

    </ThemeProvider>
  );
}