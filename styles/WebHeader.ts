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
  backContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    height: 60,
    marginBottom: 10,
    backgroundColor: bgColor,
  },
  badgeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -4,
    left: 5,
    width: 15,
    height: 15,
    borderRadius: 500,
    backgroundColor: '#eb4034',
  },
  badgeText: {
    color: '#fff',
  },
});
