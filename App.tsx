import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/auth/Login/LoginScreen';
import RegisterScreen from './screens/auth/Register/RegisterScreen';
import MealScreen from './screens/other/MealScreen';
import {accentColor, bgColor, defaultFontWeight} from './styles/GlobalStyles';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: bgColor,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: accentColor,
            fontWeight: defaultFontWeight,
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Meals'}}
        />
        <Stack.Screen
          name="Meal"
          component={MealScreen}
          options={{title: 'Customize'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
