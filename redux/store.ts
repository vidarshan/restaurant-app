import {configureStore} from '@reduxjs/toolkit';
import loginUser from './auth/index';
import setMeals from './meals';
import addToOven from './oven';

export const store = configureStore({
  reducer: {
    login: loginUser,
    mealsList: setMeals,
    oven: addToOven,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
