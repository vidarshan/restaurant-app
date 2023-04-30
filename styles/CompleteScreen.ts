import {StyleSheet} from 'react-native';
import {bgColor, fontColor} from './GlobalStyles';

export const completeScreen = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: fontColor,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  subTitle: {
    color: fontColor,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    marginRight: 10,
  },
});
