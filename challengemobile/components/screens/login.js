import React,{
    useState} from 'react'
import {
    Button,
    Text,
    StyleSheet,
    View,
    TextInput,
    Alert 
  } from 'react-native'
import {read } from '../../BD'

const validateLogin = async(username,password,props) => {
  var value = await read(username);
  value = await read(username);
  if (value !== null){
    value = JSON.parse(value)
    if (password === value[0]){
      props.navigation.navigate('simpleUser',{
        nome : username,
        email : value[1]
      })
    }
    else{
      Alert.alert(
        "Aviso",
        "Usuario ou senha invalidos",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  }
  else{
    Alert.alert(
      "Aviso",
      "Usuario ou senha invalidos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
}


const Login  = ( props ) => {
    const [username, changeUsername] = React.useState("");
    const [password, changePassword] = React.useState("");
    return (
        <View style = {styles.screen}>
        <Text style = {styles.textmargin}>E-mail</Text>
        <TextInput
            style = {styles.input}
            onChangeText={changeUsername}
            value={username}
        />
        <Text style = {styles.textmargin}>Senha</Text>
        <TextInput
            style = {styles.input}
            onChangeText={changePassword}
            value={password}
            secureTextEntry={true}
        />
        <Button color="#C96D1A" style = {styles.botao} title="Logon" onPress={() => {validateLogin(username,password,props)}}></Button>

        <Text style = {styles.createaccount} onPress={() => {props.navigation.navigate('Register')}}>Ainda nao esta cadastrado? Clique Aqui!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
      padding : 16
    },
    input : {
      borderColor : "#000",
      backgroundColor: '#ffffff',
      borderRadius : 25,
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
    },
    botao : {
        marginTop : 50,
        borderRadius: 10,
        borderWidth: 1,
    },
    createaccount : {
      marginBottom : 10,
      fontSize: 20,
      textDecorationLine: 'underline',
      color : "#387cfc"
    }
})

export default Login