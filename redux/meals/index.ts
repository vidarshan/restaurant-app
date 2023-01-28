import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Meal} from './models';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    mealsList: [] as Meal[],
    categoriesList: [] as string[],
    searchString: '',
  },
  reducers: {
    setMeals(state, action: PayloadAction<Meal[]>) {
      state.mealsList = action.payload;
    },
    setCategories(state, action: PayloadAction<string[]>) {
      state.categoriesList = action.payload;
    },
    searchMeals(state, action: PayloadAction<string>) {
      state.mealsList = state.mealsList.filter(meal =>
        meal.name.includes(action.payload),
      );
    },
  },
});

export const {setMeals, setCategories} = mealsSlice.actions;
export default mealsSlice.reducer;
