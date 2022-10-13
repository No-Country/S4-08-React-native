import React from 'react';
import {ScrollView, ImageBackground, StatusBar} from 'react-native';
import {Headline} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MyAvatar from '../components/MyAvatar';
import DevRegister from '../components/register/DevRegister';
import OrgRegister from '../components/register/OrgRegister';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation';
// interface Props {
//   navigation: StackNavigationProp<RootStackParamList, 'Register'>;
//   route: {params: {isDev?: boolean}};
// }

type Props = StackScreenProps<RootStackParamList, 'Register'>;

const Register = ({navigation, route: { params }}: Props) => {
  
  const { isDev } = params;


  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
        alignItems: 'center',
        minHeight: '100%'
      }}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <LinearGradient
        style={{width: '100%', height: 500, position: 'absolute'}}
        locations={[0.1, 0.35, 1]}
        useAngle={true}
        angle={180}
        colors={[
          'rgba(0, 0, 0,0.65)',
          'rgba(31, 26, 48,0.8)',
          'rgba(31, 26, 48,1)',
        ]}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: isDev
              ? 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              : 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
          style={{
            width: '100%',
            height: '75%',
            zIndex: -100,
          }}
        />
      </LinearGradient>
      <Headline
        style={{
          color: '#17f1de',
          marginTop: 40,
          fontWeight: '700',
          fontSize: 30,
        }}>
        Create Account
      </Headline>
      <MyAvatar />
      {isDev ? <DevRegister /> : <OrgRegister />}
    </ScrollView>
  );
};

export default Register;
