import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { RobotoMono_600SemiBold, RobotoMono_700Bold } from '@expo-google-fonts/roboto-mono';
import { useFonts, EncodeSans_400Regular, EncodeSans_700Bold } from '@expo-google-fonts/encode-sans';

import React from 'react';
import defaultTheme from './src/theme/default';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({RobotoMono_600SemiBold, RobotoMono_700Bold, EncodeSans_400Regular, EncodeSans_700Bold})

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}