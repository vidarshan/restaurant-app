import React from 'react';
import OvenScreen from './screens/other/OvenScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/home/HomeScreen';
import MealScreen from './screens/other/MealScreen';
import OrderScreen from './screens/other/OrderScreen';
import OrderComplete from './screens/other/OrderCompleteScreen';
import UserScreen from './screens/auth/User/UserScreen';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/oven" element={<OvenScreen />} />
          <Route path="/user" element={<UserScreen />} />
          <Route path="/order" element={<OrderScreen />} />
          <Route path="/orderComplete" element={<OrderComplete />} />
          <Route path="/meal/:mealId" element={<MealScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
