import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Headline } from 'react-native-paper';
import { InfoPerfilModal } from '../components/InfoPerfilModal';
import { useGetTeamById } from '../hook/useGetTeamById';
import { useAppSelector } from '../redux/hook';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamListClientNotifications } from '../navigation/StackNotifications';
import { useGetClientById } from '../hook/useGetClientById';

type Props = StackScreenProps<RootStackParamListClientNotifications, 'Notifications'>

const Notifications = ({ navigation }: Props) => {

  const { getInfoGroup, infoGroup, groupLoading } = useGetTeamById();

  const {getInfoClient, infoClient, clientLoading} = useGetClientById();

  const { isDev, currentTeam, _id } = useAppSelector(state => state.user);

  const refreshOrders = ()=>{
    if ( isDev ){
      getInfoGroup(currentTeam) 
    }else{
      getInfoClient(_id)
    }
  }

  useEffect(() => {
    if (isDev) {
      getInfoGroup(currentTeam)
    }else{
      getInfoClient(_id)
    }
  }, [])

  const ordenes = isDev ? infoGroup?.orders : infoClient?.orders;
  const isLoading = isDev ? groupLoading : clientLoading;

  return (
    <View style={{ backgroundColor: 'rgb(31, 26, 48)', flex: 1 }}>
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
          height: '90%',
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={()=> refreshOrders()
              }
              refreshing={ isLoading }
            />
          }
        >
          {/* <InfoPerfilModal idPerfil={'6349e35a800be15732aedd00'} isDev={ false } /> */}
          {ordenes &&
            ordenes.map((order) => {

              if (isDev) {

                return (

                  <View
                    key={order._id}
                    style={{
                      backgroundColor: 'rgb(31, 26, 48)',
                      borderRadius: 5,
                      padding: 10,
                      marginVertical: 10,
                    }}>

                    <Text style={{
                      color: '#fff',
                      fontSize: 18
                    }}>{`Created: ${new Date(order.createdAt)}`}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Details', {
                        id: order.client,
                        msg: order.description
                      })}
                    >
                      <Text style={{
                        color: '#17f1de',
                        fontSize: 18
                      }}>{`From: Client #${order.client.slice(-4)}`}</Text>
                    </TouchableOpacity>
                    <Text style={{
                      color: '#fff',
                      fontSize: 18
                    }}>{`Message: ${order.description}`}</Text>
                    <Text style={{
                      color: '#fff',
                      fontSize: 18
                    }}>{`State: ${order.devs_ok.length < 4 ? 'Pending...' : 'approved'}`}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 10,
                      }}>
                      {/* <Button
                    mode="contained"
                    style={{backgroundColor: 'rgb(200,10,10)'}}>
                    <Text>Reject</Text>
                  </Button>
                  <Button
                    mode="contained"
                    style={{backgroundColor: 'rgb(50,225,50)'}}>
                    <Text>Accept</Text>
                  </Button> */}
                    </View>
                  </View>
                )
              } else {
                return (
                  <View
                    key={order._id}
                    style={{
                      backgroundColor: 'rgb(31, 26, 48)',
                      borderRadius: 5,
                      padding: 10,
                      marginVertical: 10,
                    }}>

                    <Text style={{
                      color: '#fff',
                      fontSize: 18
                    }}>{`Created: ${new Date(order.createdAt)}`}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Details', {
                        id: order.team,
                        msg: order.description
                      })}
                    >
                      <Text style={{
                        color: '#17f1de',
                        fontSize: 18,
                      }}>{`To: Group #${order.team.slice(-4)}`}</Text>
                    </TouchableOpacity>

                    <Text style={{
                      color: '#fff',
                      fontSize: 18
                    }}>{`Message: ${order.description}`}</Text>
                    <Text style={{
                      color: '#fff',
                      fontSize: 18
                    }}>{`State: ${order.devs_ok.length < 4 ? 'Pending...' : 'approved'}`}</Text>
                  </View>
                )
              }
            }).reverse()
          }

        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;
