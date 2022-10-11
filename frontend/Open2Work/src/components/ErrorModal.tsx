import React from 'react'
import { Button, Modal } from 'react-native-paper'
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { Text } from 'react-native';
import { removeError } from '../redux/slices/error/errorSlice';

export const ErrorModal = () => {

    const { error, showModal } = useAppSelector(state => state.error);
    const dispatch = useAppDispatch();

    return (
        <Modal
            visible={showModal}
            onDismiss={() => dispatch(removeError())}
            contentContainerStyle={{
                backgroundColor: '#39304d',
                // flex: 1
                width: '80%',
                height: 230,
                alignItems: 'center',
                borderRadius: 5
            }}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,.5)'
            }}
            dismissable
        >
            <Text
                style={{
                    color: '#fff',
                    fontSize: 40
                }}
            >{error}</Text>
            <Button
                onPress={() => dispatch(removeError())}
                mode="contained"
                style={{
                    width: '60%',
                    alignSelf: 'center',
                    marginTop: 20,
                    borderRadius: 40
                }}
            >
                <Text>OK</Text>
            </Button>
        </Modal>
    )
}
