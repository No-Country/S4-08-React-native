import * as React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'IsDev'>;
}

const IsDev = ({navigation}: Props) => {
  const userName = 'Nahuel';
  return (
    <>
      <LinearGradient
        style={{width: '100%', height: '50%', position: 'absolute'}}
        locations={[0.1, 0.55, 0.8]}
        useAngle={true}
        angle={180}
        colors={[
          'rgba(31, 26, 48,0.9)',
          'rgba(31, 26, 48,0.5)',
          'rgba(31, 26, 48,1)',
        ]}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
          style={{
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      </LinearGradient>
      <LinearGradient
        style={{width: '100%', top: '50%', height: '50%', position: 'absolute'}}
        locations={[0.05, 0.6, 1]}
        useAngle={true}
        angle={180}
        colors={[
          'rgba(31, 26, 48,0.99)',
          'rgba(31, 26, 48,0.1)',
          'rgba(31, 26, 48,0.9)',
        ]}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          }}
          style={{
            width: '100%',
            height: '100%',
            zIndex: -100,
          }}
        />
      </LinearGradient>

      <View
        style={{position: 'absolute', zIndex: 1, top: 45, marginLeft: '3%'}}>
        <Text
          style={{
            color: '#17f1de',
            fontSize: 40,
          }}>
          Hi, {userName}!
        </Text>
        <Text
          style={{
            color: '#6d6387',
            fontSize: 30,
          }}>
          Please, tell us who you are
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(31, 26, 48,0.7)',
          justifyContent: 'center',
        }}>
        <View style={{height: '55%', justifyContent: 'space-around'}}>
          <View style={{top: 35, left: 15}}>
            <Text
              style={{
                color: '#6d6387',
                fontSize: 30,
              }}>
              I am part of an ...
            </Text>
          </View>
          <Button
            onPress={() => navigation.navigate('Register', {isDev: false})}
            mode="contained"
            style={{
              width: '60%',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 40,
            }}>
            <Text
              style={{
                fontSize: 25,
              }}>
              Organization
            </Text>
          </Button>
          <View style={{top: 40, left: 35}}>
            <Text
              style={{
                color: '#6d6387',
                fontSize: 30,
              }}>
              I'm a ...
            </Text>
          </View>
          <Button
            onPress={() => navigation.navigate('Register', {isDev: true})}
            mode="contained"
            style={{
              width: '60%',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 40,
            }}>
            <Text
              style={{
                fontSize: 25,
              }}>
              Developer
            </Text>
          </Button>
        </View>
      </View>
    </>
  );
};

export default IsDev;
