import {StyleSheet} from 'react-native';
import {accentColor, bgColor} from './GlobalStyles';

export const webHeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    height: 60,
    marginBottom: 10,
    backgroundColor: bgColor,
  },
  text: {color: accentColor, fontSize: 18},
});
