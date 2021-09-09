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

const MainHome  = ( props ) => {
    
    return (
        <View style = {styles.screen}>
            <Text style = {styles.textmargin}>Ola {props.route.params.name}</Text>
            <Text style = {styles.textmargin}>Esta nao eh a versao final desta tela</Text>
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

export default MainHome