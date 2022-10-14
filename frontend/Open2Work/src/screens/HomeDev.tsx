import React, { useState, useEffect } from 'react'
import { ScrollView, Image, Text, View, ActivityIndicator } from 'react-native';
import { Headline } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import Card from '../components/profile/Card';
import BannerGroup from '../components/profile/BannerGroup';
import { ButtonLogout } from '../components/ButtonLogout';
import axios from 'axios';
import { Team } from '../interfaces/teamInterface';

export const HomeDev = () => {

  const [infoGroup, setInfoGroup] = useState<Team>();

  const { user, auth } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const { top } = useSafeAreaInsets();

  const getInfoGroup = async () => {
    const resp = await axios.get<Team>(`http://192.168.0.244:8080/team/profile/${user.currentTeam}`, {
      headers: {
        Authorization: auth.token!
      }
    })
    setInfoGroup(resp.data);
  }

  useEffect(() => {
    getInfoGroup()
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
        <ButtonLogout />
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
        {`${!!user.currentTeam ? `Group #${user.currentTeam.substring(18)}` : 'No group at the moment'}`}
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
