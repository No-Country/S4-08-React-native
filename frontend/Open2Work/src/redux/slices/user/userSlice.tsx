import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../interfaces/loginInterface';
import type {RootState} from '../../store';

const initialState: User = {
  __v: 0,
  _id: '',
  avatar: '',
  currentTeam: '',
  isDev: false,
  oldTeams: [],
  name: '',
  surname: '',
  email: '',
  password: '',
  role: '',
  orders: [''],
  social: {
    _id: '',
    github: '',
    linkedin: '',
    portfolio: '',
  },
  info: {
    _id: '',
    experience: 0,
    language: [''],
    organization: '',
    time_availability: '',
    time_zone: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearUser: state => {
      return initialState;
    },
  },
});

export const {logUser, clearUser} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
