import React,{
    useState} from 'react'
import {
    Button,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
  } from 'react-native'
import { clear } from '../../BD'

const limpar = async(props) => {
  await clear();
  deslogar(props);
}

const deslogar = (props) => {
  props.navigation.navigate('Login')
}

const buttons = (username,props) => {
  if (username === "fiap") {
    return 
  }
}

const Admin  = ( props,{navigation} ) => {
    
    //podemos passar valores e variaveis pelo . navigate usando .navigate('nome',{itemId:86,otherParams:'asdasdasda'}) 
    return (
        <View style = {styles.screen}>
            <TouchableOpacity style = {styles.goback} onPress={() => props.navigation.goBack()}>
                <Image source={require('../images/back.png')} style = {styles.goback} />
            </TouchableOpacity>
          <Text style = {styles.textmargin}>Seja bem vindo a tela de administrador!</Text>
          <Button title="Limpar dados" onPress={() => {limpar(props)}}></Button>
          <Button title="Sair" onPress={() => {deslogar(props)}}></Button>
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
      borderWidth: 1,
      borderRadius : 5,
      marginBottom : 10,
      fontSize: 17
    },
    textmargin : {
      marginBottom : 10,
      fontSize: 20
    },
    goback : {
        marginTop: 10,
        height:40,
        width: 40,
      },
})

export default Admin