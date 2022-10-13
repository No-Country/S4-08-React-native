import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';

interface Props {
  uri?: React.ComponentState;
}

const MyAvatar = ({uri, ...props}: Props) => {
  return (
    <View {...props} style={{marginTop: 5}}>
      {uri ? (
        <Avatar.Image size={90} source={{uri}} />
      ) : (
        <Avatar.Icon
          size={100}
          icon="person-outline"
          color="#17f1de"
          style={{backgroundColor: 'rgb(145,145,145)'}}
        />
      )}
    </View>
  );
};

export default MyAvatar;
