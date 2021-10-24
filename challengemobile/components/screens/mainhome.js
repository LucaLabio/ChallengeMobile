import React,{
    useState} from 'react'
import {
  Button,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
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

    const data = [{"data":"22/10/2021","agua":"80ml","ativacoes":"3x","temp":"17ºC"},{"data":"23/10/2021","agua":"53ml","ativacoes":"2x","temp":"20ºC"},{"data":"24/10/2021","agua":"120ml","ativacoes":"4x","temp":"14ºC"}]

    return (
      <SafeAreaView>
        <ScrollView >
          <View style = {styles.screen}>
            <Text style = {styles.header}>Ola, {props.route.params.name}</Text>
            <SafeAreaView>
            <FlatList data={data} keyExtractor={item => item.data} renderItem={({ item }) => {
              return (
                <View style={styles.Box}>
                  <Text style={styles.nametext}>Resumo: </Text>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Dia:</Text>
                    <Text style={styles.category}>{item.data}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Ativações:</Text>
                    <Text style={styles.category}>{item.ativacoes}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Agua Consumida:</Text>
                    <Text style={styles.category}>{item.agua}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Temp. Média da água: </Text>
                    <Text style={styles.category}>{item.temp}</Text>
                  </View>
                </View>
              );}}/>
          </SafeAreaView>
        </View>
        </ScrollView>
      </SafeAreaView>
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
      fontSize: 20,
    },
    disclaimer : {
        marginBottom : 10,
        fontSize: 15,
        alignSelf: 'center'
      },
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
      header : {
        marginBottom : 10,
        fontSize: 35,
        color: '#2596BE'

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
        marginVertical:20,
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
        justifyContent:"space-between",
        marginBottom:20
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

export default MainHome