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
import axios from 'axios';

const DevRegister = () => {
  const [devForm, setDevForm] = React.useState({
    name: 'Nahuel',
    surname: 'Fanego Paz',
    email: 'nfanego@mail.com',
    password: 'Admin1234!',
  });

  const submitPOST = (values: {}) => {
    axios.get('http://localhost:8080/');
    /* .post('http://localhost:8080/dev/register', {...devForm, ...values})
      .then(res => console.log(res))
      .catch(err => console.log(err)); */
  };

  return (
    <Formik
      validationSchema={Yup.object({
        languages: Yup.array().min(1, 'Provide at least 1 option'),
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
      onSubmit={values => submitPOST(values)}>
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
          <Languages
            onPress={setFieldValue}
            error={!!errors.languages && !!touched.languages}
          />
          {errors.languages && touched.languages && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="languages" />
            </Text>
          )}
          <Timezones
            onPress={setFieldValue}
            error={!!errors.timezone && !!touched.timezone}
          />
          {errors.timezone && touched.timezone && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="timezone" />
            </Text>
          )}
          <Roles
            onPress={setFieldValue}
            error={!!errors.role && !!touched.role}
          />
          {errors.role && touched.role && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="role" />
            </Text>
          )}
          <Seniority
            onPress={setFieldValue}
            error={!!errors.seniority && !!touched.seniority}
          />
          {errors.seniority && touched.seniority && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="seniority" />
            </Text>
          )}
          <Availability
            onPress={setFieldValue}
            error={!!errors.availability && !!touched.availability}
          />
          {errors.availability && touched.availability && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="availability" />
            </Text>
          )}

          <MyInput
            iconName="logo-github"
            label={'GitHub'}
            value={values.github}
            error={!!errors.github && !!touched.github}
            onChangeText={handleChange('github')}
          />
          {errors.github && touched.github && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="github" />
            </Text>
          )}
          <MyInput
            iconName="logo-linkedin"
            label={'Linkedin'}
            value={values.linkedin}
            error={!!errors.linkedin && !!touched.linkedin}
            onChangeText={handleChange('linkedin')}
          />
          {errors.linkedin && touched.linkedin && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="linkedin" />
            </Text>
          )}
          <MyInput
            iconName="globe-outline"
            label={'Portfolio / Web'}
            value={values.web}
            error={!!errors.web && !!touched.web}
            onChangeText={handleChange('web')}
          />
          {errors.web && touched.web && (
            <Text style={{color: 'red'}}>
              <ErrorMessage name="web" />
            </Text>
          )}

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
