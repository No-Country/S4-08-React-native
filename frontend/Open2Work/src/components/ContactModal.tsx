import React, { useState } from 'react';
import { Modal, Text, View, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { MyInput } from './MyInput';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import axios from 'axios';
import { setError } from '../redux/slices/error/errorSlice';

interface Props {
    teamId: string
}

export const ContactModal = ({ teamId }: Props) => {

    const { _id } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {

        if (message === '') return;

        const body = {
            client: _id,
            team: teamId,
            description: message
        }

        try {
            const { data } = await axios.post('http://192.168.0.244:8080/order/new', body);
            dispatch(setError(data))
            setShowModal(false)
            setMessage('');
        } catch (error: any) {
            console.log(error)
            dispatch(setError(error.response.data))
        }
    }
    return (
        <>  
        <StatusBar 
            hidden
        />
            <Modal
                visible={showModal}
                animationType='fade'
                transparent
                onDismiss={() => setShowModal(false)}
            >

                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,1)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <View
                        style={{
                            backgroundColor: '#39304d',
                            width: '80%',
                            borderRadius: 5,
                            alignItems: 'center',
                            // justifyContent: 'space-evenly'
                        }}
                    >
                        <Icon
                            name='close-circle-outline'
                            size={40}
                            color='white'
                            onPress={() => setShowModal(false)}
                            style={{
                                position: 'absolute',
                                top: 5,
                                right: 5,
                                zIndex: 999,
                                elevation: 999
                            }}
                        />
                        <Text
                            style={{ color: 'white', fontSize: 20, marginVertical: 40, marginHorizontal: 20, textAlign: 'center' }}
                        >Send the team a description of your idea to develop</Text>

                        <MyInput
                            numberOfLines={4}
                            multiline
                            keyboardType='default'
                            value={message}
                            onChangeText={setMessage}
                            style={{
                                marginHorizontal: 20,
                            }}
                        />
                        <Button
                            mode='contained'
                            style={{
                                marginVertical: 20
                            }}
                            onPress={() => handleSubmit()}
                        >send</Button>
                    </View>
                </View>

            </Modal>
            <Button
                onPress={() => setShowModal(true)}
                mode="contained"
                style={{
                    width: '60%',
                    alignSelf: 'center',
                    margin: 20,
                    borderRadius: 40
                }}
            >
                <Text style={{
                    fontSize: 20
                }}>Contact Team!</Text>
            </Button>
        </>
    )
}
