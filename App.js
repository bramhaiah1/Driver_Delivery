import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import { Avatar } from 'react-native-elements';

import {
  SafeAreaView, StyleSheet, ScrollView,Image
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import ItemCard from './components/ItemCard';


import WelcomeScreen from './screens/WelcomeScreen'
import Fontisto from "react-native-vector-icons/Fontisto";
import MyProfile from "./screens/MyProfile"
 import { MaterialIcons } from '@expo/vector-icons';
 import Icon from "react-native-vector-icons/FontAwesome5";
 import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

 import NavigationDrawerHeader from "./components/NavigationDrawerHeader";

import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen'
import Logout from './screens/Logout'
import ChangePassword from './screens/ChangePassword'
import MyEarnings from './screens/MyEarnings'


import { View ,Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const LoginModule = createStackNavigator(
  {
    
    welcome: {
      screen: WelcomeScreen,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    
    },
    login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
headerTitle:"FORGOT PASSWORD" , 
headerTintColor:"#fff" ,   
headerStyle: {
  backgroundColor: '#ffa500'
},
      }),
    },
    ItemCard: {
      screen: ItemCard,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
  },
   
    product: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
        headerTitle: "Product",
        headerTitleAlign:"center",
        headerTintColor:"#fff" ,   

        headerStyle: {
          backgroundColor: '#ffa500'
        },
       
      }),
    },
    
}
);
const MyProfile1 = createStackNavigator(
  {
    MyEarnings: {
      screen: MyProfile,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
  },
  
);
const MyEarnings1 = createStackNavigator(
  {
    MyEarnings: {
      screen: MyEarnings,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
  },
  
);

const ChangePassword1 = createStackNavigator(
  {
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
   
  },
  
);

const Logout1 = createStackNavigator(
  {
    Logout: {
      screen: Logout,
      navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
    },
   
   
  },
  
);
const AppNavigator = createDrawerNavigator({
 
  InitialPage:{
    screen:LoginModule,
    navigationOptions: ({navigation}) => {
      return {
          drawerLabel: () => null,
      }
  
    
    },
  },
  MyProfile:{
    screen:MyProfile1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="user-alt" size={20}  />
      }
    
    },
  },
 
  MyEarnings:{
    screen:MyEarnings1,
   navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="money-bill-wave" size={20}  />
      }
    
    },
  },
  ChangePassword: {
    screen: ChangePassword1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="key" size={20}  />
      }
    
    },
       
  },
  Logout: {
    screen: Logout1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="power-off" size={20}  />
      }
    
    },
  },
  
},
 
{
  contentComponent: (props) => (
    <SafeAreaView>
      <View style={stylesSidebar.sideMenuContainer}>
        <View style={stylesSidebar.profileHeader}>
          <View style={stylesSidebar.pic}>
          <Avatar
         
            size="large"
            rounded

  
  source={require("./assets/WelcomePage.jpg")}

/></View>
          
         
          <Text style={stylesSidebar.profileHeaderText}>CAROLINE MATHEW</Text>
          <Text style={stylesSidebar.profileHeaderText}>+91-7330823180</Text>

        </View>

        
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
                color: "white",
                backgroundColor: "white",
              }}
            >
              <DrawerItems {...props} /></View>
          </ScrollView></View></View>
    </SafeAreaView>

  )
 
},
defaultOptionsForStack
);
const defaultOptionsForStack = {
  defaultNavigationOptions: {
   headerShown:true,
   headerTitle:"sssss",
    headerStyle: {
      backgroundColor: "#44bcd8",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: "#FFFFFF",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#FFFFFF",
      fontSize: 18,
    },
  },
};
const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",

    backgroundColor: "white",
    paddingTop: 0,


    color: "rgb(0,0,0)",
  },
  imageali: {
    borderRadius: 20,
    height: 5,
    width: 5,
    margin:15,
    top:15,
    
  },
  
  profileHeader: {
  
   
    backgroundColor: "#ffa500",

    height:180,
  },
  profileHeaderPicCircle: {
    width: 70,
    height: 70,
    borderRadius: 80 / 2,
    color: "rgb(0,0,0)",
    backgroundColor: "#ffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "#fff",
    top:58,
    right:0,
    marginLeft:"6%",
    fontWeight: "bold",
  },
  pic:{
    top:50,
    marginLeft:"6%"
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "rgb(0,0,0)",
    marginTop: 15,
    marginBottom: 10,
  },
});
AppNavigator.navigationOptions = ({ navigation }) => {return {
  headerShown:true
}}


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer