import React from 'react'
import { ActivityIndicator, Button, Modal } from 'react-native-paper'
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { Text } from 'react-native';
import { removeError } from '../redux/slices/error/errorSlice';

export const LoadingModal = () => {

    const { isLoading } = useAppSelector(state => state.loading);

    return (
        <Modal
            visible={ isLoading }
            contentContainerStyle={{
                backgroundColor: '#39304d',
                // flex: 1
                width: '80%',
                height: 230,
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: 'space-evenly'
            }}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,.5)'
            }}
            dismissable={ false }
        >
            <ActivityIndicator color='white' size={60} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 30
                }}
            >Loading...</Text>
        </Modal>
    )
}
