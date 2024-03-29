import {StyleSheet} from 'react-native';
import {
  accentColor,
  bgColor,
  dangerColor,
  unselectedStar,
} from './GlobalStyles';

export const customButtonStyles = StyleSheet.create({
  defaultBtn: {
    backgroundColor: accentColor,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  dangerBtn: {
    backgroundColor: dangerColor,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  invertedBtn: {
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  defaultText: {
    color: bgColor,
    textAlign: 'center',
    fontWeight: '600',
  },
  invertedText: {
    color: accentColor,
    textAlign: 'center',
    fontWeight: '600',
  },
  disabledBtn: {
    backgroundColor: unselectedStar,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
});
