import React,{
    useState} from 'react'
import {
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    TextInput,
    Alert,
    Image,
    TouchableOpacity
  } from 'react-native'

import { insertObject,read } from '../../BD'

const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
}

const validateAccount = (article,username,password,confirmpassword,email,props) => {

    if (username !== null && username !== "" && password !== null && password !== "" && password === confirmpassword && validateEmail(email) && Object.keys(article).length === 0){
        
        fetch('https://mobile-challenge-api.herokuapp.com/api/firebasestorage/insert_user/', {
            method:'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            name: username,
            email: email,
            password: password
            })
        })
        .then(resp => resp.json())
        .then(article => {
            console.log("ok")
            Alert.alert(
            "Aviso",
            "Usuario criado",
            [
                { text: "OK", onPress: () => props.navigation.navigate('Login') }
            ]
            );
        })
    }
    else if(password != confirmpassword){
        Alert.alert(
            "Aviso",
            "Sua senhas estao diferentes",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
            );
    }
    else{
        Alert.alert(
            "Aviso",
            "Usuario ja existente ou você digitou alguma informação incorretamente",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
            );
    }
}


function getUser(username,password,confirmpassword,userEmail,props) {
  
    fetch('https://mobile-challenge-api.herokuapp.com/api/firebasestorage/get_user/?' + new URLSearchParams({
    email: userEmail
}), {
    method:'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    })
    .then(resp => resp.json())
    .then(article => {
        validateAccount(article,username,password,confirmpassword,userEmail,props)
    })  
  }


const Login  = ( props ) => {
    const [username, changeUsername] = React.useState("");
    const [password, changePassword] = React.useState("");
    const [confirmpassword, changeConfirmPassword] = React.useState("");
    const [email, changeEmail] = React.useState("");
    //podemos passar valores e variaveis pelo . navigate usando .navigate('nome',{itemId:86,otherParams:'asdasdasda'}) 
    return (
        <SafeAreaView>
            <ScrollView>
                <View style = {styles.screen}>
                    <TouchableOpacity style = {styles.goback} onPress={() => props.navigation.goBack()}>
                        <Image source={require('../images/back.png')} style = {styles.goback} />
                    </TouchableOpacity>
                    <Image source={require('../images/Meowylogo.png')} style = {styles.logo} />
                    <Text style = {styles.header}>Cadastro</Text>
                    <Text style = {styles.textmargin}>Digite seu usuario:</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText={changeUsername}
                        value={username}
                    />
                    <Text style = {styles.textmargin}>Digite seu email:</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText={changeEmail}
                        value={email}
                    />
                    <Text style = {styles.textmargin}>Digite sua senha:</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText={changePassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    <Text style = {styles.textmargin}>Confirme sua senha:</Text>
                    <TextInput
                        style = {styles.input}
                        onChangeText={changeConfirmPassword}
                        value={confirmpassword}
                        secureTextEntry={true}
                    />
                    
                    <TouchableOpacity style = {styles.botao} onPress={() => {getUser(username,password,confirmpassword,email,props)}}>
                        <Text style = {styles.insidetext}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
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
      goback : {
        marginTop: 10,
        height:40,
        width: 40,
      },
    header : {
        fontSize: 35,
        alignSelf: 'center',
        marginBottom: 15
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
})

export default Login