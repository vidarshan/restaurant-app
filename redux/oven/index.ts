import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrder} from './models';

const mealsSlice = createSlice({
  name: 'oven',
  initialState: {
    ovenList: [] as IOrder[],
  },
  reducers: {
    addToOven(state, action: PayloadAction<IOrder>) {
      state.ovenList.push(action.payload);
    },
  },
});

export const {addToOven} = mealsSlice.actions;
export default mealsSlice.reducer;
