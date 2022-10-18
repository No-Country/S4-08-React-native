import React, { useEffect } from 'react'
import { ScrollView, Image, View } from 'react-native';
import { Headline } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../redux/hook';
import Card from '../components/profile/Card';
import BannerGroup from '../components/profile/BannerGroup';
import { useGetTeamById } from '../hook/useGetTeamById';

export const HomeDev = () => {

  const { getInfoGroup, infoGroup } = useGetTeamById();

  const { user } = useAppSelector(state => state);

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    getInfoGroup(user.currentTeam)
  }, [])



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
      </View>
      <Image
        style={{ width: '100%', height: 220 }}
        source={require('../assets/imgs/istockphoto-1046965704-640x640.jpg')}
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
        {`${!!infoGroup?._id ? `Group #${infoGroup._id.substring(20)}` : 'No group at the moment'}`}
      </Headline>
        <View>
      {
        infoGroup && (<BannerGroup
          data={infoGroup}
        />)
      }

        </View>
        <View style={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flex: 1
        }}>
      {
        infoGroup && infoGroup.devs.map( dev =>{
          return (
            <Card dev={ dev } key={`${dev._id}`} />
          )
        })
      }

        </View>

    </ScrollView>
  );
}
