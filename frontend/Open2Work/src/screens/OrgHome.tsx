import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyInput} from '../components/MyInput';

const OrgHome = () => {
  const results = [0, 1, 2, 3, 4, 5];
  const [selected, setSelected] = React.useState(['avail', 'lang']);
  const handleToggle = id => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected(state => [...state, id]);
    }
  };
  return (
    <View style={{backgroundColor: 'rgb(31, 26, 48)', flex: 1}}>
      <View style={{backgroundColor: 'rgb(57,48,77)'}}>
        <View style={{margin: 15}}>
          <MyInput iconName="search-outline" label="Search Tech Stack" />
        </View>
        <View
          style={{
            marginBottom: 15,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            onPress={() => handleToggle('gmt')}
            mode={selected.includes('gmt') ? 'contained' : 'outlined'}
            style={{
              width: '30%',
              borderRadius: 40,
              borderWidth: 2,
              borderColor: '#17f1de',
            }}>
            <Text
              style={{
                fontSize: 18,
              }}>
              <Icon name="time-sharp" size={22} />{' '}
              <Icon name="chevron-down-outline" size={20} color="#17f1de" />
            </Text>
          </Button>
          <Button
            onPress={() => handleToggle('avail')}
            mode={selected.includes('avail') ? 'contained' : 'outlined'}
            style={{
              width: '30%',
              borderRadius: 40,
              borderWidth: 2,
              borderColor: '#17f1de',
            }}>
            <Text
              style={{
                fontSize: 18,
              }}>
              <Icon name="briefcase-sharp" size={20} />{' '}
              <Icon name="chevron-down-outline" size={20} color="#17f1de" />
            </Text>
          </Button>
          <Button
            onPress={() => handleToggle('lang')}
            mode={selected.includes('lang') ? 'contained' : 'outlined'}
            style={{
              width: '30%',
              borderRadius: 40,
              borderWidth: 2,
              borderColor: '#17f1de',
            }}>
            <Text
              style={{
                fontSize: 18,
              }}>
              <Icon name="language-sharp" size={21} />{' '}
              <Icon name="chevron-down-outline" size={20} color="#17f1de" />
            </Text>
          </Button>
        </View>
      </View>
      <View style={{backgroundColor: 'black', width: '100%', height: 2}} />
      <ScrollView contentContainerStyle={{paddingVertical: 7}}>
        {results.map((item, index) => {
          return (
            <View
              key={item}
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
                GROUP #6545
              </Text>
              <Text style={{color: 'lightgrey'}}>
                <Icon name="build-outline" size={16} /> React Native, redux,
                node, express
              </Text>
              <Text style={{color: 'lightgrey'}}>
                <Icon name="language-outline" size={16} /> Spanish
              </Text>
              <Text style={{color: 'lightgrey'}}>
                <Icon name="time-outline" size={16} /> GMT-3
              </Text>
              <Text style={{color: 'lightgrey'}}>
                <Icon name="briefcase-outline" size={16} /> Part-time
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default OrgHome;
