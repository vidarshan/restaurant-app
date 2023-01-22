import {StyleSheet} from 'react-native';
import {
  avatarBgColor,
  bgColor,
  cardbgColor,
  dangerColor,
  defaultBorderRadius,
  fontColor,
} from './GlobalStyles';

export const accountStyles = StyleSheet.create({
  viewBg: {backgroundColor: bgColor, minHeight: '100%'},
  viewContent: {justifyContent: 'center', alignItems: 'center'},
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: avatarBgColor,
    marginTop: 10,
    marginBottom: 20,
  },
  avatarText: {
    color: fontColor,
    fontSize: 24,
  },
  noFlexInput: {
    backgroundColor: cardbgColor,
    borderRadius: 8,
    padding: 10,
    margin: 5,
    color: fontColor,
  },
  dangerBtn: {
    backgroundColor: dangerColor,
    margin: 5,
    padding: 10,
    borderRadius: defaultBorderRadius,
  },
  recentTitle: {
    color: fontColor,
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});
