import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../pages/signin';
import Register from '../pages/register';
import Home from '../pages/dashboard/home';
import Setting from '../pages/dashboard/setting';
import Profile from '../pages/dashboard/profile';
import Account from '../pages/dashboard/account';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const DashboardBottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown: true
      }}>
        <Stack.Screen name="Dashboard" component={DashboardBottomNavigator} />
        <Stack.Screen name="Sign-in" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator
