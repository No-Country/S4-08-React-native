import React, { useState } from 'react';
import { Formik } from 'formik';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { MyInput } from './components/MyInput';



export const LoginScreen = () => {

    const [hidden, setHidden] = useState(true);

    return (

        <View
            style={{
                flex: 1,
                backgroundColor: '#1f1a30',
                paddingHorizontal: 20
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
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (

                    <View>
                        <MyInput
                            iconName='mail-outline'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            label='EMAIL'
                            error={false}
                        />
                        
                        <MyInput
                            iconName={hidden ? 'eye-off-outline' : 'eye-outline'}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            label='PASSWORD'
                            error={false}
                            onClick={ setHidden }
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
        </View>
    )
}

