import * as React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-paper';

const MyInput = ({...props}) => {
  return (
    <TextInput
      style={{
        backgroundColor: 'rgb(57, 48, 77)',
        marginVertical: 5,
        marginHorizontal: 10,
        borderBottomColor: 'rgb(24, 241, 222)',
      }}
      theme={{
        colors: {
          text: 'white',
          placeholder: 'rgb(205,205,205)',
          primary: 'rgb(24, 241, 222)',
        },
      }}
      {...props}
    />
  );
};

const Register = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31, 26, 48)',
        height: '100%',
      }}>
      <Text style={{color: 'white'}}>Create Account</Text>
      <Formik
        initialValues={{email: '', pass: '', name: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={{minHeight: '100%'}}>
            <MyInput
              label={'E-mail'}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Button
              color={'rgb(24, 241, 222)'}
              onPress={handleSubmit}
              title="Submit"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Register;
