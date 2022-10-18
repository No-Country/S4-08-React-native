import React from 'react';
import {ScrollView, Image, View, StyleSheet} from 'react-native';
import {Headline} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector, useAppDispatch} from '../redux/hook';
import Card from '../components/profile/Card';
import BannerGroup from '../components/profile/BannerGroup';
import {ButtonLogout} from '../components/ButtonLogout';

export const HomeDev = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const {top} = useSafeAreaInsets();

  const dataGroup = {
    name: `${
      !!user.currentTeam
        ? `Group #${user.currentTeam.substring(18)}`
        : 'No group at the moment'
    }`,
    techs: ['React Native', 'Redux', 'Express'],
    tz: ['GMT-1', 'GMT-3'],
    lang: ['Spanish', 'English'],
    avail: 'Part-time',
    isActive: 'Available',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logout}>
        <ButtonLogout />
      </View>
      <Image
        style={styles.img}
        source={require('../assets/imgs/istockphoto-1046965704-640x640.jpg')}
      />
      <Headline style={styles.headline}>{dataGroup.name}</Headline>

      <BannerGroup renderScreen={'group'} data={dataGroup} />
      <Card render={'group'} />
      <Card render={'group'} />
      <Card render={'group'} />
      <Card render={'group'} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(31,26,48)',
    flex: 1,
  },
  logout: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  img: {width: '100%', height: 220},
  headline: {
    position: 'absolute',
    right: 10,
    color: '#17f1de',
    marginTop: 25,
    fontWeight: '700',
    fontSize: 30,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 3,
    backgroundColor: 'hsla(0,0%,15%,0.65)',
    textTransform: 'capitalize',
  },
});
