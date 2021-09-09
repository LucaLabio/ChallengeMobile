import React,{
    useState} from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    TextInput,
    Alert,
    Image
  } from 'react-native'
const deslogar = (props) => {
    props.navigation.navigate('Login')
  }

const MainConfig  = ( props ) => {
    return (
        <View style = {styles.screen}>
            <Image source={require('../images/Meowylogo.png')} style = {styles.logo} />
            <Text style = {styles.textmargin}>Nome: {props.route.params.name}</Text>
            
            <Text style = {styles.textmargin}>Email: {props.route.params.email}</Text>

            <Text style = {styles.textmargin}>Senha: {props.route.params.password}</Text>
            
            <Text style = {styles.textmargin}>Ativar notificacoes:</Text>

            <Text style = {styles.textmargin}>Notificacao de agua:</Text>

            <TouchableOpacity style = {styles.botao} onPress={() => {deslogar(props)}}>
                    <Text style = {styles.insidetext}>Sair</Text>
            </TouchableOpacity>

            <Text style = {styles.createaccount}>*Esta nao sera a versao final da nossa tela*</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
      padding : 16
    },
    logo : {
        height: 150,
        width: 250,
        alignSelf: 'center'
      },
      insidetext : {
        fontSize: 17,
        color: "#FFF"
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
      alignItems: "center",
      alignSelf: 'center',
      width: 150,
      marginTop : 30,
      borderRadius: 10,
      backgroundColor:"#BD5050",
      padding: 10,
      marginBottom:100,
    },
    createaccount : {
        marginBottom : 10,
        fontSize: 15,
        alignSelf: 'center'
    },
})

export default MainConfig