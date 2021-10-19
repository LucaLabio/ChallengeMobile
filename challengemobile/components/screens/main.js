import React,{
    useState} from 'react'
import {
    Image,
  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainHome from "./mainhome";
import MainCats from "./maincats";
import MainConfig from "./mainconfig";
///{props.route.params.nome}

const Tab = createBottomTabNavigator();



const Main  = ( props ) => {
    const userId = props.route.params.userId
    const username = props.route.params.nome
    const useremail = props.route.params.email
    const password = props.route.params.password

  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: { position: 'absolute' },
      }} initialRouteName="Home">
        
        <Tab.Screen name="Home"
            initialParams={{userId:userId,name: username,email: useremail,password : password}}
            component={MainHome}options={{headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={focused
                    ? require('../images/homeselected.png')
                    : require('../images/home.png')
                    
                }
                style={{
                    marginTop:15,
                    width: 35,
                    height: 35,
                }}
              />
            ),
          }}
        />
        <Tab.Screen name="Cats"
            initialParams={{userId:userId,name: username,email: useremail,password : password}}
            component={MainCats} options={{headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
              source={focused
                ? require('../images/Meowyselected.png')
                : require('../images/Meowy.png')
                }
                style={{
                    marginTop:15,
                    width: 30,
                    height: 30
                }}
              />
            ),
          }}
        />
        <Tab.Screen name="Config" 
            initialParams={{userId:userId,name: username,email: useremail,password : password}}
            component={MainConfig} options={{headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
              source={focused
                ? require('../images/gearselected.png')
                : require('../images/gear.png')
                }
                style={{
                    marginTop:15,
                    width: 40,
                    height: 40
                }}
              />
            ),
          }}
        />
    </Tab.Navigator>
  );
}


export default Main