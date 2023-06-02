import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import {
  User,
  IUserDetails,
  IExistingUserDetails,
  AuthInitialState,
  LogInUserPayload,
  RegisterUserPayload,
} from './models';
import {getPlatform} from '../../utils';

const initialState = {
  user: {
    id: '',
    username: '',
    phone: '',
    token: null,
  },
  users: [],
  loading: false,
  error: '',
} as AuthInitialState;

const generateToken = (length: number) => {
  let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token: any = null;
  for (var i = 0; i < length; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
};

const ifUserExists = async (phone: string) => {
  const users = await localStorage.getItem('users');
  const usersArr = JSON.parse(users || '[]');
  return usersArr.filter((user: User) => user.phone === phone);
};

export const logInUser = createAsyncThunk(
  'login',
  async (user: IExistingUserDetails, {getState}) => {
    console.log('🚀 ~ file: index.ts:43 ~ user:', user);
    const state: any = getState();
    const userToken = generateToken(20);
    const storageUserObj = {
      id: '24dbbd60-ffd1-46bf-adc4-8ae764c44683',
      username: 'John Doe',
      password: user.password,
      token: userToken,
    };
    await localStorage.setItem('user', JSON.stringify(storageUserObj));
    return {
      ...state.auth.user,
      id: '24dbbd60-ffd1-46bf-adc4-8ae764c44683',
      username: 'John Doe',
      phone: user.phone,
      password: user.password,
      token: userToken,
    };
  },
);

export const getUser = createAsyncThunk('getUser', async () => {
  const response = await localStorage.getItem('user');
  return JSON.parse(response || '');
});

export const logout = createAsyncThunk('logout', async (phone: string, {}) => {
  const ifCurrentUser = await ifUserExists(phone);
  if (ifCurrentUser) {
    await localStorage.removeItem('user');
  }
});

export const registerUser = createAsyncThunk(
  'register',
  async (userInfo: IUserDetails, {getState}) => {
    const state: any = getState();
    if (userInfo.password === userInfo.confirmPassword) {
      const users = await localStorage.getItem('users');
      const mutableUsers = JSON.parse(users || '[]');
      const id = uuid.v4();
      const userExists = await ifUserExists(userInfo.phone);
      if (userExists?.length < 1) {
        const userToken = generateToken(20);
        mutableUsers.push({
          id,
          username: userInfo.username,
          phone: userInfo.phone,
          password: userInfo.password,
        });
        await localStorage.setItem('users', JSON.stringify(mutableUsers));
        console.log({
          id,
          username: userInfo.username,
          phone: userInfo.phone,
          password: userInfo.password,
          token: userToken,
        });
        await localStorage.setItem(
          'user',
          JSON.stringify({
            id,
            username: userInfo.username,
            phone: userInfo.phone,
            password: userInfo.password,
            token: userToken,
          }),
        );
        return {
          ...state.auth.user,
          id,
          username: userInfo.username,
          phone: userInfo.phone,
          password: userInfo.password,
          token: userToken,
        };
      } else {
        return {
          error: 'User account already exists',
        };
      }
    }
  },
);

export const setUserToLocalStorage = createAsyncThunk(
  'user/setUserToLocalStorage',
  async (userObj: any) => {
    if (getPlatform() === 'web') {
      const jsonValue = JSON.stringify(userObj);
      await localStorage.setItem('user', jsonValue);
    }
  },
);

export const removeUserFromLocalStorage = createAsyncThunk(
  'user/removeUserFromLocalStorage',
  async () => {
    if (getPlatform() === 'web') {
      await localStorage.removeItem('user');
    }
  },
);

export const getUserFromLocalStorage = createAsyncThunk(
  'user/getUserFromLocalStorage',
  async () => {
    if (getPlatform() === 'web') {
      const jsonValue = await localStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
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
    resetError(state: AuthInitialState) {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logInUser.pending, state => {
        state.loading = false;
      })
      .addCase(
        logInUser.fulfilled,
        (state, {payload}: PayloadAction<LogInUserPayload>) => {
          if (!payload.error) {
            state.loading = false;
            state.user.id = payload.id;
            state.user.username = payload.username;
            state.user.phone = payload.phone;
            state.user.token = payload.token;
          } else {
            state.loading = false;
            state.user.id = '';
            state.user.username = '';
            state.user.phone = '';
            state.user.token = null;
            state.error = payload.error;
          }
        },
      )
      .addCase(logInUser.rejected, state => {
        state.loading = false;
        state.error = 'Please check your credentials';
      })
      .addCase(registerUser.pending, state => {
        state.loading = false;
      })
      .addCase(
        registerUser.fulfilled,
        (state, {payload}: PayloadAction<RegisterUserPayload>) => {
          state.loading = false;
          if (!payload.error) {
            state.loading = false;
            state.user.id = payload.id;
            state.user.username = payload.username;
            state.user.phone = payload.phone;
            state.user.token = payload.token;
          } else {
            state.error = payload.error;
          }
        },
      )
      .addCase(registerUser.rejected, state => {
        state.loading;
      })
      .addCase(getUser.pending, state => {
        state.loading = false;
      })
      .addCase(
        getUser.fulfilled,
        (state, {payload}: PayloadAction<LogInUserPayload>) => {
          state.loading = false;
          state.user.id = payload.id;
          state.user.phone = payload.phone;
          state.user.username = payload.username;
          state.user.token = payload.token;
        },
      )
      .addCase(getUser.rejected, state => {
        state.loading = false;
      })
      .addCase(logout.pending, state => {
        state.loading = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user.id = '';
        state.user.phone = '';
        state.user.token = null;
        state.user.username = '';
        state.loading = false;
      })
      .addCase(logout.rejected, state => {
        state.loading = false;
        state.error = 'An error occurred';
      });
    builder.addCase(getUserFromLocalStorage.fulfilled, (state, action) => {
      if (action.payload === null) {
        state.loading = true;
      } else {
        state.user.id = action.payload._id;
        state.user.token = action.payload.token;
        state.user.phone = action.payload.phone;
        state.user.username = action.payload.username;
        state.loading = false;
        state.error = '';
      }
    });
    builder.addCase(getUserFromLocalStorage.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(getUserFromLocalStorage.rejected, state => {
      state.loading = false;
      state.error = 'Error';
    });
    builder.addCase(removeUserFromLocalStorage.fulfilled, state => {
      state.user.id = '';
      state.user.token = null;
      state.user.phone = '';
      state.user.username = '';
      state.loading = false;
      state.error = '';
    });
    builder.addCase(removeUserFromLocalStorage.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(removeUserFromLocalStorage.rejected, state => {
      state.loading = false;
      state.error = 'Error';
    });
    builder.addCase(setUserToLocalStorage.fulfilled, state => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(setUserToLocalStorage.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(setUserToLocalStorage.rejected, state => {
      state.loading = false;
      state.error = 'Error';
    });
  },
});

export const {setInitialUsers, resetError} = authSlice.actions;
export const authReducer = authSlice.reducer;
