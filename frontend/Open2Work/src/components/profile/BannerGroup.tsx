import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import Array from './Array';
import { useAppSelector } from '../../redux/hook';

interface Props {
  renderScreen: string;
  data: any;
}

const BannerGroup = ({ renderScreen, data }: Props): JSX.Element => {

  const user = useAppSelector(state => state.user);


  const getInitials = (name: string) => {
    const names = name.split(' ');
    let iniciales = '';
    for (let i = 0; i <= names.length - 1; i++) {
      iniciales = iniciales + names[i].substring(0, 1);
    }
    return iniciales.toUpperCase();
  }

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
      {renderScreen !== 'group' && (
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
          <Avatar.Text label={getInitials(data.name)} size={74} style={{ marginTop: 15 }} />
        </View>
      )}
      <Text style={styles.item}>
        <Icon name="build-outline" size={20} color="white" />{' '}
        {renderScreen === 'group' ? (
          <Array data={data.techs} symbol={', '} />
        ) : (
          user.role
        )}
      </Text>
      <Text style={styles.item}>
        <Icon name="globe-outline" size={20} color="white" />{' '}
        {renderScreen === 'group' ? (
          <Array data={data.tz} symbol={' / '} />
        ) : (
          data.tz
        )}
      </Text>
      <Text style={styles.item}>
        <Icon name="language-outline" size={20} color="white" />{' '}
        <Array data={data.lang} symbol={' - '} />
      </Text>
      <Text style={styles.item}>
        <Icon name="briefcase-outline" size={20} color="white" /> {data.avail}
      </Text>
      <Text
        style={{
          color: renderScreen === 'group' ? 'green' : 'darkgrey',
          fontSize: 17,
          textAlignVertical: 'center',
        }}>
        <Icon name="alert-circle-outline" size={20} color="white" />{' '}
        {renderScreen === 'group' ? data.isActive : data.email}
      </Text>
      {renderScreen !== 'group' && (
        <>
          <Text style={styles.item}>
            <Icon name="logo-github" size={20} color="white" /> {data.gh}
          </Text>
          <Text style={styles.item}>
            <Icon name="logo-linkedin" size={20} color="white" /> {data.lkd}
          </Text>
          <Text style={styles.item}>
            <Icon name="globe-outline" size={20} color="white" /> {data.web}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: { color: 'darkgrey', fontSize: 17, marginVertical: 4 },
});

export default BannerGroup;
