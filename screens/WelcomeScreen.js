import React, {Component } from "react";
 import { Platform, StyleSheet, View, Text,  ImageBackground,ScrollView,SafeAreaView,Dimensions,
 Image, TouchableOpacity, Alert } from 'react-native';
 import { FontAwesome } from "@expo/vector-icons";
 import { createStackNavigator, createAppContainer } from "react-navigation";


 import { Avatar, Button, Card, Title, Paragraph,TextInput } from 'react-native-paper';

 export default class Myapp extends Component
{ 
   constructor(){  
     super();  
     this.state={  
     isVisible : true,
     hidePassword: false 
      }
 
  }  
  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
}
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render()  
    {  
      
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <ImageBackground source={require("../assets/welcome.jpeg")}      style={{width:"100%", height: '100%', resizeMode:'stretch'}} />  
                </View>  
             </View> )  
             const screenHeight = Dimensions.get('window').height
         return(  
           
        
<View style={{height:'100%',width:'100%', backgroundColor:'#fff'}}>
<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
                <Image source={require("../assets/login.jpeg")}      style={{ width:"100%",
              height: '50%', resizeMode: 'stretch'}} /> 
               <Card style = { styles.card }>
                 
               <Image
        style={{
          height: 130,
          width: 130,
          bottom: 20,
          left:110,
          top:40,
        }}
        source={require("../assets/Icon1.png")}
      ></Image>
     
      <View >
      <Text style={styles.phone}>Phone Number</Text>

        <TextInput       
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={""}
          style={styles.textBox} />
              <Text style={styles.pass}>password</Text>

          <TextInput underlineColorAndroid="transparent" secureTextEntry={this.state.hidePassword} style={styles.textBox1} />
          <TouchableOpacity  style={styles.touachableButton} onPress={this.setPasswordVisibility}>
          <FontAwesome name={(this.state.hidePassword)? 'eye' : 'eye-slash'} size={24} color="black" />
          </TouchableOpacity>
          
        </View>
        <View style={styles.forgotPassword}>
        <TouchableOpacity style={styles.forgotPassword1}
          onPress={() => this.props.navigation.navigate("login")}
        >
          <Text >Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity  style={styles.btnLogin}
       onPress={() => this.props.navigation.navigate("product")}
>
        <Text style={styles.text}>SIGN IN</Text>
      </TouchableOpacity>
     
               </Card>
              
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            
          </ScrollView>
          {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                } 
          </View>
        
              
            
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {         

        flex: 1, 
        height:"100%",
        position:"absolute"

    },  
   
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
          
        position: 'absolute',  
        width: '100%',  
        height: '100%',  

      },  
   
    SplashScreen_ChildView:  
    {  
       
        width: '100%',
        height: '100%',
    
    },  
  
  

    
    btneye: {
      position: "absolute",
      top: 550,
      right: 37,
    },
    btnLogin: {
     
      // backgroundColor: "#432577",
      backgroundColor:"#ffa500"  ,
          justifyContent: "center",
      marginTop: 30,
      marginLeft: 70,

      top: 80,
      borderBottomWidth: 1,
      borderColor:"#fff",
      borderStyle: "solid",
      borderWidth: 2,
      width: 180,
    
      height: 50,
    },
    label1: {
        position: "absolute",
        marginTop:30,
        marginLeft:180,
      //color: "darkblue",
     alignItems:"flex-end"
  
  
    },
    
      text: {
        color: "#fff",
        fontSize: 21,
        textAlign: "center",
        fontWeight: "bold",
      },
   
    textBoxContainer: {
      position: 'relative',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    card:{
      position: 'relative',

      shadowColor: "#000",
      margin: "3%" ,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.12,
      shadowRadius: 30,
      top:-70,
      height:"100%"

    },
    phone:{
      marginLeft:15,

      top:66,
color:"#ffa500"
    },
    pass:{
      marginLeft:15,
      top:76,
color:"#ffa500"
    },
    textBox: {
      shadowColor: "#000",
      margin: "3%" ,
      shadowOpacity: 0.1,
      shadowRadius: 3,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 6,
top:66,
      fontSize: 20,
      height: 45,
      paddingRight: 45,
      paddingLeft: 8,
      paddingVertical: 0,
      backgroundColor: '#fff',
    // backgroundColor:"#FFFF",
    borderBottomWidth : 2,
borderBottomColor:"#ffa500",
    color: '#fff',
    borderColor:"#fff"
    
    },
    textBox1: {
      shadowColor: "#000",
      margin: "3%" ,
      shadowOffset: {
        width: 10,
        height: 10,
      },      elevation: 6,

      
      shadowOpacity: 0.1,
      shadowRadius: 60,
top:76,
      fontSize: 20,
      height: 45,
      paddingRight: 45,
      paddingLeft: 8,
      paddingVertical: 0,
      backgroundColor: '#fff',
    // backgroundColor:"#FFFF",
    borderBottomWidth : 2,
borderBottomColor:"#ffa500",
    color: '#fff',
    borderColor:"#fff"
    
    },
   
    touachableButton: {
      position: 'absolute',
      right: 9,
      height: 40,
      width: 35,
      padding: 2,
      bottom:-70,
      shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.5,
   shadowRadius: 2,
   elevation: 6,
     
    },
    
    label: {
      fontSize: 26,
      color: "#808080",
      fontWeight: "bold",
      right: -89,
      bottom: 40,
      position: "absolute",
    },
    forgotPassword1: {     top:80, marginLeft:215

  },
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  }, 
});