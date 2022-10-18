import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import Array from './Array';
import {useAppSelector} from '../../redux/hook';
import MyAvatar from '../MyAvatar';

const BannerProfile = (): JSX.Element => {
  const user = useAppSelector(state => state.user);

  const getInitials = (name: string) => {
    const names = name.split(' ');
    let iniciales = '';
    for (let i = 0; i <= names.length - 1; i++) {
      iniciales = iniciales + names[i].substring(0, 1);
    }
    return iniciales.toUpperCase();
  };

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
        {user.avatar ? (
          <MyAvatar uri={user.avatar} />
        ) : (
          <Avatar.Text
            label={getInitials(`${user.name} ${user.surname}`)}
            size={90}
            style={{marginTop: 7}}
          />
        )}
      </View>
      <Text style={styles.item}>
        <Icon name="build-outline" size={20} color="white" />{' '}
        {user.isDev ? user.role : user.info.organization}
      </Text>
      <Text style={styles.item}>
        <Icon name="globe-outline" size={20} color="white" />{' '}
        {user.info.time_zone}
      </Text>
      <Text style={styles.item}>
        <Icon name="language-outline" size={20} color="white" />{' '}
        <Array data={user.info.language} symbol={' - '} />
      </Text>
      {user.isDev && (
        <Text style={styles.item}>
          <Icon name="briefcase-outline" size={20} color="white" />{' '}
          {user.info.time_availability}
        </Text>
      )}
      <Text
        style={{
          color: 'darkgrey',
          fontSize: 17,
          textAlignVertical: 'center',
        }}>
        <Icon name="mail-outline" size={20} color="white" /> {user.email}
      </Text>
      <>
        <Text style={styles.item}>
          <Icon name="logo-github" size={20} color="white" />{' '}
          {user.social.github}
        </Text>
        <Text style={styles.item}>
          <Icon name="logo-linkedin" size={20} color="white" />{' '}
          {user.social.linkedin}
        </Text>
        <Text style={styles.item}>
          <Icon name="globe-outline" size={20} color="white" />{' '}
          {user.social.portfolio}
        </Text>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {color: 'darkgrey', fontSize: 17, marginVertical: 4},
});

export default BannerProfile;
