import {configureStore} from '@reduxjs/toolkit';
import setMeals from './meals';
import addToOven from './oven';
import {authReducer} from './auth';
import {orderReducer} from './orders';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mealsList: setMeals,
    oven: addToOven,
    orders: orderReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
