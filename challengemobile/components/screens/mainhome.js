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

const adminscreen = (username,useremail,props) => {
    console.log(username)
    console.log(useremail)
    if (username === "admin" && useremail ==="admin@admin.com") {
        return <Button title="Go to Admin Screen" onPress={() => props.navigation.navigate('Admin')}></Button>
        }
    }

const MainHome  = ( props ) => {
    const username = props.route.params.name
    const useremail = props.route.params.email

    return (
        <View style = {styles.screen}>
            <Text style = {styles.textmargin}>Ola {props.route.params.name}</Text>
            <Text style = {styles.textmargin}>Esta nao eh a versao final desta tela, apenas um placeholder para o esqueleto ser experimentado</Text>
            {adminscreen(username,useremail,props)}
            <Text style = {styles.disclaimer}>*Esta nao sera a versao final da nossa tela*</Text>
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
    disclaimer : {
        marginBottom : 10,
        fontSize: 15,
        alignSelf: 'center'
      },
})

export default MainHome