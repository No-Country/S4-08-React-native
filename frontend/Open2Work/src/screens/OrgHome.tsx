import axios from 'axios';
import * as React from 'react';
import {Modal, ScrollView, Text, View, Pressable} from 'react-native';
import {Button, Headline} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterModal from '../components/home/filterModal';
import ResultItem from '../components/home/resultItem';
import {MyInput} from '../components/MyInput';

const OrgHome = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [teamsData, setTeamsData] = React.useState();
  const [results, setResults] = React.useState();
  const [selected, setSelected] = React.useState(['']);

  React.useEffect(() => {
    axios
      .get('http://192.168.0.244:8080/team/profile')
      .then(res => {
        setTeamsData(res.data);
        setResults(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleToggle = id => {
    setShowModal(!showModal);
    /* if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected(state => [...state, id]);
    } */
  };

  const handleTextInput = input => {
    setQuery(input);
    let teamsMatch = Object.values(teamsData).filter(item =>
      item.stack.toLowerCase().includes(input.toLowerCase()),
    );

    if (teamsMatch[0] === null || input === '' || input.length < 2) {
      setResults(teamsData);
    } else {
      setResults(teamsMatch);
    }
  };

  return (
    <>
      {showModal && <FilterModal handleToggle={handleToggle} />}
      <View style={{backgroundColor: 'rgb(31, 26, 48)', flex: 1}}>
        <View style={{backgroundColor: 'rgb(57,48,77)'}}>
          <View style={{margin: 15}}>
            <MyInput
              iconName="search-outline"
              label="Search Tech Stack"
              onChangeText={handleTextInput}
            />
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
                Filters
                {/* <Icon name="time-sharp" size={22} />{' '}
                <Icon name="chevron-down-outline" size={20} color="#17f1de" /> */}
              </Text>
            </Button>
            {/* <Button
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
            </Button> */}
          </View>
        </View>
        <View style={{backgroundColor: 'black', width: '100%', height: 2}} />
        <ScrollView contentContainerStyle={{paddingVertical: 7}}>
          <>
            {results &&
              results.map((item, index) => {
                if (item !== null) {
                  return <ResultItem key={index} data={item} />;
                } else {
                  return null;
                }
              })}
          </>
        </ScrollView>
      </View>
    </>
  );
};

export default OrgHome;
