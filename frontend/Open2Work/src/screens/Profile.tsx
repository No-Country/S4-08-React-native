import * as React from 'react';
import {ScrollView} from 'react-native';
import {Image} from 'react-native';
import {Headline} from 'react-native-paper';
import Banner from '../components/profile/Banner';
import Card from '../components/profile/Card';

DATAGROUP = {
  name: 'Group #023',
  techs: ['React Native', 'Redux', 'Express'],
  tz: ['GMT-1', 'GMT-3'],
  lang: ['Spanish', 'English'],
  avail: 'Part-time',
  isActive: 'Available',
};

DATADEV = {
  name: 'Nahuel Fanego Paz',
  email: 'nfanego@gmail.com',
  role: 'Front-end',
  tz: 'GMT-3',
  lang: ['Spanish', 'English', 'Portuguese'],
  avail: 'Part-time',
  senior: 'Junior',
  lkd: 'http://linkedin.com',
  gh: 'http://github.com',
  web: '',
};

const Profile = ({route: {params}}) => {
  const renderScreen = params.render;

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
      }}>
      <Image
        style={{width: '100%', height: 180}}
        source={
          renderScreen === 'group'
            ? require('../assets/imgs/istockphoto-1046965704-640x640.jpg')
            : require('../assets/imgs/laptop-programming-coding-macbook.jpg')
        }
      />
      <Headline
        style={{
          position: 'absolute',
          top: 0,
          right: 10,
          color: '#17f1de',
          marginTop: 25,
          fontWeight: '700',
          fontSize: 30,
          paddingVertical: 7,
          paddingHorizontal: 15,
          borderRadius: 3,
          backgroundColor: 'hsla(0,0%,15%,0.65)',
        }}>
        {renderScreen === 'group' ? DATAGROUP.name : DATADEV.name}
      </Headline>

      <Banner
        renderScreen={renderScreen}
        data={renderScreen === 'group' ? DATAGROUP : DATADEV}
      />
      <Card render={renderScreen} />
      <Card render={renderScreen} />
      <Card render={renderScreen} />
      <Card render={renderScreen} />
    </ScrollView>
  );
};

export default Profile;
