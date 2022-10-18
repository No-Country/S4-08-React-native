import * as React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Headline} from 'react-native-paper';

const Notifications = () => {
  return (
    <View style={{backgroundColor: 'rgb(31, 26, 48)', flex: 1}}>
      <Headline
        style={{
          color: '#17f1de',
          marginTop: 40,
          fontWeight: '700',
          fontSize: 30,
          marginLeft: 15,
        }}>
        Inbox
      </Headline>
      <View
        style={{
          backgroundColor: 'hsl(0,0%,5%)',
          height: 7,
          marginVertical: 7,
        }}
      />
      <View
        style={{
          backgroundColor: 'rgb(57,48,77)',
          padding: 10,
          marginHorizontal: 15,
          borderRadius: 3,
          height: '83%',
        }}>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'hsla(0, 0%, 65%,0.75)',
              borderRadius: 5,
              padding: 10,
              marginVertical: 10,
            }}>
            <Text>From:</Text>
            <Text>Message:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(200,10,10)'}}>
                <Text>Reject</Text>
              </Button>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(50,225,50)'}}>
                <Text>Accept</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'hsla(0, 0%, 65%,0.75)',
              borderRadius: 5,
              padding: 10,
              marginVertical: 10,
            }}>
            <Text>From:</Text>
            <Text>Message:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(200,10,10)'}}>
                <Text>Reject</Text>
              </Button>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(50,225,50)'}}>
                <Text>Accept</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'hsla(0, 0%, 65%,0.75)',
              borderRadius: 5,
              padding: 10,
              marginVertical: 10,
            }}>
            <Text>From:</Text>
            <Text>Message:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(190,10,10)'}}>
                <Text>Reject</Text>
              </Button>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(50,220,50)'}}>
                <Text>Accept</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'hsla(0, 0%, 65%,0.75)',
              borderRadius: 5,
              padding: 10,
              marginVertical: 10,
            }}>
            <Text>From:</Text>
            <Text>Message:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(190,10,10)'}}>
                <Text>Reject</Text>
              </Button>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(50,205,0)'}}>
                <Text>Accept</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'hsla(0, 0%, 65%,0.75)',
              borderRadius: 5,
              padding: 10,
              marginVertical: 10,
            }}>
            <Text>From:</Text>
            <Text>Message:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
              }}>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(190,10,10)'}}>
                <Text>Reject</Text>
              </Button>
              <Button
                mode="contained"
                style={{backgroundColor: 'rgb(50,225,50)'}}>
                <Text>Accept</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;
