import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IOrder} from './models';
import uuid from 'react-native-uuid';

const mealsSlice = createSlice({
  name: 'oven',
  initialState: {
    ovenList: [] as IOrder[],
  },
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
});

export const {addToOven, removeFromOven} = mealsSlice.actions;
export default mealsSlice.reducer;
