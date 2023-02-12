import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import {
  User,
  IUserDetails,
  IExistingUserDetails,
  AuthInitialState,
  LoggedInUser,
} from './models';

const initialState = {
  user: {
    id: '',
    username: '',
    phone: '',
    token: '',
  },
  users: [],
  loading: false,
  error: '',
} as AuthInitialState;

const generateToken = (length: number) => {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (var i = 0; i < length; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
};

const ifUserExists = async (phone: string) => {
  const users = await AsyncStorage.getItem('@users');
  const usersArr = JSON.parse(users || '[]');
  return usersArr.filter((user: User) => user.phone === phone);
};

export const logInUser = createAsyncThunk(
  'login',
  async (user: IExistingUserDetails, {getState}) => {
    const state: any = getState();
    const ifCurrentUser = await ifUserExists(user.phone);
    console.log('ifCurrentUser', ifCurrentUser);
    if (ifCurrentUser.length === 1) {
      const userToken = generateToken(20);
      const storageUserObj = {
        id: ifCurrentUser[0].id,
        username: ifCurrentUser[0].username,
        password: ifCurrentUser[0].password,
        token: userToken,
      };
      await AsyncStorage.setItem('@user', JSON.stringify(storageUserObj));
      return {
        ...state.auth.user,
        id: ifCurrentUser[0].id,
        username: ifCurrentUser[0].username,
        phone: ifCurrentUser[0].phone,
        password: ifCurrentUser[0].password,
        token: userToken,
      };
    }
  },
);

export const getUser = createAsyncThunk('getUser', async () => {
  const response = await AsyncStorage.getItem('@user');
  return JSON.parse(response || '');
});

export const registerUser = createAsyncThunk(
  'register',
  async (userInfo: IUserDetails, {getState}) => {
    const state: any = getState();
    if (userInfo.password === userInfo.confirmPassword) {
      const users = await AsyncStorage.getItem('@users');
      const mutableUsers = JSON.parse(users || '[]');
      const id = uuid.v4();
      const userExists = await ifUserExists(userInfo.phone);
      if (userExists?.length < 1) {
        mutableUsers.push({
          id,
          username: userInfo.username,
          phone: userInfo.phone,
          password: userInfo.password,
        });
        await AsyncStorage.setItem('@users', JSON.stringify(mutableUsers));
        // state.user = {
        //   id,
        //   username: userInfo.username,
        //   phone: userInfo.phone,
        //   token: 'logged',
        // };
      }
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialUsers(state: AuthInitialState) {
      state.users = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logInUser.pending, state => {
        state.loading = false;
      })
      .addCase(
        logInUser.fulfilled,
        (state, {payload}: PayloadAction<LoggedInUser>) => {
          state.loading = false;
          state.user.id = payload.id;
          state.user.username = payload.username;
          state.user.phone = payload.phone;
          state.user.token = payload.token;
        },
      )
      .addCase(logInUser.rejected, state => {
        state.loading = false;
        state.error = 'Please check your credentials';
      })
      .addCase(registerUser.pending, state => {
        state.loading = false;
      })
      .addCase(registerUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(registerUser.rejected, state => {
        state.loading;
      })
      .addCase(getUser.pending, state => {
        state.loading = false;
      })
      .addCase(
        getUser.fulfilled,
        (state, {payload}: PayloadAction<LoggedInUser>) => {
          state.loading = false;
          state.user.id = payload.id;
          state.user.phone = payload.phone;
          state.user.username = payload.username;
          state.user.token = payload.token;
        },
      )
      .addCase(getUser.rejected, state => {
        state.loading = false;
        state.error = 'Error loading user';
      });
  },
});

export const {setInitialUsers} = authSlice.actions;
export const authReducer = authSlice.reducer;
