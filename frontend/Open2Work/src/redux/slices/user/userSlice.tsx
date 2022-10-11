import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../../interfaces/loginInterface';
import type { RootState } from '../../store';

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {} as User,
    reducers: {
        logUser: (state, action) => {
            return {
                ...state,
                ...action.payload
            }

        },
        clearUser: (state) => {
            return {} as User
        }
    }
})

export const { logUser, clearUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.register;

export default userSlice.reducer;