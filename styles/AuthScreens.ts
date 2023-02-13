import {StyleSheet} from 'react-native';
import {
  dangerColor,
  bgColor,
  cardbgColor,
  fontColor,
  viewPadding,
} from './GlobalStyles';

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
  authViewPadding: {
    padding: viewPadding,
  },
  error: {
    color: dangerColor,
    fontWeight: '500',
  },
  input: {
    color: fontColor,
    backgroundColor: cardbgColor,
    borderRadius: 8,
    height: 40,
    paddingLeft: 6,
    marginTop: 10,
    marginBottom: 10,
  },
});
