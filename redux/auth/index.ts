import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoggedInUser} from './models';

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    username: '',
    email: '',
    phone: '',
    token: '',
  },
  reducers: {
    loginUser(state, action: PayloadAction<LoggedInUser>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.token = action.payload.token;
    },
  },
});

export const {loginUser} = authSlice.actions;
export default authSlice.reducer;
