import React, { useState } from 'react';
import { ScrollView, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ImageLogin } from '../components/ImageLogin';
import { FormLogin } from '../components/FormLogin';
import { FormRegister } from '../components/FormRegister';
import { RootStackParamList } from '../navigation/Navigation';

type Props = StackScreenProps<RootStackParamList,'LoginScreen'>

export const LoginScreen = ({ navigation }: Props) => {

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

