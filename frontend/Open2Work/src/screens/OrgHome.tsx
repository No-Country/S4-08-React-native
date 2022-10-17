import axios from 'axios';
import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { Button } from 'react-native-paper';
import FilterModal from '../components/home/filterModal';
import ResultItem from '../components/home/resultItem';
import { MyInput } from '../components/MyInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamListClient } from '../navigation/StackClientHome';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { resetFilter, selectFilter } from '../redux/slices/filter/filterSilce';

type Props = StackScreenProps<RootStackParamListClient, 'Home'>

const OrgHome = ({ navigation }: Props) => {

  const [showModal, setShowModal] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [teamsData, setTeamsData] = React.useState<any>();
  const [results, setResults] = React.useState<any>();
  const [selected, setSelected] = React.useState(['']);
  const [error, setError] = React.useState('');
  const { availability, timezone, language } = useAppSelector(selectFilter);

  const dispatch = useAppDispatch();

  const { token } = useAppSelector(state => state.auth);

  React.useEffect(() => {
    setError('');
    axios
      .get('http://192.168.0.244:8080/team/profile', {
        headers: {
          Authorization: token!
        }
      })
      .then(res => {
        setTeamsData(res.data);
        setResults(res.data);
      })
      .catch(err => {
        setError(err.message);
        console.log(err);
      });
  }, [timezone, availability, language]);

  const handleToggle = () => {
    setShowModal(!showModal);
    handleFilters(results);

    /* if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected(state => [...state, id]);
    } */
  };

  const handleTextInput = (input: string) => {
    setQuery(input);
    input = input.trim();
    let teamsMatch: any;
    if (input !== '') {
      teamsMatch = Object.values(teamsData).filter((item: any) => {
        if (item.stack !== undefined)
          return item.stack.toLowerCase().includes(input.toLowerCase());
      });
    } else {
      teamsMatch = [null];
    }
    if (teamsMatch[0] === null || input === '' || input.length < 2) {
      setResults(teamsData);
    } else {
      setResults(teamsMatch);
    }
  };

  const handleFilters = (resultsArray: any): void => {
    if (timezone !== '') {
      resultsArray = resultsArray.filter((team: any) => {
        return team.time_zone[0].slice(3).trim().includes(timezone.slice(3));
      });
    }
    if (availability !== '') {
      resultsArray = resultsArray.filter((team: any) => {
        return team.availability
          .slice(0, 4)
          .toLowerCase()
          .includes(availability.slice(0, 4).toLowerCase());
      });
    }
    if (language[0] !== '') {
      resultsArray = resultsArray.filter((team: any) => {
        return team.language.some((lang: string) =>
          language.includes(lang.slice(0, 3).toUpperCase()),
        );
      });
    }
    setResults(resultsArray);
  };

  return (
    <>
      {showModal && <FilterModal handleToggle={handleToggle} />}
      <View style={{ backgroundColor: 'rgb(31, 26, 48)', flex: 1 }}>
        <View style={{ backgroundColor: 'rgb(57,48,77)' }}>
          <View style={{ margin: 15 }}>
            <MyInput
              iconName="search-outline"
              label="Search Tech Stack"
              onChangeText={handleTextInput}
              clearTextOnFocus={true}
              selectTextOnFocus={true}
              value={query}
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
              onPress={handleToggle}
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
              */}
            <Button
              onPress={() => (dispatch(resetFilter()), handleTextInput(''))}
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
                Reset
                {/* <Icon name="language-sharp" size={21} />{' '}
                <Icon name="chevron-down-outline" size={20} color="#17f1de" /> */}
              </Text>
            </Button>
          </View>
        </View>
        <View style={{ backgroundColor: 'black', width: '100%', height: 2 }} />
        <ScrollView contentContainerStyle={{ paddingVertical: 7 }}>
          <>
            {error && <Text style={{ color: 'lightgrey' }}>{error}</Text>}
            {results && results.length > 0 ? (
              results.map((item: any ) => {
                if (item !== null) {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Group', {
                        id: item._id
                      })}
                    >
                      <>
                        <ResultItem key={item._id} data={item} />
                      </>
                    </TouchableOpacity>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <Text style={{ color: 'lightgrey' }}>No Results</Text>
            )}
          </>
        </ScrollView>
      </View>
    </>
  );
};

export default OrgHome;
