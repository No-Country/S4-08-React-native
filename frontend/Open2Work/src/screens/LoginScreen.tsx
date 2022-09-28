import React, { useState } from 'react';
import { Formik } from 'formik';
import { ScrollView, Text, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { MyInput } from '../components/MyInput';
import { IconLogin } from '../components/IconLogin';
import { ImageLogin } from '../components/ImageLogin';



export const LoginScreen = () => {

    const [hidden, setHidden] = useState(true);

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
                            height: 600
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 40
                            }}
                        >Login</Text>
                        <Text
                            style={{
                                color: '#464055',
                                fontSize: 30
                            }}
                        >Plase fill the input below here</Text>


                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={(values, {resetForm}) =>{
                                 console.log(values);
                                 resetForm();
                                 Keyboard.dismiss();
                                }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (

                                <View>

                                    <MyInput
                                        iconName='mail-outline'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        label='Email'
                                        error={false}
                                        keyboardType='email-address'
                                    />

                                    <MyInput
                                        iconName={hidden ? 'eye-off-outline' : 'eye-outline'}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        label='Password'
                                        error={false}
                                        onClick={setHidden}
                                        secureTextEntry={hidden}
                                    />


                                    <View>
                                        <Button
                                            onPress={handleSubmit}
                                            mode="contained"
                                            style={{
                                                width: '60%',
                                                alignSelf: 'center',
                                                marginTop: 20,
                                                borderRadius: 40
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: 25
                                            }}>LOGIN</Text>
                                        </Button>
                                    </View>

                                </View>
                            )}
                        </Formik>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginVertical: 10
                            }}
                        >
                            <IconLogin
                                backgroundColor='#0a66c2'
                                iconName='logo-linkedin'
                                label='Sing in with LinkedIn'
                                onPress={() => console.log('Login with Linkedin')}
                            />

                            <IconLogin
                                iconName='logo-github'
                                label='Sing in with Github'
                                backgroundColor='#6e5494'
                                onPress={() => console.log('Login with Github')}
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignSelf: 'center',

                            }}
                        >
                            <Text style={{
                                color: '#464055',
                                fontSize: 30
                            }}>Don't have an account? </Text>
                            <TouchableOpacity
                                onPress={() => console.log('Sing up')}
                            >
                                <Text
                                    style={{
                                        color: '#17f1de',
                                        fontSize: 30,
                                        textDecorationLine: 'underline'
                                    }}
                                >Sing up</Text>
                            </TouchableOpacity>
                        </View>



                    </View>
                </>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

