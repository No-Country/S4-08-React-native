import React, { useState } from 'react';
import { ScrollView, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { ImageLogin } from '../components/ImageLogin';
import { FormLogin } from '../components/FormLogin';
import { FormRegister } from '../components/FormRegister';



export const LoginScreen = () => {

    const [isRegister, setIsRegister] = useState(true);

    return (
        <ScrollView
            style={{
                backgroundColor: '#1f1a30',
            }}
            keyboardShouldPersistTaps='handled'
        >
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor={'transparent'}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    <ImageLogin />
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                            top: -30,
                            justifyContent: 'space-between',
                            // height: 600
                        }}
                    >
                        {
                            isRegister ? <FormLogin setIsRegister={ setIsRegister }/> : <FormRegister setIsRegister={ setIsRegister }/>
                        }
                        
                    </View>
                </>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

