import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import Array from './Array';
import { useAppSelector } from '../../redux/hook';
import { getInitials } from '../../helpers/getInitials';
import { User } from '../../interfaces/loginInterface';

interface Props {
  user: User;
}
const BannerProfile = ({ user }: Props): JSX.Element => {

  return (
    <View
      style={{
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          position: 'absolute',
          top: -100,
          marginLeft: 5,
          width: 102,
          height: 145,
          borderRadius: 50,
          backgroundColor: 'black',
          alignItems: 'center',
        }}>
        <Avatar.Text label={getInitials(`${user.name} ${user.surname}`)} size={74} style={{ marginTop: 15 }} />
      </View>
      <Text style={styles.item}>
        <Icon name="build-outline" size={20} color="white" />{' '}
        {user.isDev ? (
          user.role
        ) : (
          user.info.organization
        )}
      </Text>
      <Text style={styles.item}>
        <Icon name="globe-outline" size={20} color="white" />{' '}
        {user.info.time_zone}
      </Text>
      <Text style={styles.item}>
        <Icon name="language-outline" size={20} color="white" />{' '}
        <Array data={user.info.language} symbol={' - '} />
      </Text>
      {
        user.isDev && (<Text style={styles.item}>
          <Icon name="briefcase-outline" size={20} color="white" /> {user.info.time_availability}
        </Text>)
      }
      <Text
        style={{
          color: 'darkgrey',
          fontSize: 17,
          textAlignVertical: 'center',
        }}>
        <Icon name="mail-outline" size={20} color="white" />{' '}
        {user.email}
      </Text>
      <>
        <Text style={styles.item}>
          <Icon name="logo-github" size={20} color="white" /> {user.social.github}
        </Text>
        <Text style={styles.item}>
          <Icon name="logo-linkedin" size={20} color="white" /> {user.social.linkedin}
        </Text>
        <Text style={styles.item}>
          <Icon name="globe-outline" size={20} color="white" /> {user.social.portfolio}
        </Text>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  item: { color: 'darkgrey', fontSize: 17, marginVertical: 4, marginHorizontal: 5 },
});

export default BannerProfile;
