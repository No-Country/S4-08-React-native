import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch } from '../redux/hook';
import { logout } from '../redux/slices/auth/authSlice';
import { clearUser } from '../redux/slices/user/userSlice';

export const ButtonLogout = () => {

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearUser())
    }

    return (
        <TouchableOpacity
        onPress={ handleLogout }
        >
            <Icon name='log-out-outline' size={40} color='white' />
        </TouchableOpacity>
    )
}
