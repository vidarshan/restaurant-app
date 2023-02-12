import {StyleSheet} from 'react-native';
import {bgColor, fontColor} from './GlobalStyles';

export const loadingScreenStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: bgColor,
  },
  loadingScreenText: {
    marginTop: 10,
    fontSize: 16,
    color: fontColor,
  },
});
