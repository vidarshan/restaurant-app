import {StyleSheet} from 'react-native';
import {bgColor} from './GlobalStyles';

export const authStyles = StyleSheet.create({
  authView: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: bgColor,
  },
  iconSpacing: {
    marginBottom: 10,
  },
});
