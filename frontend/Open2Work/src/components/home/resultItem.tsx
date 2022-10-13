import * as React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ResultItem = ({data}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgb(57,48,77)',
        marginVertical: 7,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}>
      <Text
        style={{
          flex: 1,
          flexBasis: '100%',
          flexGrow: 1,
          color: '#17f1de',
          paddingBottom: 5,
        }}>
        GROUP #{data._id.slice(-4)}
      </Text>
      <Text style={{color: 'lightgrey'}}>
        <Icon name="build-outline" size={16} /> {data.stack}
      </Text>
      <Text style={{color: 'lightgrey'}}>
        <Icon name="language-outline" size={16} /> {data.language}
      </Text>
      <Text style={{color: 'lightgrey'}}>
        <Icon name="time-outline" size={16} /> {data.time_zone}
      </Text>
      <Text style={{color: 'lightgrey'}}>
        <Icon name="briefcase-outline" size={16} /> {data.availability || ''}
      </Text>
    </View>
  );
};

export default ResultItem;
