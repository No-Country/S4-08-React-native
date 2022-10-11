import React from 'react'
import { ScrollView, Image } from 'react-native';
import { Headline } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../redux/hook';
import Card from '../components/profile/Card';
import BannerGroup from '../components/profile/BannerGroup';

export const HomeDev = () => {

  const user = useAppSelector(state => state.user);

  const dataGroup = {
    name: `Group #${user.currentTeam.substring(18)}`,
    techs: ['React Native', 'Redux', 'Express'],
    tz: ['GMT-1', 'GMT-3'],
    lang: ['Spanish', 'English'],
    avail: 'Part-time',
    isActive: 'Available',
  }

  const {top} =useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
        flex: 1,
      }}>
      <Image
        style={{ width: '100%', height: 180 }}
        source={ require('../assets/imgs/istockphoto-1046965704-640x640.jpg')}
      />
      <Headline
        style={{
          position: 'absolute',
          top,
          right: 10,
          color: '#17f1de',
          marginTop: 25,
          fontWeight: '700',
          fontSize: 30,
          paddingVertical: 7,
          paddingHorizontal: 15,
          borderRadius: 3,
          backgroundColor: 'hsla(0,0%,15%,0.65)',
          textTransform: 'capitalize'
        }}>
        { dataGroup.name }
      </Headline>

      <BannerGroup
        renderScreen={ 'group'}
        data={ dataGroup }
      />
      <Card render={ 'group' } />
      <Card render={ 'group' } />
      <Card render={ 'group' } />
      <Card render={ 'group' } />
    </ScrollView>
  );
}
