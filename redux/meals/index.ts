import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Meal} from './models';
import {meals} from '../../data/meals';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    mealsList: [] as Meal[],
    categoriesList: [] as string[],
    searchString: '',
    selectedCategory: '',
  },
  reducers: {
    setMeals(state, action: PayloadAction<Meal[]>) {
      state.mealsList = action.payload;
    },
    setCategories(state, action: PayloadAction<string[]>) {
      state.categoriesList = action.payload;
    },
    searchMeals(state, action: PayloadAction<string>) {
      state.mealsList = meals.filter(meal => {
        return meal.name.includes(action.payload);
      });
      console.log('mealsList', state.mealsList.length);
    },
    searchCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
      if (action.payload === 'All') {
        state.mealsList = meals;
      } else {
        state.mealsList = meals.filter(meal => {
          return meal.foodType === action.payload;
        });
      }
    },
  },
});

export const {setMeals, setCategories, searchMeals, searchCategory} =
  mealsSlice.actions;
export default mealsSlice.reducer;
