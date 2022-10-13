import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import OrgHome from '../screens/OrgHome';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'OrgStack':
              return (
                <Icon
                  name={focused ? 'home' : 'home-outline'}
                  size={30}
                  color={focused ? 'lightgrey' : 'darkgrey'}
                  style={{width: 30}}
                />
              );
            case 'Profile':
              return (
                <Icon
                  name={focused ? 'person' : 'person-outline'}
                  size={30}
                  color={focused ? 'lightgrey' : 'darkgrey'}
                  style={{width: 30}}
                />
              );
          }
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveBackgroundColor: 'rgb(57,48,77)',
        tabBarInactiveBackgroundColor: 'rgb(31,26,48)',
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'black'},
      })}>
      <Tab.Screen
        name="OrgStack"
        component={OrgStack}
        initialParams={{render: 'group'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{render: 'dev'}}
      />
    </Tab.Navigator>
  );
};

const OrgStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={OrgHome} />
    </Stack.Navigator>
  );
};
