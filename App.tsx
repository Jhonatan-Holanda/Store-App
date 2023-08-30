import {
  EncodeSans_400Regular,
  EncodeSans_700Bold,
  useFonts,
} from '@expo-google-fonts/encode-sans';
import {
  RobotoMono_600SemiBold,
  RobotoMono_700Bold,
} from '@expo-google-fonts/roboto-mono';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Loading } from './src/components';
import { Router } from './src/routes';
import defaultTheme from './src/theme/default';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMono_600SemiBold,
    RobotoMono_700Bold,
    EncodeSans_400Regular,
    EncodeSans_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Router /> : <Loading />}
    </ThemeProvider>
  );
}
