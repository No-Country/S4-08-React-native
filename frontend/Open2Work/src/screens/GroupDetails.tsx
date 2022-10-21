import React, { useEffect } from 'react';
import { ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/profile/Card';
import BannerGroup from '../components/profile/BannerGroup';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamListClient } from '../navigation/StackClientHome';
import { useGetTeamById } from '../hook/useGetTeamById';
import { ContactModal } from '../components/ContactModal';

type Props = StackScreenProps<RootStackParamListClient, 'Group'>

export const GroupDetails = ({ navigation, route }: Props) => {

    const idTeam = route.params.id;

    const { getInfoGroup, infoGroup } = useGetTeamById();

    const { top } = useSafeAreaInsets();


    useEffect(() => {
        getInfoGroup(idTeam)
    }, [idTeam])



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
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'hsla(0,0%,15%,0.65)'
                    }}
                >
                    <Icon name='arrow-back-outline' size={40} color='white' />
                    <Text style={{
                        color: 'white',
                        fontSize: 25
                    }}>Go back</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={{ width: '100%', height: 220 }}
                source={require('../assets/imgs/istockphoto-1046965704-640x640.jpg')}
            />
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
                {`${!!infoGroup?._id ? `Group #${infoGroup._id.substring(20)}` : 'No group at the moment'}`}
            </Headline>
            <View>
                {
                    infoGroup && (<BannerGroup
                        data={infoGroup}
                    />)
                }

            </View>
            <View style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flex: 1
            }}>
                {
                    infoGroup && infoGroup.devs.map(dev => {
                        return (
                            <Card dev={dev} key={`${dev._id}`} />
                        )
                    })
                }

            </View>
            <ContactModal teamId={idTeam} />
        </ScrollView>
    );
}
