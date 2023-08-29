import { StatusBar, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { RobotoMono_600SemiBold, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';

import defaultTheme from './src/theme/default';
import { Products } from './src/screens/Products';
import { DetailProduct } from './src/screens/DetailProduct';
import { Cart } from './src/screens/Cart';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({RobotoMono_600SemiBold, RobotoMono_700Bold, EncodeSans_400Regular, EncodeSans_700Bold})

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Products /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}