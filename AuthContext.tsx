import * as React from 'react';
import {useAppDispatch, useAppSelector} from './hooks';
import {
  registerUser,
  logInUser,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
} from './redux/auth/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginScreen from './screens/auth/Login/LoginScreen';
import RegisterScreen from './screens/auth/Register/RegisterScreen';
import HomeScreen from './screens/home/HomeScreen';
import OvenScreen from './screens/other/OvenScreen';
import UserScreen from './screens/auth/User/UserScreen';
import OrderScreen from './screens/other/OrderScreen';
import OrderComplete from './screens/other/OrderCompleteScreen';
import MealScreen from './screens/other/MealScreen';

export default function WebAppAuthContext() {
  const dispatch = useAppDispatch();
  const AuthContext = React.createContext({});
  const {user} = useAppSelector(state => state.auth);

  React.useEffect(() => {
    const bootstrapAsync = () => {
      try {
        dispatch(getUserFromLocalStorage());
      } catch (e) {}
    };

    bootstrapAsync();
  }, [dispatch]);

  const authContext = React.useMemo(
    () => ({
      login: async data => {
        dispatch(logInUser(data));
      },
      register: async data => {
        dispatch(registerUser(data));
      },
      logout: () => {
        dispatch(removeUserFromLocalStorage());
      },
    }),
    [dispatch],
  );

  console.log(user);

  return (
    <AuthContext.Provider value={authContext}>
      <Router>
        <Routes>
          {user.token === null ? (
            <>
              <Route path="/" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/oven" element={<OvenScreen />} />
              <Route path="/user" element={<UserScreen />} />
              <Route path="/order" element={<OrderScreen />} />
              <Route path="/orderComplete" element={<OrderComplete />} />
              <Route path="/meal/:mealId" element={<MealScreen />} />
            </>
          )}
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
