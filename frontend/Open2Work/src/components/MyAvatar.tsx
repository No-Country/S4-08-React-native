import * as React from 'react';
import {View, Pressable, Modal, Text, StatusBar} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

const MyAvatar = () => {
  const [uri, setUri] = React.useState(undefined || String);
  const [showModal, setShowModal] = React.useState(false);

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
    <>
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
              <Icon name="images" size={29} color="black" />
              <Text style={{color: 'black'}}>Gallery</Text>
            </Pressable>
            <Pressable
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => handleAvatar('camera')}>
              <Icon name="camera" size={34} color="black" />
              <Text style={{color: 'black'}}>Camera</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default MyAvatar;
