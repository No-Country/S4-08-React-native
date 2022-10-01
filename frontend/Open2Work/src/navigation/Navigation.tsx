import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';

export type RootStackParamList = {
  LoginScreen: undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LoginScreen" component={ LoginScreen } />
    </Stack.Navigator>
  );
}