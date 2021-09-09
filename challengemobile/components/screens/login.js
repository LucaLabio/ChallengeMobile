import React,{
    useState} from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Alert,
    Image,
    TouchableOpacity
  } from 'react-native'
import {read } from '../../BD'


const validateLogin = async(useremail,password,props) => {
    var value = await read(useremail);
    console.log("Login")
    console.log(value)
  if (value !== null){
    value = JSON.parse(value)
    if (password === value[1]){
      props.navigation.navigate('Main',{
        nome : value[0],
        email : useremail,
        password : value[1]
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
    const [useremail, changeEmail] = React.useState("");
    const [password, changePassword] = React.useState("");
    return (
        <View style = {styles.screen}>
          <Image source={require('../images/Meowylogo.png')} style = {styles.logo} />
          <Text style = {styles.header}>Login</Text>
          <Text style = {styles.textmargin}>E-mail</Text>
          <TextInput
              style = {styles.input}
              onChangeText={changeEmail}
              value={useremail}
          />
          <Text style = {styles.textmargin}>Senha</Text>
          <TextInput
              style = {styles.input}
              onChangeText={changePassword}
              value={password}
              secureTextEntry={true}
          />

          <TouchableOpacity style = {styles.botao} onPress={() => {validateLogin(useremail,password,props)}}>
            <Text style = {styles.insidetext}>Entrar</Text>
          </TouchableOpacity>

          <Text style = {styles.createaccount} onPress={() => {props.navigation.navigate('Register')}}>Não possui cadastro?<Text style={styles.createaccountinner}> Cadastre-se</Text></Text>
          <Text style = {styles.createaccountinner} onPress={() => {props.navigation.navigate('Forgot')}}>Esqueci a senha</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
      paddingHorizontal : 26,
    },
    logo : {
      height: 150,
      width: 250,
      alignSelf: 'center'
    },
    header : {
      fontSize: 35,
      alignSelf: 'center',
      marginBottom: 35
    },
    input : {
      backgroundColor: '#FFF',
      borderRadius : 25,
      marginBottom : 10,
      fontSize: 17
    },
    textmargin : {
      marginBottom : 10,
      fontSize: 20,
      marginLeft: 15,
    },
    insidetext : {
      fontSize: 17,
      color: "#FFF"
    },
    botao : {
      alignItems: "center",
      alignSelf: 'center',
      width: 150,
      marginTop : 30,
      borderRadius: 10,
      backgroundColor:"#C96D1A",
      padding: 10,
      marginBottom:100,
    },
    createaccount : {
      marginBottom : 10,
      fontSize: 15,
      alignSelf: 'center'
    },
    createaccountinner : {
      marginBottom : 10,
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf: 'center'
      
    },

})

export default Login