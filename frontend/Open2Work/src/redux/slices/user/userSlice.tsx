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

export const { logUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.register;

export default userSlice.reducer;