import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './slices/register/registerSlice';
import userReducer from './slices/user/userSlice';
import authReducer from './slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    auth: authReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch