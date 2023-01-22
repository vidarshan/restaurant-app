import {StyleSheet} from 'react-native';
import {bgColor, cardbgColor, fontColor} from './GlobalStyles';

export const homeStyles = (props?: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: bgColor,
    },
    searchListContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 'auto',
      backgroundColor: cardbgColor,
      borderRadius: 8,
      margin: 5,
      paddingLeft: 10,
    },
    searchBar: {
      flex: 1,
      backgroundColor: cardbgColor,
      borderRadius: 8,
      padding: 10,
      color: 'white',
    },
    scrollCategories: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      overflow: 'scroll',
    },
    chip: {
      backgroundColor: cardbgColor,
      padding: 8,
      margin: 3,
      borderRadius: 8,
    },
    chipText: {color: fontColor},
    item: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
      flexDirection: 'row',
      margin: 6,
      padding: 10,
      borderRadius: 8,
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      fontSize: 16,
      fontWeight: '500',
      color: fontColor,
    },
    image: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
    },
    veganIcon: {
      color: 'green',
    },
    veganIconContainer: {
      alignItems: 'flex-end',
    },
    veganIconBorder: {
      borderColor: props,
      borderWidth: 1,
      padding: 1,
    },
  });
