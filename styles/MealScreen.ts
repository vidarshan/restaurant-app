import {StyleSheet} from 'react-native';
import {
  accentColor,
  bgColor,
  cardbgColor,
  defaultFontWeight,
  fontColor,
  largerFontSize,
  rowTopMargin,
} from './GlobalStyles';

export const mealScreenStyles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    maxHeight: '100%',
  },
  mealScreen: {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: bgColor,
  },
  img: {
    flex: 4,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {fontSize: 24, color: fontColor, fontWeight: '500'},
  subTitle: {
    color: fontColor,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  imgContainer: {flexDirection: 'row', alignItems: 'flex-start'},
  btnText: {
    textAlign: 'center',
    fontSize: largerFontSize,
    color: bgColor,
    fontWeight: defaultFontWeight,
  },
  btn: {
    marginTop: rowTopMargin,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: accentColor,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    marginLeft: 10,
  },
  qtyBtn: {
    backgroundColor: accentColor,
    padding: 10,
    borderRadius: 8,
  },
  qtyText: {
    color: fontColor,
    padding: 10,
    borderRadius: 8,
    fontWeight: '700',
    fontSize: largerFontSize,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: rowTopMargin,
  },
  optionRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  optionBtn: {
    backgroundColor: cardbgColor,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    flex: 1,
  },
  optionText: {
    color: fontColor,
    fontWeight: '500',
  },
  optionPriceText: {
    fontSize: 12,
    fontWeight: '500',
    color: fontColor,
  },
  selectedIcon: {
    marginRight: 4,
  },
  addOnRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowMargin: {
    marginTop: rowTopMargin,
  },
  orderVeganText: {
    color: fontColor,
  },
  summaryRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  addToOvenQty: {
    flex: 1,
    flexDirection: 'row',
  },
});
