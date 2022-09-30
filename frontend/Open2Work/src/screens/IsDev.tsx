import * as React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';
import Register from './Register';
import LinearGradient from 'react-native-linear-gradient';

const IsDev = () => {
  return (
    <>
      <LinearGradient
        style={{width: '100%', height: '50%', position: 'absolute'}}
        locations={[0.1, 0.6, 0.8]}
        useAngle={true}
        angle={180}
        colors={[
          'rgba(31, 26, 48,0.99)',
          'rgba(31, 26, 48,0.4)',
          'rgba(31, 26, 48,0.97)',
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
        locations={[0.05, 0.6, 0.95]}
        useAngle={true}
        angle={180}
        colors={[
          'rgba(31, 26, 48,0.99)',
          'rgba(31, 26, 48,0.25)',
          'rgba(31, 26, 48,0.95)',
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
        style={{
          flex: 1,
          backgroundColor: 'rgba(31, 26, 48,0.7)',
          justifyContent: 'center',
        }}>
        <View style={{height: '55%', justifyContent: 'space-around'}}>
          <Button
            onPress={() => <Register isDev={false} />}
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
          <Button
            onPress={() => <Register isDev={true} />}
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
