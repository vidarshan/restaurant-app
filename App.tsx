import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/auth/Login/LoginScreen';
import RegisterScreen from './screens/auth/Register/RegisterScreen';
import MealScreen from './screens/other/MealScreen';
import {accentColor, bgColor, defaultFontWeight} from './styles/GlobalStyles';
import OvenScreen from './screens/other/OvenScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import {navigationRef} from './RootNavigation';
import * as RootNavigation from './RootNavigation';
import OrderScreen from './screens/other/OrderScreen';
import OrderComplete from './screens/other/OrderCompleteScreen';
import UserScreen from './screens/auth/User/UserScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const token = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerStyle: {
            backgroundColor: bgColor,
          },
          headerTintColor: accentColor,
          headerTitleStyle: {
            color: accentColor,
            fontWeight: defaultFontWeight,
          },
        }}>
        {token ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Meals',
                headerLeft: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => RootNavigation.navigate('User', {})}>
                      <Icon name="user-alt" size={16} color={accentColor} />
                    </TouchableOpacity>
                  );
                },
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => RootNavigation.navigate('Oven', {})}>
                      <Icon name="shopping-bag" size={16} color={accentColor} />
                    </TouchableOpacity>
                  );
                },
              }}
            />
            <Stack.Screen
              name="Meal"
              component={MealScreen}
              options={{title: 'Customize'}}
            />
            <Stack.Screen
              name="Oven"
              component={OvenScreen}
              options={{title: 'Oven'}}
            />
            <Stack.Screen
              name="Order"
              component={OrderScreen}
              options={{title: 'Order'}}
            />
            <Stack.Screen
              options={{headerShown: false, gestureEnabled: false}}
              name="OrderComplete"
              component={OrderComplete}
            />
            <Stack.Screen
              name="User"
              component={UserScreen}
              options={{title: 'Account'}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;