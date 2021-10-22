import React,{
  useEffect,
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
    RefreshControl
  } from 'react-native'
import {read } from '../../BD'

const deleteCats = (catID) => {
  fetch(`http://10.0.2.2:5000/api/firebasestorage/delete_cat/${catID}` ,{
      method:'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(article => {
      Alert.alert("Aviso","Gato deletado com sucesso, para atualizar a lista, suba ao topo e arraste para baixo",[{ text: "OK"}])
    })

}


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}




const MainCats = ( props ) => {


  const userID =  props.route.params.userId
  const email = props.route.params.email

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    fetch(`http://10.0.2.2:5000/api/firebasestorage/get_cats/${userID}` ,{
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(article => {
      console.log(`article`)
      var catList = [];
      for (const cats of Object.keys(article)) {
        console.log(cats)
        article[cats]['cat_id'] = cats
        catList.push(article[cats])
        console.log(catList)
        
      }
      setData(catList)
    })
  }, []);

  console.log(userID)

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://10.0.2.2:5000/api/firebasestorage/get_cats/${userID}` ,{
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(article => {
      console.log(`article`)
      var catList = [];
      for (const cats of Object.keys(article)) {
        console.log(cats)
        article[cats]['cat_id'] = cats
        catList.push(article[cats])
        console.log(catList)
        
      }
      setData(catList)
    })
  },[])


  
  console.log(data)
      return (
      <SafeAreaView>
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View style = {styles.screen} >
          <Text style = {styles.createaccount} onPress={() => {props.navigation.navigate('RegisterCat',{
            userId : userID
          })}}>+ Adicionar Gatinho</Text>
          <SafeAreaView>
            <FlatList data={data} keyExtractor={item => item.cat_id} renderItem={({ item }) => {
              return (
                <View style={styles.Box}>
                  <Text style={styles.nametext}>{item.name}</Text>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Raça</Text>
                    <Text style={styles.category}>{item.race}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Peso:</Text>
                    <Text style={styles.category}>{item.weight}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Sexo</Text>
                    <Text style={styles.category}>{item.sex}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.maintext}>Data Nascimento</Text>
                    <Text style={styles.category}>{item.birthdate}</Text>
                  </View>
                  <View style={styles.buttonrow}>
                    <TouchableOpacity style = {styles.leftbutton} onPress={() => {props.navigation.navigate('RegisterCat',{
                      nome : item.name,
                      raca : item.race,
                      peso : String(item.weight),
                      sexo : item.sex,
                      data : item.birthdate,
                      userId : userID,
                      catID : item.cat_id
                    })}}>
                      <Text style = {styles.insidetext}>-Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.rightbutton} onPress={() => deleteCats(item.cat_id)}>
                      <Text style = {styles.insidetext}>X Apagar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );}}/>
          </SafeAreaView>
          <Text style = {styles.disclaimer}>*Esta nao sera a versao final da nossa tela*</Text>
        </View>
      </ScrollView>
      </SafeAreaView>
    )}

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