import React,{
  useState} from 'react';
import {
  Button,
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert 
} from 'react-native';
import { DefaultTheme,NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./components/screens/login";
import Register from "./components/screens/register";
import Main from "./components/screens/main";
import MainCats from "./components/screens/maincats";
import MainHome from "./components/screens/mainhome";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
const navTheme = DefaultTheme;
navTheme.colors.background = '#E5E5E5';

const App = () => {
  return (
    <NavigationContainer  theme={navTheme}>
      <Stack.Navigator initialRouteName="Login" independent={true}>
        <Stack.Screen name="Login" component={Login} options={{title : "Login",headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{title : "Register",headerShown: false}}/>
        <Stack.Screen name="Main" component={Main} options={{title : "Main",headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>    
  )
}


export default App