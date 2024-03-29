import {StyleSheet} from 'react-native';
import {
  accentColor,
  bgColor,
  cardbgColor,
  defaultBorderRadius,
  defaultFontWeight,
  fontColor,
} from './GlobalStyles';

export const ovenScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    minHeight: '100vh',
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
  noItemsText: {
    marginTop: 10,
    textAlign: 'center',
    color: accentColor,
    fontWeight: defaultFontWeight,
  },
  checkoutBtn: {
    backgroundColor: accentColor,
    marginTop: 10,
    padding: 10,
    borderRadius: defaultBorderRadius,
  },
  checkoutText: {
    color: fontColor,
    fontWeight: defaultFontWeight,
    textAlign: 'center',
  },
  iconMargin: {marginRight: 8},
  paymentOption: {
    backgroundColor: cardbgColor,
    padding: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    backgroundColor: cardbgColor,
    borderRadius: 8,
    padding: 10,
    margin: 5,
    color: 'white',
  },
  paymentOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
  },
});
