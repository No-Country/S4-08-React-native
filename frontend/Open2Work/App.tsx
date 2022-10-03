import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigation} from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

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
    placeholder: '#fff',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider
        theme={theme}
        settings={{
          icon: props => <Icon {...props} />,
        }}>
        <SafeAreaView style={{height: '100%'}}>
          <StackNavigation />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
