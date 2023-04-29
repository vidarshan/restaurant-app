import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {meals} from '../../data/meals';
import {IOrder} from '../oven/models';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    mealsList: [] as any[],
    ovenList: [] as IOrder[],
    categoriesList: [] as string[],
    searchString: '',
    selectedCategory: '',
  },
  reducers: {
    setMeals(state, action: PayloadAction<any>) {
      state.mealsList = action.payload;
    },
    setCategories(state, action: PayloadAction<string[]>) {
      state.categoriesList = action.payload;
    },
    searchMeals(state, action: PayloadAction<string>) {
      state.mealsList = meals.filter(meal => {
        return meal.name.includes(action.payload);
      });
    },
    addToOven(state, action: PayloadAction<IOrder>) {
      state.ovenList.push(action.payload);
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

export const {setMeals, addToOven, setCategories, searchMeals, searchCategory} =
  mealsSlice.actions;
export default mealsSlice.reducer;
