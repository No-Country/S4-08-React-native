import * as React from 'react';
import {ScrollView} from 'react-native';
import {Image, View, Text} from 'react-native';
import {Avatar, Headline} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const renderScreen = 'org';

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
      }}>
      <Image
        style={{width: '100%', height: 200}}
        source={require('../assets/imgs/istockphoto-1046965704-640x640.jpg')}
      />
      <Headline
        style={{
          position: 'absolute',
          top: 0,
          right: 15,
          color: '#17f1de',
          marginTop: 30,
          fontWeight: '700',
          fontSize: 30,
        }}>
        {renderScreen} #001
      </Headline>
      <View
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        {renderScreen !== 'group' && (
          <View
            style={{
              position: 'absolute',
              top: -100,
              marginLeft: 5,
              width: 120,
              height: 145,
              borderRadius: 50,
              backgroundColor: 'black',
              alignItems: 'center',
            }}>
            <Avatar.Text label="NF" size={74} style={{marginTop: 15}} />
          </View>
        )}
        <Text style={{}}>
          <Icon name="build-outline" size={20} color="white" />

          <Text style={{color: 'lightgrey', fontSize: 17, marginLeft: 15}}>
            {' '}
            [ React Native{', '}
          </Text>
          <Text style={{color: 'lightgrey', fontSize: 17, marginLeft: 15}}>
            Redux{', '}
          </Text>
          <Text style={{color: 'lightgrey', fontSize: 17, marginLeft: 15}}>
            Express ]
          </Text>
        </Text>
        <Text style={{color: 'lightgrey', fontSize: 17}}>
          <Icon name="globe-outline" size={20} color="white" /> [ GMT-1 / GMT-3
          ]
        </Text>
        <Text style={{color: 'lightgrey', fontSize: 17}}>
          <Icon name="language-outline" size={20} color="white" /> [ Spanish -
          English ]
        </Text>
        <Text style={{color: 'lightgrey', fontSize: 17}}>
          <Icon name="briefcase-outline" size={20} color="white" /> Part-time
        </Text>
        <Text style={{color: 'green', fontSize: 17}}>
          <Icon name="alert-circle-outline" size={20} color="white" /> Available
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <Avatar.Text size={74} label="NF" />
        <View
          style={{
            backgroundColor: 'hsla(0,0%,70%,0.5)',
            borderRadius: 5,
            paddingVertical: 10,
            paddingLeft: 20,
            width: '60%',
          }}>
          <Text style={{color: 'lightgrey'}}>NAHUEL FANEGO PAZ</Text>
          <Text>Frontend</Text>
          <Text>nfanego@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <Avatar.Text size={74} label="NF" />
        <View
          style={{
            backgroundColor: 'hsla(0,0%,70%,0.5)',
            borderRadius: 5,
            paddingVertical: 10,
            paddingLeft: 20,
            width: '60%',
          }}>
          <Text style={{color: 'lightgrey'}}>NAHUEL FANEGO PAZ</Text>
          <Text>Frontend</Text>
          <Text>nfanego@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <Avatar.Text size={74} label="NF" />
        <View
          style={{
            backgroundColor: 'hsla(0,0%,70%,0.5)',
            borderRadius: 5,
            paddingVertical: 10,
            paddingLeft: 20,
            width: '60%',
          }}>
          <Text style={{color: 'lightgrey'}}>NAHUEL FANEGO PAZ</Text>
          <Text>Frontend</Text>
          <Text>nfanego@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <Avatar.Text size={74} label="NF" />
        <View
          style={{
            backgroundColor: 'hsla(0,0%,70%,0.5)',
            borderRadius: 5,
            paddingVertical: 10,
            paddingLeft: 20,
            width: '60%',
          }}>
          <Text style={{color: 'lightgrey'}}>NAHUEL FANEGO PAZ</Text>
          <Text>Frontend</Text>
          <Text>nfanego@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
        }}>
        <Avatar.Text size={74} label="NF" />
        <View
          style={{
            backgroundColor: 'hsla(0,0%,70%,0.5)',
            borderRadius: 5,
            paddingVertical: 10,
            paddingLeft: 20,
            width: '60%',
          }}>
          <Text style={{color: 'lightgrey'}}>NAHUEL FANEGO PAZ</Text>
          <Text>Frontend</Text>
          <Text>nfanego@gmail.com</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
