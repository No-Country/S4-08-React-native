import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Headline } from 'react-native-paper';
import { useGetTeamById } from '../hook/useGetTeamById';
import { useAppSelector } from '../redux/hook';
import { OrderElement } from '../interfaces/teamInterface';

const Notifications = () => {

  const { getInfoGroup, infoGroup } = useGetTeamById();

  const { isDev, orders, currentTeam } = useAppSelector(state => state.user);
  const { isLoading } = useAppSelector(state => state.loading);

  const [ordenes, setOrdenes] = useState<OrderElement[]>();

  useEffect(() => {
    if(!isLoading){
      if( isDev ){
        setOrdenes(infoGroup?.orders)
      }else {
        setOrdenes( orders )
      }
    }
  }, [isLoading])

  useEffect(() => {
    if(isDev){
      getInfoGroup(currentTeam)
    }
  },[])


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
        >
          {ordenes &&
            ordenes.map((order) => {

              if(isDev){
                
                return (
                  <View
                  key={order._id}
                  style={{
                    backgroundColor: 'hsla(0, 0%, 65%,0.75)',
                    borderRadius: 5,
                    padding: 10,
                    marginVertical: 10,
                  }}>
                  <Text>{`Created: ${new Date(order.createdAt)}`}</Text>
                  <Text>{`From: Client #${order.client.slice(-4)}`}</Text>
                  <Text>{`Message: ${order.description}`}</Text>
                  <Text>{`State: ${order.devs_ok.length < 4 ? 'Pending...' : 'approved'}`}</Text>
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
                )
              }else{
                return(
                <View
                  key={order._id}
                  style={{
                    backgroundColor: 'hsla(0, 0%, 65%,0.75)',
                    borderRadius: 5,
                    padding: 10,
                    marginVertical: 10,
                  }}>
                  <Text>{`Created: ${new Date(order.createdAt)}`}</Text>
                  <Text>{`To: Team ${order.team.slice(-4)}`}</Text>
                  <Text>{`Message: ${order.description}`}</Text>
                  <Text>{`State: ${order.devs_ok.length < 4 ? 'Pending...' : 'approved'}`}</Text>
                  {/* <View
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
                </View> */}
                </View>)
              }
            })
          }

        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;
