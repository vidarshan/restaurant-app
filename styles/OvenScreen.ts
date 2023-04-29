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
  noItemsText: {
    marginTop: 10,
    textAlign: 'center',
    color: accentColor,
    fontWeight: defaultFontWeight,
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
