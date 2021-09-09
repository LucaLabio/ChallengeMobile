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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./components/screens/login";


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer style = {styles.screen}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{title : "Login"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen : {
    padding : 16,
    backgroundColor : '#CBD4D6'
  },
  input : {
    borderColor : "#000",
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius : 5,
    marginBottom : 10,
    fontSize: 17
  },
  textmargin : {
    marginBottom : 10,
    fontSize: 20
  },
  warning : {
    marginTop : 5,
    fontSize: 12,
    color : "#777"
  }
})

export default App