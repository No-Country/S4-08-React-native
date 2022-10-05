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
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { register } from '../redux/features/register/registerSlice';

interface FormValues {
  languages: string [],
  timezone: string,
  role: string,
  seniority: string,
  availability: string,
  github: string,
  linkedin: string,
  web: string,
}

const DevRegister = () => {

  const formValues = useAppSelector(state=> state.register);
  const dispatch = useAppDispatch();

  const submitPOST = (values: FormValues) => {
    const createForm = {
      role: values.role,
      avatar: "",
      social: {
        linkedin: values.linkedin,
        portfolio: values.web,
        github: values.github
      },
      info: {
        time_availability: values.availability,
        time_zone: values.timezone,
        experience: values.seniority,
        language: values.languages
      }
    }

    dispatch( register( createForm ));

    // axios
    //   .get('http://192.168.1.43:8080/')
    //   .then(res => console.log(res.status))
    //   .catch(err => console.log(err.message));
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
      initialValues={
        {
          "languages": [
            "ES"
          ],
          "timezone": "GMT-3",
          "role": "front",
          "seniority": "5",
          "availability": "part",
          "github": "http://a.com",
          "linkedin": "Http://a.com",
          "web": ""
        }
      //   {
      //   languages: [],
      //   timezone: '',
      //   role: '',
      //   seniority: '',
      //   availability: '',
      //   github: '',
      //   linkedin: '',
      //   web: '',
      // }
    }
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