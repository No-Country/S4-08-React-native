import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store';

// Define a type for the slice state
interface userState {
    avatar: string,
    email: string,
    info: {
        experience: number,
        language: string[],
        time_availability: string,
        time_zone: string
    },
    name: string,
    password: string,
    role: string,
    social: {
        github: string,
        linkedin: string,
        portfolio: string,
    },
    surname: string
}

// Define the initial state using that type
const initialState: userState = {
    name: "",
    surname: "",
    email: "",
    password: "",
    role: "",
    avatar: "",
    social: {
        linkedin: "",
        portfolio: "",
        github: ""
    },
    info: {
        time_availability: "",
        time_zone: "",
        experience: 0,
        language: []
    }
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
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