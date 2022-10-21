import React from 'react'
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import axios from 'axios';
import { loading, removeLoading } from '../redux/slices/loading/loadingSlice';
import { User } from '../interfaces/loginInterface';

export const useGetClientById = () => {


    const [infoClient, setInfoClient] = useState<User>();

    const { token } = useAppSelector(state => state.auth);
    const { isLoading } = useAppSelector(state => state.loading);

    const dispatch = useAppDispatch();

    const getInfoClient = async (id: string) => {
        dispatch(loading());
        try {
            const resp = await axios.get<User>(`http://192.168.0.244:8080/client/profile/${id}`, {
                headers: {
                    Authorization: token!
                }
            })
            setInfoClient(resp.data);
            dispatch(removeLoading());
        } catch (error: any) {
            console.log(error.response.data)
            dispatch(removeLoading())
        }
    }

    return {
        infoClient,
        getInfoClient,
        clientLoading : isLoading
    }

}
