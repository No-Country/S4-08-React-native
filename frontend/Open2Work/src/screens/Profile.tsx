import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Image } from 'react-native';
import { Headline } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BannerProfile from '../components/profile/BannerProfile';
import { useAppSelector } from '../redux/hook';
import { ButtonLogout } from '../components/ButtonLogout';

// DATAGROUP = {
//   name: 'Group #023',
//   techs: ['React Native', 'Redux', 'Express'],
//   tz: ['GMT-1', 'GMT-3'],
//   lang: ['Spanish', 'English'],
//   avail: 'Part-time',
//   isActive: 'Available',
// };

const Profile = () => {


  const user = useAppSelector(state => state.user);

  const { top } = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
        flex: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          left: 10,
          top,
          zIndex: 1,
        }}
      >
        <ButtonLogout />
      </View>
      <Image
        style={{ width: '100%', height: 220 }}
        source={require('../assets/imgs/laptop-programming-coding-macbook.jpg')}
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
        {`${user.name} ${user.surname}`}
      </Headline>

      <BannerProfile />
    </ScrollView>
  );
};

export default Profile;
