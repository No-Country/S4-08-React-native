import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Headline} from 'react-native-paper';
import {useGetTeamById} from '../hook/useGetTeamById';
import {useAppSelector} from '../redux/hook';
import {OrderElement} from '../interfaces/teamInterface';

const Notifications = () => {
  const {getInfoGroup, infoGroup} = useGetTeamById();

  const {isDev, orders, currentTeam} = useAppSelector(state => state.user);
  const {isLoading} = useAppSelector(state => state.loading);

  const [ordenes, setOrdenes] = useState<OrderElement[]>();

  useEffect(() => {
    if (!isLoading) {
      if (isDev) {
        setOrdenes(infoGroup?.orders);
      } else {
        setOrdenes(orders);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (isDev) {
      getInfoGroup(currentTeam);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Headline style={styles.headline}>Inbox</Headline>

      <View style={styles.line} />
      <View style={styles.scrollCont}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {ordenes &&
            ordenes.map(order => {
              if (isDev) {
                return (
                  <View key={order._id} style={styles.card}>
                    <Text>{`Created: ${new Date(order.createdAt)}`}</Text>
                    <Text>{`From: Client #${order.client.slice(-4)}`}</Text>
                    <Text>{`Message: ${order.description}`}</Text>
                    <Text>{`State: ${
                      order.devs_ok.length < 4 ? 'Pending...' : 'approved'
                    }`}</Text>
                    <View style={styles.btnCont}>
                      <Button mode="contained" style={styles.reject}>
                        <Text>Reject</Text>
                      </Button>
                      <Button mode="contained" style={styles.accept}>
                        <Text>Accept</Text>
                      </Button>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View key={order._id} style={styles.card}>
                    <Text>{`Created: ${new Date(order.createdAt)}`}</Text>
                    <Text>{`To: Team ${order.team.slice(-4)}`}</Text>
                    <Text>{`Message: ${order.description}`}</Text>
                    <Text>{`State: ${
                      order.devs_ok.length < 4 ? 'Pending...' : 'approved'
                    }`}</Text>
                    {/* <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 10,
                  }}>
                  <Button
                    mode="contained"
                    style={styles.reject}>
                    <Text>Reject</Text>
                  </Button>
                  <Button
                    mode="contained"
                    style={styles.accept}>
                    <Text>Accept</Text>
                  </Button>
                </View> */}
                  </View>
                );
              }
            })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'rgb(31, 26, 48)', flex: 1},
  headline: {
    color: '#17f1de',
    marginTop: 40,
    fontWeight: '700',
    fontSize: 30,
    marginLeft: 15,
  },
  line: {
    backgroundColor: 'hsl(0,0%,5%)',
    height: 7,
    marginVertical: 7,
  },
  scrollCont: {
    backgroundColor: 'rgb(57,48,77)',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 3,
    height: '83%',
  },
  card: {
    backgroundColor: 'hsla(0, 0%, 65%,0.75)',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  btnCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  reject: {backgroundColor: 'rgb(190,10,10)'},
  accept: {backgroundColor: 'rgb(50,220,50)'},
});

export default Notifications;
