import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrderItemDetailsPayload} from './models';

export const getOrders = createAsyncThunk('getOrders', async () => {
  const response = await localStorage.getItem('orders');
  console.log('🚀 ~ file: index.ts:6 ~ getOrders ~ response:', response);
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
      const orderList = await localStorage.getItem('orders');
      const mutableOrderList = JSON.parse(orderList || '[]');
      mutableOrderList.push(orderInfo);
      await localStorage.setItem('orders', JSON.stringify(mutableOrderList));
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
