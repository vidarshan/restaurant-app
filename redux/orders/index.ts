import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrderItemDetailsPayload} from './models';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getOrders = createAsyncThunk('getOrders', async () => {
  const response = await AsyncStorage.getItem('@orders');
  if (response === null) {
    return {
      list: [],
    };
  } else {
    return {
      list: JSON.parse(response || '[]'),
    };
  }
});

export const addToOrders = createAsyncThunk(
  'addToOven',
  async (orderInfo: IOrderItemDetailsPayload, {}) => {
    try {
      const orderList = await AsyncStorage.getItem('@orders');
      const mutableOrderList = JSON.parse(orderList || '[]');
      mutableOrderList.push(orderInfo);
      await AsyncStorage.setItem('@orders', JSON.stringify(mutableOrderList));
      return {
        list: mutableOrderList,
      };
    } catch (err) {
      console.log(err);
    }
  },
);

const initialState = {
  ordersList: [] as any,
  loading: false,
  error: '',
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, state => {
        state.loading = false;
      })
      .addCase(getOrders.fulfilled, (state, {payload}: PayloadAction<any>) => {
        state.loading = false;
        state.ordersList = payload.list;
      })
      .addCase(getOrders.rejected, state => {
        state.loading = false;
        state.error = 'An error occurred';
      })
      .addCase(addToOrders.pending, state => {
        state.loading = false;
      })
      .addCase(
        addToOrders.fulfilled,
        (state, {payload}: PayloadAction<any>) => {
          state.loading = false;
          state.ordersList = payload.list;
        },
      )
      .addCase(addToOrders.rejected, state => {
        state.loading = false;
        state.error = 'An error occurred';
      });
  },
});

export const {} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
