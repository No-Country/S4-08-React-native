import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import Register from '../screens/Register';
import IsDev from '../screens/IsDev';

export type RootStackParamList = {
  LoginScreen: () => JSX.Element;
  IsDev: () => JSX.Element;
  Register: {isDev: boolean};
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="IsDev" component={IsDev} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
