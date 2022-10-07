import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import Register from '../screens/Register';
import IsDev from '../screens/IsDev';
import Profile from '../screens/Profile';
import {TabNav} from './TabNav';

export type RootStackParamList = {
  LoginScreen: undefined;
  IsDev: undefined;
  Register: {isDev: boolean};
  Profile: undefined;
  TabNav: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="IsDev" component={IsDev} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
