import { StatusBar, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';

import defaultTheme from './src/theme/default';
import { DetailProduct } from './src/screens/DetailProduct';

export default function App() {
  const [fontsLoaded] = useFonts({EncodeSans_400Regular, EncodeSans_700Bold})

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <DetailProduct /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}