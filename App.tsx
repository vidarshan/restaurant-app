import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './screens/home/HomeScreen';
// import LoginScreen from './screens/auth/Login/LoginScreen';
// import RegisterScreen from './screens/auth/Register/RegisterScreen';
// import {accentColor, bgColor, defaultFontWeight} from './styles/GlobalStyles';
// import OvenScreen from './screens/other/OvenScreen';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import {TouchableOpacity} from 'react-native';
// import {navigationRef} from './RootNavigation';
// import * as RootNavigation from './RootNavigation';
// import OrderScreen from './screens/other/OrderScreen';
// import OrderComplete from './screens/other/OrderCompleteScreen';
// import UserScreen from './screens/auth/User/UserScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';
// import LoadingScreen from './screens/other/LoadingScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/home/HomeScreen';
import MealScreen from './screens/other/MealScreen';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen navigation={{}} />} />
          <Route path="/meal/:mealId" element={<MealScreen route={{}} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
