import {StyleSheet} from 'react-native';
import {
  accentColor,
  avatarBgColor,
  bgColor,
  cardbgColor,
  dangerColor,
  defaultBorderRadius,
  fontColor,
} from './GlobalStyles';

export const accountStyles = StyleSheet.create({
  viewBg: {backgroundColor: bgColor, minHeight: '100vh'},
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
  name: {
    color: fontColor,
    textAlign: 'center',
    marginBottom: 10,
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
  emptyContainer: {
    backgroundColor: cardbgColor,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
  },
  pastCardContainer: {
    backgroundColor: cardbgColor,
    margin: 5,
    borderRadius: 8,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  itemImageColumn: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  itemPrice: {
    color: accentColor,
    fontWeight: '700',
    fontSize: 20,
  },
  detailsColumn: {
    marginLeft: 20,
  },
  nameStatusRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    color: fontColor,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  statusBadgeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  date: {
    color: fontColor,
    marginBottom: 5,
  },
});
