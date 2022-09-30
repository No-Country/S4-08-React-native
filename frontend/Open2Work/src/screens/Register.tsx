import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
} from 'react-native';
import {Headline} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MyAvatar from '../components/MyAvatar';
import DevRegister from '../components/DevRegister';
import OrgRegister from '../components/OrgRegister';

const Register = ({}) => {
  const [isDev, setIsDev] = React.useState(false);
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
        alignItems: 'center',
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
          'rgba(31, 26, 48,0.9)',
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
      <Text onPress={() => setIsDev(!isDev)} style={{color: 'white'}}>
        ToggleDev
      </Text>
      {isDev ? <DevRegister /> : <OrgRegister />}
    </ScrollView>
  );
};

export default Register;
