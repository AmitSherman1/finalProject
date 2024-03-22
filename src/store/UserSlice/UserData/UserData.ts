import {createSlice} from '@reduxjs/toolkit';
import {UserApi} from '../UserApi/UserApi';

const initialState = {
  user: null,
  isLoading: false,
  error: {},
};

export const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(UserApi.endpoints.getUser.matchPending, state => {
        state.isLoading = true;
      })
      .addMatcher(UserApi.endpoints.getUser.matchFulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addMatcher(UserApi.endpoints.getUser.matchRejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

// Export the action creators
export const {setUser, clearUser} = userData.actions;

// Export the reducer
export default userData.reducer;
