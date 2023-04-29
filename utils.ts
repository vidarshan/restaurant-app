import {Platform} from 'react-native';
import {meals} from './data/meals';

export const getPlatform = () => {
  return Platform.OS;
};

export const getMeal = (id: string) => {
  const index = meals.findIndex(x => x.id === id);
  return meals[index];
};
