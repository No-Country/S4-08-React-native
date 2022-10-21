import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Headline} from 'react-native-paper';
import {InfoPerfilModal} from '../components/InfoPerfilModal';
import {useGetTeamById} from '../hook/useGetTeamById';
import {useAppSelector} from '../redux/hook';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamListClientNotifications} from '../navigation/StackNotifications';
import {useGetClientById} from '../hook/useGetClientById';

type Props = StackScreenProps<
  RootStackParamListClientNotifications,
  'Notifications'
>;

const Notifications = ({navigation}: Props) => {
  const {getInfoGroup, infoGroup, groupLoading} = useGetTeamById();

  const {getInfoClient, infoClient, clientLoading} = useGetClientById();

  const {isDev, currentTeam, _id} = useAppSelector(state => state.user);

  const refreshOrders = () => {
    if (isDev) {
      getInfoGroup(currentTeam);
    } else {
      getInfoClient(_id);
    }
  };

  useEffect(() => {
    if (isDev) {
      getInfoGroup(currentTeam);
    } else {
      getInfoClient(_id);
    }
  }, []);

  const ordenes = isDev ? infoGroup?.orders : infoClient?.orders;
  const isLoading = isDev ? groupLoading : clientLoading;

  return (
    <View style={styles.container}>
      <Headline style={styles.headline}>Inbox</Headline>

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
              onRefresh={() => refreshOrders()}
              refreshing={isLoading}
            />
          }>
          {/* <InfoPerfilModal idPerfil={'6349e35a800be15732aedd00'} isDev={ false } /> */}
          {ordenes &&
            ordenes
              .map(order => {
                if (isDev) {
                  return (
                    <View key={order._id} style={styles.card}>
                      <Text style={styles.cardText}>{`Created: ${new Date(
                        order.createdAt,
                      )}`}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Details', {
                            idUser: order.client,
                            order,
                          })
                        }>
                        <Text
                          style={
                            styles.cardTitle
                          }>{`From: Client #${order.client.slice(-4)}`}</Text>
                      </TouchableOpacity>
                      <Text
                        style={
                          styles.cardText
                        }>{`Message: ${order.description}`}</Text>
                      <Text style={styles.cardText}>{`State: ${
                        order.devs_ok.length < 4 ? 'Pending...' : 'approved'
                      }`}</Text>
                      <View style={styles.btnCont}>
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
                  );
                } else {
                  return (
                    <View key={order._id} style={styles.card}>
                      <Text style={styles.cardText}>{`Created: ${new Date(
                        order.createdAt,
                      )}`}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Details', {
                            idUser: order.team,
                            order,
                          })
                        }>
                        <Text
                          style={
                            styles.cardTitle
                          }>{`To: Group #${order.team.slice(-4)}`}</Text>
                      </TouchableOpacity>

                      <Text
                        style={
                          styles.cardText
                        }>{`Message: ${order.description}`}</Text>
                      <Text style={styles.cardText}>{`State: ${
                        order.devs_ok.length < 4 ? 'Pending...' : 'approved'
                      }`}</Text>
                    </View>
                  );
                }
              })
              .reverse()}
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
  cardText: {
    color: '#fff',
    fontSize: 18,
  },
  cardTitle: {
    color: '#17f1de',
    fontSize: 18,
  },
});

export default Notifications;
