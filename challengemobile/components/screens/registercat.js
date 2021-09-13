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

import { insertObject,read } from '../../BD'

const makecat = async(nome,peso,sexo,raca,data,email,props) => {
    var value = await read(email);
    value = JSON.parse(value)
    console.log("registercat")
    console.log(value)
    console.log(email)
    var obj = value
    if (nome !== null && nome !== "" && peso !== null && peso !== "" && sexo !== null && sexo !== "" && raca !== null && raca !== "" && data !== null && data !== ""){
        obj.push([{  name: nome, race: "Raça:", racecategory: raca,
        wheight: "Peso:",wheightcategory : peso, sex: "Sexo:",
        sexcategory :sexo ,birthday: "Data nascimento:",
        birthdaycategory : data }])

        console.log(obj)

        insertObject(email,obj);

        Alert.alert(
            "Aviso",
            "Gato gerado",
            [
                { text: "OK", onPress: () => props.navigation.goBack() }
            ]
            );
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


const RegisterCat  = ( props ) => {
    
    const [catName, changeNome ] = React.useState(props.route.params.nome===null ? "" : props.route.params.nome);
    const [catPeso, changePeso ] = React.useState(props.route.params.nome===null ? "" : props.route.params.peso);
    const [catSexo, changeSexo ] = React.useState(props.route.params.nome===null ? "" : props.route.params.sexo);
    const [catRaca, changeRaca ] = React.useState(props.route.params.nome===null ? "" : props.route.params.raca);
    const [catData, changeData ] = React.useState(props.route.params.nome===null ? "" : props.route.params.data);
    return (
        <View style = {styles.screen}>
            <TouchableOpacity style = {styles.goback} onPress={() => props.navigation.goBack()}>
                <Image source={require('../images/back.png')} style = {styles.goback} />
            </TouchableOpacity>
            <Image source={require('../images/Meowylogo.png')} style = {styles.logo} />

            <View>
            <View style={styles.row}>
                <Text style={styles.maintext}>Nome:</Text>
                <TextInput disabled={props.route.params.nome===null ? true : false}
                    style = {styles.input}
                    onChangeText={changeNome}
                    value={catName}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.maintext}>Peso:</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={changePeso}
                    value={catPeso}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.maintext}>Sexo:</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={changeSexo}
                    value={catSexo}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.maintext}>Raça:</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={changeRaca}
                    value={catRaca}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.maintext}>Data nascimento:</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={changeData}
                    value={catData}
                />
            </View>
        </View>

        
            
            <TouchableOpacity style = {styles.botao} onPress={() => {makecat(catName,catPeso,catSexo,catRaca,catData,props.route.params.email,props)}}>
                <Text style = {styles.insidetext}>Cadastrar</Text>
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
        marginHorizontal: 10,
        marginBottom : 10,
        fontSize: 17,
        display:"flex",
        flexGrow:1
    },
    textmargin : {
        marginBottom : 10,
        fontSize: 20,
        marginLeft: 15,
    },
    
    maintext:{
    marginLeft:10,
    fontSize:17,
    color:"#000",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems:"center"
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

export default RegisterCat