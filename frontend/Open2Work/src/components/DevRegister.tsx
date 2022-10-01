import * as React from 'react';
import {View, Text, Keyboard} from 'react-native';
import {Button} from 'react-native-paper';
import {Formik, ErrorMessage} from 'formik';
import {MyInput} from '../components/MyInput';
import Roles from '../components/Roles';
import Seniority from '../components/Seniority';
import Availability from '../components/Availability';
import Timezones from '../components/Timezones';
import Languages from '../components/Languages';
import * as Yup from 'yup';

const DevRegister = () => {
  const [devForm, setDevForm] = React.useState({});

  return (
    <Formik
      validationSchema={Yup.object({
        languages: Yup.string().required('Required'),
        timezone: Yup.string().required('Required'),
        role: Yup.string().required('Required'),
        seniority: Yup.string().required('Required'),
        availability: Yup.string().required('Required'),
        github: Yup.string().url('Invalid URL format').required('Required'),
        linkedin: Yup.string().url('Invalid URL format').required('Required'),
        web: Yup.string().url('Invalid URL format'),
      })}
      initialValues={{
        languages: [],
        timezone: '',
        role: '',
        seniority: '',
        availability: '',
        github: '',
        linkedin: '',
        web: '',
      }}
      onSubmit={values => console.log(values)}>
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View
          style={{
            minHeight: '100%',
            marginBottom: 25,
            width: '90%',
          }}>
          <Languages onPress={setFieldValue} />
          <Timezones onPress={setFieldValue} />
          <Roles onPress={setFieldValue} />
          <Seniority onPress={setFieldValue} />
          <Availability onPress={setFieldValue} />

          <MyInput
            iconName="logo-github"
            label={'GitHub'}
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

export default DevRegister;
