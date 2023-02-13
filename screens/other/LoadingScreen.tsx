import React, {useEffect} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {IOrderScreen} from '../../models/IOrderCard';
import {getUser} from '../../redux/auth';
import {AppDispatch, RootState} from '../../redux/store';
import {accentColor} from '../../styles/GlobalStyles';
import {loadingScreenStyles} from '../../styles/LoadingScreen';

const LoadingScreen: React.FC<IOrderScreen> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    dispatch(getUser());
    if (user.token !== '') {
      navigation.navigate('Home');
    } else {
      navigation.navigate('AuthLogin');
    }
  }, [dispatch, navigation, user]);

  return (
    <SafeAreaView style={loadingScreenStyles.container}>
      <ActivityIndicator size="large" color={accentColor} />
      <Text style={loadingScreenStyles.loadingScreenText}>
        Loading your data
      </Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
