import React from 'react'
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { useState } from 'react';
import { setError } from '../redux/slices/error/errorSlice';
import axios from 'axios';
import { loading, removeLoading } from '../redux/slices/loading/loadingSlice';
import { apiDb } from '../axios/apiDb';

interface ModalState {
    show: boolean;
    message: string;
}

export const useSendContact = () => {

    const { _id } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const [{ show, message }, setModalValues] = useState<ModalState>({
        show: false,
        message: ''
    })

    const handleChange = (field: keyof ModalState, value: string | boolean) => {

        setModalValues((prev) => ({
            ...prev,
            [field]: value
        }))

    }

    const handleSubmit = async (teamId: string) => {

        if (message === '') return;

        dispatch(loading())

        const body = {
            client: _id,
            team: teamId,
            description: message
        }

        try {

            const { data } = await apiDb.post('/order/new', body);
            handleChange('show', false)
            handleChange('message', '')
            dispatch(removeLoading())
            dispatch(setError(data))

        } catch (error: any) {
            console.log(error)
            dispatch(removeLoading())
            dispatch(setError(error.response.data))
        }
    }

    return {
        show,
        message,
        handleChange,
        handleSubmit
    }
}
