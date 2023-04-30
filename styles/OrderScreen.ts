import {StyleSheet} from 'react-native';
import {
  bgColor,
  chipBackgroundColor,
  defaultBorderRadius,
  fontColor,
} from './GlobalStyles';

export const orderScreenStyles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    backgroundColor: bgColor,
    paddingLeft: 10,
    paddingRight: 10,
  },
  chipPriceRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 10,
  },
  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: chipBackgroundColor,
    borderRadius: defaultBorderRadius,
    padding: 5,
  },
  iconMargin: {marginRight: 5},
  chipText: {
    color: fontColor,
    fontWeight: '600',
  },
  imageRow: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 40,
    resizeMode: 'contain',
    height: 40,
    marginRight: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailText: {fontSize: 14, color: fontColor, fontWeight: '500'},
  addOnRow: {flexDirection: 'row', marginTop: 10},
  addOn: {
    backgroundColor: '#3c3c3c',
    marginRight: 10,
    padding: 5,
    borderRadius: 8,
  },
  addOnText: {color: fontColor},
  headerText: {color: fontColor, margin: 0, fontWeight: '500', fontSize: 18},
});
