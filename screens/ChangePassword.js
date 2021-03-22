import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

// import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import { Component } from "react";

const LoginScreen = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);




  const _onSignUpPressed = async () => {
    navigation.navigate("product")

    
  };





  return (
    <View style={styles.container}>
      <Image
        style={{
          height: "50%",
          width: 130,
          bottom: 20,
          left:110,
          top:40,
        }}
        source={require("../assets/forgot.jpg")}
      ></Image>
            <Text style={styles.phone}>Enter Password</Text>
            <View >
            <TextInput       
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={""}
          style={styles.textBox} /></View>
    
           <TouchableOpacity  style={styles.btnLogin}
>
        <Text style={styles.text}>RESET PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
 // color: '#fff',
  borderColor:"#fff"
  
  },
  
 
  btneye: {
    position: "absolute",
    top: 20,
    right: 37,
  },
  btnLogin: {
    margin: "3%" ,

    // backgroundColor: "#432577",
    backgroundColor:"#ffa500"  ,
        justifyContent: "center",
    marginTop: 30,
    top: 80,
    borderBottomWidth: 1,
    borderColor:"#fff",
    borderStyle: "solid",
    borderWidth: 2,
    width: "95%",
  
    height: 50,
  },
  
  label1: {
      position: "absolute",
      marginTop:30,
      marginLeft:180,
    //color: "darkblue",
   alignItems:"flex-end"


  },
  phone:{
    marginLeft:15,

    top:66,
color:"#ffa500"
  },
  label1: {
      position: "absolute",
      marginTop:30,
      marginLeft:180,
    color: "darkblue",
   alignItems:"flex-end"


  },
  text: {
    color: "#fff",
    
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },
  
  label: {
    fontSize: 26,
    color: "#ffff",
    fontWeight: "bold",
    right: -89,
    bottom: 40,
    position: "absolute",
  },
  container2: {
    fontSize: 30,
    bottom: 280,
    position: "absolute",
  },
  textlabel: {
    position: "absolute",
    alignItems:"center",
    left:115,
    fontFamily: "sans-serif",

  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
    top: -25,
    right: 10
  },
});
export default LoginScreen;
