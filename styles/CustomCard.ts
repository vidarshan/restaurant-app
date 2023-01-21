import {StyleSheet} from 'react-native';
import {cardbgColor, fontColor} from './GlobalStyles';

export const customCardStyles = (props?: any) =>
  StyleSheet.create({
    item: {
      backgroundColor: cardbgColor,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
      flexDirection: 'row',
      margin: 6,
      padding: 10,
      borderRadius: 8,
    },
    detailsContainer: {
      flex: 1,
    },
    veganContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#686868',
    },
    image: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginRight: 10,
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
    ratingContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    priceContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    priceText: {
      fontSize: 18,
      fontWeight: '500',
      color: fontColor,
      marginTop: 4,
    },
  });
