import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {LoginScreen} from './src/screens/LoginScreen';
import Register from './src/screens/Register';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#17f1de',
    accent: 'yellow',
    background: '#39304d',
    surface: '#1f1a30',
    text: '#fff',
    placeholder: '#fff',
  },
};

const App = () => {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: props => <Icon {...props} />,
      }}>
      <SafeAreaView style={{height: '100%'}}>
        <LoginScreen />
        <Register />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
