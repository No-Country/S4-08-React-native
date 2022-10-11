import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store';

interface AuthState {
    isLoading: boolean,
    token: null | string,
}

const initialState: AuthState ={
    isLoading: true,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state: AuthState, action): AuthState => {
            return {
                ...state,
                isLoading: false,
                token: action.payload
            }
        },
        logout:(state: AuthState ): AuthState => {
            return {
                ...state,
                token: null
            }
        }
    }
})

export const { setToken, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.register;

export default authSlice.reducer;