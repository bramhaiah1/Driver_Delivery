import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,TextInput,TouchableOpacity,Modal
  
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';

import { Avatar } from 'react-native-elements';
import { Entypo } from "@expo/vector-icons";

import ItemShopingCart from '../components/ItemShoppingCart';
import Map from '../Screens1/TrackCreateScreen'
class ChangePassword2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show:false,
          isvisible:true
        };}
  setShow = () =>{
    this.setState({isvisible:!this.state.isvisible})
    }
  
  render() {
    const { cartItems, total } = this.props;
    return (
      <View visible={this.state.isvisible}  style={ { flex:1,backgroundColor:"grey"}}>
          <Modal animationType="slide" visible={this.state.isvisible}   height="100%"  width="100%" backgroundColor='black'
transparent={true}>  
            <TouchableOpacity onPress={()=>this.setShow()} style={{  flex:1,justifyContent:"center",alignItems:"center"}}>
            </TouchableOpacity>
            <View style={{height:"30%", width:"70%",justifyContent:"center",alignItems:"center",top:-199,marginLeft:60,
          backgroundColor:"#fff"}}>
            <TouchableOpacity style={{top:-90,marginLeft:200}} onPress={()=>this.setShow()}>
            <FontAwesome5Icon name="times" color="#ffa500" size={20} />
            </TouchableOpacity>
</View> 
            
         </Modal>
       
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.carts.items,
  total: state.carts.total,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  container1: {
    height:"50%",
    width:"100%",
    elevation:55

  },
  sectionTitle: {
    fontSize: 24,
  },
  total: { 
    padding: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 44,
    marginBottom: 4,
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
    elevation: 0,
top:-190,
    fontSize: 20,
    height: "40%",
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
  borderBottomWidth : 2,
  color: '#fff',
  borderColor:"#fff"
  
  },
  textBox1: {
    shadowColor: "#000",
    
    
    
top:-20,
    fontSize: 20,
    height: 55,
    backgroundColor: '#DCDCDC',
    paddingLeft:8,
  // backgroundColor:"#FFFF",
  borderBottomWidth : 2,
  color: 'black',
  fontWeight:"bold",
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
 elevation: 0,
   
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
profileHeaderLine: {
  height: 1,
  backgroundColor: "#DCDCDC",
  marginTop: 20,
  
},
text1:{
  fontSize:20,
fontWeight:"bold",
marginLeft:20
,
marginRight:82},
text2:{
  color:"#A9A9A9",
  marginLeft:16
  ,
  top:9,
},
text3:{
  marginLeft:280
  ,    fontSize:16,

  top:-10,
  fontWeight:"bold",
},
text4:{
    color:"#A9A9A9",

  marginLeft:20,
  fontSize:16,
  top:20
  ,
},
text5:{
    marginLeft:280
    ,
    top:-1,
    fontWeight:"bold",
    fontSize:16,

},

text6:{
    top:8,
    marginLeft:20,
fontSize:19,
    fontWeight:"bold",

},

text7:{
    color:"#A9A9A9",
    fontSize:16,

  marginLeft:20,
  top:15
},
pic:{
marginLeft:260,
top:-38
},
});

export default withNavigation(ChangePassword2);