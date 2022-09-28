import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {MyInput} from '../components/MyInput';
import {Avatar, Headline, Button} from 'react-native-paper';
import {List} from 'react-native-paper';

const Register = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState('');
  const handlePress = () => {
    setExpanded(!expanded);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
        alignItems: 'center',
      }}>
      <Headline
        style={{
          color: 'white',
          marginTop: 20,
          fontWeight: '700',
          fontSize: 30,
        }}>
        Create Account
      </Headline>
      <View style={{marginTop: 25}}>
        <Avatar.Icon size={95} icon="person-outline" />
        <Text
          style={{
            left: 70,
            bottom: 30,
            color: 'white',
            borderRadius: 50,
            width: 34,
            fontSize: 25,
            textAlign: 'center',
            backgroundColor: 'darkgrey',
          }}>
          +
        </Text>
      </View>
      <Formik
        initialValues={{
          role: '',
          last: '',
          pass: '',
          name: '',
          stack: '',
          language: '',
          location: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values}) => (
          <View style={{minHeight: '100%', width: '80%', marginBottom: 25}}>
            <MyInput
              iconName="person-outline"
              label={'First Name'}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <MyInput
              iconName="person-add-outline"
              label={'Last Name'}
              value={values.last}
              onChangeText={handleChange('last')}
            />
            <List.Section style={{borderRadius: 50}}>
              <List.Accordion
                title="Role"
                left={props => (
                  <List.Icon {...props} color="white" icon="build-outline" />
                )}
                right={props => (
                  <List.Icon
                    {...props}
                    icon={
                      expanded ? 'caret-down-outline' : 'caret-forward-outline'
                    }
                  />
                )}
                expanded={expanded}
                onPress={handlePress}
                style={{borderRadius: 10}}>
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'grey',
                  }}>
                  <List.Item
                    title="Front End"
                    left={props => (
                      <List.Icon
                        {...props}
                        icon={
                          selected === 'front'
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                      />
                    )}
                    onPress={() => setSelected('front')}
                  />
                  <List.Item
                    title="Back End"
                    left={props => (
                      <List.Icon
                        {...props}
                        icon={
                          selected === 'back'
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                      />
                    )}
                    onPress={() => setSelected('back')}
                  />
                  <List.Item
                    title="UIX"
                    left={props => (
                      <List.Icon
                        {...props}
                        icon={
                          selected === 'uix'
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                      />
                    )}
                    onPress={() => setSelected('uix')}
                  />
                  <List.Item
                    title="QA"
                    left={props => (
                      <List.Icon
                        {...props}
                        icon={
                          selected === 'qa'
                            ? 'radio-button-on-outline'
                            : 'radio-button-off-outline'
                        }
                      />
                    )}
                    onPress={() => setSelected('qa')}
                  />
                </View>
              </List.Accordion>
            </List.Section>

            <MyInput
              label={'Tech Stack'}
              value={values.stack}
              onChangeText={handleChange('stack')}
            />
            <MyInput
              label={'Location'}
              value={values.location}
              onChangeText={handleChange('location')}
            />
            <MyInput
              label={'Language'}
              value={values.language}
              onChangeText={handleChange('language')}
            />
            <MyInput
              label={'Language'}
              value={values.email}
              onChangeText={handleChange('language')}
            />
            <MyInput
              label={'Language'}
              value={values.email}
              onChangeText={handleChange('language')}
            />
            <MyInput
              label={'Language'}
              value={values.email}
              onChangeText={handleChange('language')}
            />
            <Button
              onPress={handleSubmit}
              mode="contained"
              style={{
                width: '60%',
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 40,
              }}>
              <Text
                style={{
                  fontSize: 25,
                }}>
                SUBMIT
              </Text>
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Register;
