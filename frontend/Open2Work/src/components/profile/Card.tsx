import * as React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

interface Props {
  render: string;
}

const Card = ({render}: Props) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          marginTop: 5,
          marginBottom: 15,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-evenly',
        },
      ]}>
      {render === 'group' ? <Avatar.Text size={74} label="NF" /> : null}
      <View
        style={{
          backgroundColor: 'hsla(0,0%,95%,0.6)',
          borderRadius: 5,
          paddingVertical: 10,
          paddingLeft: 20,
          width: '60%',
        }}>
        <Text style={{color: 'white'}}>NAHUEL FANEGO PAZ</Text>
        <Text>Frontend</Text>
        <Text style={{color: 'black'}}>nfanego@gmail.com</Text>
      </View>
    </View>
  );
};

export default Card;
