import {configureStore} from '@reduxjs/toolkit';
import loginUser from './auth/index';
import setMeals from './meals';

export const store = configureStore({
  reducer: {
    login: loginUser,
    mealsList: setMeals,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
