import { configureStore } from '@reduxjs/toolkit';
import {UserMiddleware, UserReducer} from './UserSlice/UserApi/UserApi';
import userDataReducer from './UserSlice/UserData/UserData';

export const BASE_URL = 'http://localhost:5001/';

export const globalStore = configureStore({
  reducer: {
    userApi: UserReducer,
    userData: userDataReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      UserMiddleware,
    ]),
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;
