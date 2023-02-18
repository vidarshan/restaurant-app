import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrder, OvenInitialState} from './models';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getOven = createAsyncThunk('getOven', async () => {
  const response = await AsyncStorage.getItem('@oven');
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

export const addOrdertoOven = createAsyncThunk(
  'addToOven',
  async (orderInfo: IOrder, {}) => {
    try {
      const ovenList = await AsyncStorage.getItem('@oven');
      const mutableOvenList = JSON.parse(ovenList || '[]');
      mutableOvenList.push(orderInfo);
      await AsyncStorage.setItem('@oven', JSON.stringify(mutableOvenList));
      return {
        list: mutableOvenList,
      };
    } catch (err) {
      console.log(err);
    }
  },
);

export const removeOrderFromOven = createAsyncThunk(
  'removeFromOven',
  async (orderId: string, {}) => {
    try {
      const ovenList = await AsyncStorage.getItem('@oven');
      const mutableOvenList = JSON.parse(ovenList || '[]');
      const newOvenListWithoutItem = mutableOvenList.filter((order: IOrder) => {
        return order.id !== orderId;
      });
      await AsyncStorage.setItem(
        '@oven',
        JSON.stringify(newOvenListWithoutItem),
      );
      return {
        list: newOvenListWithoutItem,
      };
    } catch (err) {
      console.log(err);
    }
  },
);

const initialState = {
  ovenList: [] as IOrder[],
  loading: false,
  error: '',
} as OvenInitialState;

const mealsSlice = createSlice({
  name: 'oven',
  initialState,
  reducers: {
    addToOven(state, action: PayloadAction<IOrder>) {
      const newOrderObj = {
        id: uuid.v4(),
        status: action.payload.status,
        image: action.payload.image,
        name: action.payload.name,
        size: action.payload.size,
        addons: action.payload.addons,
        quantity: action.payload.quantity,
        price: action.payload.price,
      };
      state.ovenList.push(newOrderObj);
    },
    removeFromOven(state, action: PayloadAction<any>) {
      state.ovenList = state.ovenList.filter(ovenItem => {
        return ovenItem.id !== action.payload;
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOven.pending, state => {
        state.loading = false;
      })
      .addCase(getOven.fulfilled, (state, {payload}: PayloadAction<any>) => {
        state.loading = false;
        state.ovenList = payload.list;
      })
      .addCase(getOven.rejected, state => {
        state.loading = false;
        state.error = 'An error occurred';
      })
      .addCase(addOrdertoOven.pending, state => {
        state.loading = false;
      })
      .addCase(addOrdertoOven.fulfilled, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
        state.ovenList = payload.list;
      })
      .addCase(
        addOrdertoOven.rejected,
        (state, {payload}: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload.error;
        },
      )
      .addCase(removeOrderFromOven.pending, state => {
        state.loading = false;
      })
      .addCase(removeOrderFromOven.fulfilled, (state, {payload}) => {
        state.loading = false;
        console.log(payload);
        state.ovenList = payload.list;
      })
      .addCase(
        removeOrderFromOven.rejected,
        (state, {payload}: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload.error;
        },
      );
  },
});

export const {addToOven, removeFromOven} = mealsSlice.actions;
export default mealsSlice.reducer;
