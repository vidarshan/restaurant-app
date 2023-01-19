import {StyleSheet} from 'react-native';

export const homeStyles = (props?: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
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
      color: '#686868',
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
