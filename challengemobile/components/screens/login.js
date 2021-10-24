import React,{
    useState, useEffect} from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Alert,
    Image,
    TouchableOpacity
  } from 'react-native'




const makelogin = (article,userPassword,props) => {
  if (article === {}){
    Alert.alert(
      "Aviso",
      "Usuario ou senha invalidos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  else if (userPassword === article[Object.keys(article)[0]]['password']){
    props.navigation.navigate('Main',{
      userId : Object.keys(article)[0],
      nome : article[Object.keys(article)[0]]['name'],
      email : article[Object.keys(article)[0]]['email'],
      password : article[Object.keys(article)[0]]['password']
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

function getUser(userMail,userPassword,props) {
  
  fetch('https://mobile-challenge-api.herokuapp.com/api/firebasestorage/get_user/?' + new URLSearchParams({
    email: userMail
}), {
  method:'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  })
  .then(resp => resp.json())
  .then(article => {
    makelogin(article,userPassword,props)
  })
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

          <TouchableOpacity style = {styles.botao} onPress={() => {getUser(useremail,password,props)}}>
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