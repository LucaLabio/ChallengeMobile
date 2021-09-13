import React,{
  useEffect,
    useState} from 'react'
import {
    Button,
    Text,
    StyleSheet,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ActivityIndicator
  } from 'react-native'
import {read } from '../../BD'


const MainCats = ( props ) => {
  const email = props.route.params.email

  const data = [{name:"Senhor Gato",racecategory:"Gato manhoso",wheightcategory:"2KG",sexcategory:"Masculino",birthdaycategory:"02/03/2015"}]

      return (
        <View style = {styles.screen} >
          <Text style = {styles.createaccount} onPress={() => {props.navigation.navigate('RegisterCat',{
            nome : null,
            email: email
          })}}>+ Adicionar Gatinho</Text>
          <SafeAreaView>
            <FlatList data={data} keyExtractor={item => item.name} renderItem={({ item }) => {
              return (
              <View style={styles.Box}>
                <Text style={styles.nametext}>{item.name}</Text>
                <View style={styles.row}>
                  <Text style={styles.maintext}>Raça</Text>
                  <Text style={styles.category}>{item.racecategory}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.maintext}>Peso:</Text>
                  <Text style={styles.category}>{item.wheightcategory}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.maintext}>Sexo</Text>
                  <Text style={styles.category}>{item.sexcategory}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.maintext}>Data Nascimento</Text>
                  <Text style={styles.category}>{item.birthdaycategory}</Text>
                </View>
                <View style={styles.buttonrow}>
                <TouchableOpacity style = {styles.leftbutton} onPress={() => Alert.alert("Aviso","Esta funcionalidade ainda nao foi implementada",[{ text: "OK"}])}>
                  <Text style = {styles.insidetext}>-Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.rightbutton} onPress={() => Alert.alert("Aviso","Esta funcionalidade ainda nao foi implementada",[{ text: "OK"}])}>
                  <Text style = {styles.insidetext}>X Apagar</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          
        );
        
      }}
  />
        </SafeAreaView>
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
    warning : {
      marginTop : 5,
      fontSize: 12,
      color : "#777"
    },
    createaccount : {
      marginVertical : 10,
      fontSize: 25,
      color: "#000",
      alignSelf:"center"
    },
    Box : {
      backgroundColor: "#FFF",
      borderRadius: 10,
      marginHorizontal:10,
      marginVertical:20
    },
    maintext:{
      marginLeft:20,
      fontSize:20,
      color:"#000",
    },
    insidetext : {
      fontSize: 17,
      color: "#FFF"
    },

    nametext:{
      marginHorizontal:20,
      marginVertical:15,
      fontSize:30,
      color:"#000",
      alignSelf:"center",
      
    },
    category:{
      marginRight:20,
      fontSize:20,
      color:"#000",
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent:"space-between"
    },
    buttonrow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent:"center",
      marginVertical:20
    },
    leftbutton:{
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
      paddingTop: 7,
      marginTop: 10,
      alignItems: "center",
      alignSelf: 'center',
      height:40,
      width: 100,
      backgroundColor:"#C96D1A"
    },
    rightbutton:{
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      paddingTop: 7,
      marginTop: 10,
      alignItems: "center",
      alignSelf: 'center',
      height:40,
      width: 100,
      backgroundColor:"#C96D1A"
    },
    insidetext : {
      fontSize: 17,
      color: "#FFF",
    },
    disclaimer : {
      marginBottom : 10,
      fontSize: 15,
      alignSelf: 'center'
    },
})

export default MainCats