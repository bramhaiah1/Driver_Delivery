import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const modelScreen = () => {
    return(
        <View style={styles.textBox}> 
            <Text style={styles.text}>Last Delivery</Text>
            <View style={styles.profileHeaderLine} />

            <Text style={styles.text1}><FontAwesome5Icon name="clock" color="#ffa500" size={17} />  09:00 pm</Text>
            <Text style={styles.text2}><FontAwesome5Icon name="map-marker" color="#ffa500" size={17} />  85 Raw street NY city </Text>
            <Text style={styles.text3} >$150.00 </Text>



        </View>
    )
}
const styles = StyleSheet.create({
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
  
        fontSize: 20,
        height: "20%",
        backgroundColor: '#fff',
      // backgroundColor:"#FFFF",
      borderBottomWidth : 2,
      color: '#fff',
      borderColor:"#fff"
      
      },
    text:{
      fontWeight:"bold",
        fontSize:16,
marginLeft:10,
        paddingTop:5,
        
       
    },
    text1:{
          fontSize:16,
       marginLeft:10,
          paddingTop:6,
          color:"#A9A9A9",
         
         
         
      },
      text2:{
        fontSize:16,
     marginLeft:10,
        paddingTop:6,
        color:"#A9A9A9",
       
       
       
    }, text3:{
        fontSize:16,
     marginLeft:270,
        fontWeight:"bold",
       top:-38
       
       
    }
,profileHeaderLine: {
    height: 1,
    backgroundColor: "#DCDCDC",
    marginTop: 5,
    
  },
  
})
export default modelScreen