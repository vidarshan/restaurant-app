import {StyleSheet} from 'react-native';
import {cardbgColor, fontColor} from './GlobalStyles';

export const customInput = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: cardbgColor,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    color: fontColor,
    marginTop: 10,
    marginBottom: 10,
  },
});
