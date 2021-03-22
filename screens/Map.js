import React, { Component } from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  View,
  Text,
  FlatList,
  StyleSheet,TextInput,TouchableOpacity,Image
} from 'react-native';
import { Avatar } from 'react-native-elements';

import ItemShopingCart from '../components/ItemShoppingCart';

//import Map from '../Screens1/TrackCreateScreen'
class ChangePassword extends Component {

  _keyExtractor = (item, idx) => item.id;

  _renderItem = ({ item }) => (
    <ItemShopingCart item={ item }/>
  );

  render() {
    const { cartItems, total } = this.props;
    return (
      <View style={ styles.container }>


       <View style={ styles.container1 }>

 <Image source={require("../assets/mapt.jpg")}      style={{ width:"100%",
              height: '87%', resizeMode: 'stretch'}} /> 
</View>
<View  style={ styles.textBox }>

<TextInput       
          editable={false}
value={"#Order id 241"}y
  placeholder={"# Orderid -241"}
  style={styles.textBox1} />
          <Text style={styles.text5}>John has picked up your order and on the way to deliver</Text>

          <View style={styles.pic}>
          <Avatar
            size="large"
            

  
  source={require("../assets/driver1.png")}

/>
</View>
<View style={{margin:"5%",alignItems:"flex-start",top:-70

}}>
  <Text style={styles.text6}><FontAwesome5Icon name="map-marker" color="#ffa500" size={18} /> Deliver to -85 Raw street NY city</Text>

</View>
<View style={{margin:"5%",alignItems:"flex-start",top:-90

}}>
  <Text style={styles.text7}><FontAwesome5Icon name="clock" color="#ffa500" size={18} /> Arrival Time-8:30-9:00,27 Feb 2021</Text>

</View>
<View style={{margin:"5%",alignItems:"flex-start",top:-110

}}>
        <Text style={styles.text8}>Cash to Collect-$50.00</Text>

</View>

      

      <View style={styles.profileHeaderLine} />
<View>
  <View
  style={{alignContent:"center",alignItems:"flex-start",top:-10
}}>
  <TouchableOpacity style={{backgroundColor:"#ffa500", justifyContent:"center", alignItems:"center",
alignContent:"center",
marginTop: 30,
margin:"3%",

borderColor:"#ffa500",
       borderStyle: "solid",
       borderWidth: 2,
       height:"33%",
       width:"40%"
      }} 
         
   >
           <Text style={ {color:"#fff",
       fontSize: 16,
       textAlign: "center",fontWeight:"bold",
       }}>CANCEL</Text>
       
      
      </TouchableOpacity>

  </View>
  <View style={{alignItems:"flex-end",top:-133}}>
  <TouchableOpacity style={{backgroundColor:"#ffa500",  justifyContent: "center",
      
      borderBottomWidth: 1,
      borderColor:"#ffa500",
      borderStyle: "solid",
      margin:"3%",
      borderWidth: 1,
      width: "40%",
      height: "35%",}} 
        
  >
          <Text style={ {color:"#fff",
      fontSize: 16,
      textAlign: "center",fontWeight:"bold",
      }}>ORDER PICKUP</Text>
      
     
     </TouchableOpacity>
  </View>
     
</View>
     

</View>
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
    elevation: 6,
top:-50,
    fontSize: 20,
    height: "50%",
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
  borderBottomWidth : 2,
  color: '#fff',
  borderColor:"#fff"
  
  },
  textBox1: {
    shadowColor: "#000",
    
    
margin:"3%"   ,
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
profileHeaderLine: {
  height: 1,
  backgroundColor: "#DCDCDC",
  marginTop: -120,
  
},
text5:{
  color:"#A9A9A9",
marginLeft:20
,
marginRight:82},
text6:{
  color:"#A9A9A9",
  alignItems:"flex-start"
},
text7:{
  color:"#A9A9A9",

  
},
text8:{
  fontWeight:"bold",
  fontSize:17,
  
  
},
pic:{
  alignItems:"flex-end",
top:-50,
margin:"4%"
},
});

export default (ChangePassword);