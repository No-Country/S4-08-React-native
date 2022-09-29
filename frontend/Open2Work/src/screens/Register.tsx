import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {Formik} from 'formik';
import {MyInput} from '../components/MyInput';
import {Avatar, Headline, Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Roles from '../components/Roles';
import Seniority from '../components/Seniority';
import Availability from '../components/Availability';
import Timezones from '../components/Timezones';
import LinearGradient from 'react-native-linear-gradient';

const Register = () => {
  const [uri, setUri] = useState(undefined || String);
  const [showModal, setShowModal] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleAvatar = (picker: string) => {
    switch (picker) {
      case 'image':
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(image => {
            setUri(image.path);
          })
          .catch(err => console.log(err))
          .finally(() => setShowModal(false));
        break;
      case 'camera':
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        })
          .then(image => {
            setUri(image.path);
          })
          .catch(err => console.log(err))
          .finally(() => setShowModal(false));
        break;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'rgb(31,26,48)',
        alignItems: 'center',
      }}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <LinearGradient
        style={{width: '100%', height: '45%', position: 'absolute'}}
        locations={[0.1, 0.2, 1]}
        useAngle={true}
        angle={180}
        colors={[
          'rgba(0, 0, 0,0.45)',
          'rgba(31, 26, 48,0.8)',
          'rgba(31, 26, 48,0.9)',
        ]}>
        <ImageBackground
          resizeMode="contain"
          source={{
            uri: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          }}
          style={{
            width: '100%',
            height: '60%',
            zIndex: -100,
          }}
        />
      </LinearGradient>
      <Headline
        style={{
          color: '#17f1de',
          marginTop: 40,
          fontWeight: '700',
          fontSize: 30,
        }}>
        Create Account
      </Headline>
      <View style={{marginTop: 25}}>
        {uri ? (
          <Avatar.Image size={95} source={{uri}} />
        ) : (
          <Avatar.Icon
            size={100}
            icon="person-outline"
            color="#17f1de"
            style={{backgroundColor: 'rgb(145,145,145)'}}
          />
        )}
        <Text
          onPress={() => setShowModal(!showModal)}
          style={{
            left: 75,
            bottom: 30,
            color: 'rgb(145,145,145)',
            borderRadius: 50,
            width: 34,
            aspectRatio: 1,
            fontSize: 25,
            textAlign: 'center',
            textAlignVertical: 'top',
            backgroundColor: '#17f1de',
          }}>
          +
        </Text>
      </View>
      <Modal
        style={{position: 'absolute', zIndex: -10}}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}>
        <Pressable
          style={{
            backgroundColor: 'hsla(0,0%,0%,0.95)',
            height: '100%',
            width: '100%',
          }}
          onPress={() => setShowModal(false)}>
          <View
            style={{
              flexDirection: 'row',
              height: '15%',
              backgroundColor: 'white',
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
            }}>
            <Pressable
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
              }}
              onPress={() => handleAvatar('image')}>
              <Icon name="images" size={21} color="black" />
              <Text>Gallery</Text>
            </Pressable>
            <Pressable
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => handleAvatar('camera')}>
              <Icon name="camera" size={25} color="black" />
              <Text>Camera</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '90%',
          marginVertical: 10,
        }}>
        <Text style={{color: 'white'}}>REGITER W/LINKDIN</Text>
        <Text style={{color: 'white'}}>REGITER W/GITHUB</Text>
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
          <View
            style={{
              minHeight: '100%',
              marginBottom: 25,
              width: '90%',
            }}>
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
            <MyInput
              iconName={hidden ? 'eye-off-outline' : 'eye-outline'}
              onClick={setHidden}
              secureTextEntry={hidden}
              label={'Password'}
              value={values.pass}
              onChangeText={handleChange('pass')}
            />
            <MyInput
              iconName={hidden ? 'eye-off-outline' : 'eye-outline'}
              onClick={setHidden}
              secureTextEntry={hidden}
              label={'Password Confirmation'}
              value={values.passConfirm}
              onChangeText={handleChange('passConfirm')}
            />
            <MyInput
              iconName="at-outline"
              label={'E-mail'}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <MyInput
              iconName="language-outline"
              label={'Languages'}
              value={values.language}
              onChangeText={handleChange('language')}
            />
            <Timezones />
            <Roles />
            <Seniority />
            <Availability />
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
    </ScrollView>
  );
};

export default Register;
