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
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setToken: (state: AuthState, action): AuthState => {
            return {
                ...state,
                isLoading: false,
                token: action.payload
            }
        },
        logout:(state: AuthState, action): AuthState => {
            return {
                ...state,
                token: null
            }
        }
        // increment: state => {
        //   state.value += 1
        // },
        // decrement: state => {
        //   state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //   state.value += action.payload
        // }
    }
})

export const { setToken, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.register;

export default authSlice.reducer;