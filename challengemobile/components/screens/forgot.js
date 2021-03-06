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
import {read,insertObject } from '../../BD'


const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



const validateAccount = (userMail,password,props) => {
  fetch('https://mobile-challenge-api.herokuapp.com/api/firebasestorage/get_user/?' + new URLSearchParams({
      email: userMail
      }), {
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
      }).then(resp => resp.json())
      .then(article => {
        console.log(Object.keys(article)[0])
        if (password !== null && password !== "" && article.toString() !== "{}" && validateEmail(userMail)){
          fetch(`https://mobile-challenge-api.herokuapp.com/api/firebasestorage/update_password/${Object.keys(article)[0]}`, {
            method:'PUT',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          password:password
          })
            })
            .then(article => {
                console.log("ok")
                Alert.alert(
                "Aviso",
                "Senha alterada com sucesso",
                [
                  { text: "OK", onPress: () => props.navigation.navigate('Login') }
                ]
            );
          })
        }
        else{
          Alert.alert(
              "Aviso",
              "Email ou senha invalido",
              [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
              );
        }
        
    })
}
  




const Forgot  = ( props ) => {
    const [useremail, changeEmail] = React.useState("");
    const [password, changePassword] = React.useState("");
    return (
        <View style = {styles.screen}>
          <TouchableOpacity style = {styles.goback} onPress={() => props.navigation.goBack()}>
              <Image source={require('../images/back.png')} style = {styles.goback} />
          </TouchableOpacity>
          <Image source={require('../images/Meowylogo.png')} style = {styles.logo} />
          <Text style = {styles.header}>Esqueci a Senha</Text>
          <Text style = {styles.textmargin}>E-mail</Text>
          <TextInput
              style = {styles.input}
              onChangeText={changeEmail}
              value={useremail}
          />
          <Text style = {styles.textmargin}>Nova senha</Text>
          <TextInput
              style = {styles.input}
              onChangeText={changePassword}
              value={password}
              secureTextEntry={true}
          />

          <TouchableOpacity style = {styles.botao} onPress={() => {validateAccount(useremail,password,props)}}>
            <Text style = {styles.insidetext}>Entrar</Text>
          </TouchableOpacity>
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
    goback : {
        marginTop: 10,
        height:40,
        width: 40,
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
    disclaimer : {
      marginBottom : 10,
      fontSize: 15,
      alignSelf: 'center'
    },
})

export default Forgot