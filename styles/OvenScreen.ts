import {StyleSheet} from 'react-native';
import {
  accentColor,
  bgColor,
  cardbgColor,
  defaultBorderRadius,
  defaultFontWeight,
} from './GlobalStyles';

export const ovenScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    minHeight: '100%',
  },
  item: {
    backgroundColor: cardbgColor,
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    margin: 6,
    padding: 10,
    borderRadius: defaultBorderRadius,
  },
  checkoutBtn: {
    backgroundColor: accentColor,
    margin: 5,
    padding: 10,
    borderRadius: defaultBorderRadius,
  },
  checkoutText: {
    color: bgColor,
    fontWeight: defaultFontWeight,
    textAlign: 'center',
  },
});
