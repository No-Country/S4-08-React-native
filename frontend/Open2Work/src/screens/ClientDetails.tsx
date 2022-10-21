import React, { useEffect } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Headline } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BannerProfile from '../components/profile/BannerProfile'
import { useGetClientById } from '../hook/useGetClientById';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamListClientNotifications } from '../navigation/StackNotifications'
import { ButtonGoBack } from '../components/ButtonGoBack'

type Props = StackScreenProps<RootStackParamListClientNotifications, 'Details'>

export const ClientDetails = ({ route, navigation }: Props) => {

    const { id, msg } = route.params;

    const { top } = useSafeAreaInsets();

    const { getInfoClient, infoClient } = useGetClientById();

    useEffect(() => {
        getInfoClient(id)
    }, [id])

    return (
        <ScrollView
            contentContainerStyle={{
                backgroundColor: 'rgb(31,26,48)',
                flex: 1,
            }}>
            <View
                style={{
                    position: 'absolute',
                    left: 10,
                    top,
                    zIndex: 1,
                }}
            >
                <ButtonGoBack navigation={navigation} />
            </View>
            <Image
                style={{ width: '100%', height: 220 }}
                source={require('../assets/imgs/laptop-programming-coding-macbook.jpg')}
            />


            {
                infoClient && (
                    <>
                        <Headline
                            style={{
                                position: 'absolute',
                                top,
                                right: 10,
                                color: '#17f1de',
                                marginTop: 25,
                                fontWeight: '700',
                                fontSize: 30,
                                paddingVertical: 7,
                                paddingHorizontal: 15,
                                borderRadius: 3,
                                backgroundColor: 'hsla(0,0%,15%,0.65)',
                                textTransform: 'capitalize'
                            }}>
                            {`${infoClient?.name} ${infoClient?.surname}`}
                        </Headline>
                        <BannerProfile user={infoClient} />
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >

                            <Text
                                style={{
                                    color: '#17f1de',
                                    fontSize: 40,
                                    textAlign: 'center'
                                }}
                            >
                                Description the job to develop:
                            </Text>

                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 30
                                }}
                            >
                                {msg}
                            </Text>
                        </View>
                    </>
                )
            }


        </ScrollView>
    )
}
