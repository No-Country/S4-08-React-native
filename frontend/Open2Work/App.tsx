import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Navigation } from './src/navigation/Navigation';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#17f1de',
    accent: 'yellow',
    background: '#39304d',
    surface: '#1f1a30',
    text: '#fff',
    placeholder: '#fff'
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App;

