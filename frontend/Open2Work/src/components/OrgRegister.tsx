import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {Formik} from 'formik';
import {MyInput} from '../components/MyInput';
import Roles from '../components/Roles';
import Seniority from '../components/Seniority';
import Availability from '../components/Availability';
import Timezones from '../components/Timezones';
import Languages from '../components/Languages';

const OrgRegister = () => {
  return (
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
        <View
          style={{
            minHeight: '100%',
            marginBottom: 25,
            width: '90%',
          }}>
          <Languages />
          <Timezones />

          <MyInput
            iconName="briefcase-outline"
            label={'Organization Name'}
            value={values.github}
            onChangeText={handleChange('github')}
          />
          <MyInput
            iconName="logo-linkedin"
            label={'Linkedin'}
            value={values.linkedin}
            onChangeText={handleChange('linkedin')}
          />
          <MyInput
            iconName="logo-github"
            label={'GitHub'}
            value={values.github}
            onChangeText={handleChange('github')}
          />
          <MyInput
            iconName="globe-outline"
            label={'Portfolio / Web'}
            value={values.web}
            onChangeText={handleChange('web')}
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
  );
};

export default OrgRegister;
