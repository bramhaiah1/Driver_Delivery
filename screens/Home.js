import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  Image,
  Button,
  TextInput,
  StyleSheet ,TouchableOpacity
} from 'react-native';


import ItemCard from '../components/ItemCard';

class Home extends Component {
  constructor(){  
    super();  
    this.state={  
    color : "#fff",
    backgroundColor: "#ffa500" ,
    show:false
     }

 }  
  static navigationOptions = {
    headerTitle: '',
  }
  
  _changeStyle() {
    
     this.setState({
        color: this.state.backgroundColor,
      backgroundColor: this.state.color,
      show:!this.state.show
    })
  }
  _keyExtractor = (item) => `product_${item.id}`;

  _renderItem = ({item}) => (
  
    
    <ItemCard item={ item } />
  );

  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity style={{backgroundColor:this.state.backgroundColor,  justifyContent: "center",
    marginLeft: 62,

    borderBottomWidth: 1,
    borderColor:this.state.color,
    borderStyle: "solid",
    borderWidth: 1,
    width: 130,
  top:10,
    height: 40,}}     onPress={ () => this._changeStyle() }
      
>
        <Text style={ {color:this.state.color,
    fontSize: 16,
    textAlign: "center",fontWeight:"bold",
    }}>Current Order</Text>
    
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:this.state.color,  justifyContent: "center",
    marginLeft: 190,
top:-30,
    borderBottomWidth: 1,
    borderColor:this.state.backgroundColor,
    borderStyle: "solid",
    borderWidth: 1,
    width: 130,
  
    height: 40,}}     onPress={ () => this._changeStyle() }
      
>
        <Text style={ {color:this.state.backgroundColor,
    fontSize: 16,
    textAlign: "center",fontWeight:"bold",
    }}>Past Orders</Text>
    
      </TouchableOpacity>
     

      {this.state.show ?   <FlatList 
        
          data={ [{ id: 1, name: 'Little Bite Restaurant', price: 7000, image: 'https://doki.co.id/image/cache/data/Handphone/Elephone/s1/Elephone-s1-black-doki-500x500.jpg' },
          { id: 2, name: 'Little Bite Restaurant', price: 7000, image: 'https://doki.co.id/image/cache/data/Handphone/Elephone/s1/Elephone-s1-black-doki-500x500.jpg' },
          { id: 3, name: 'Little Bite Restaurant', price: 7000, image: 'https://doki.co.id/image/cache/data/Handphone/Elephone/s1/Elephone-s1-black-doki-500x500.jpg' },
          { id: 4, name: 'Little Bite Restaurant', price: 7000, image: 'https://doki.co.id/image/cache/data/Handphone/Elephone/s1/Elephone-s1-black-doki-500x500.jpg' },
          { id: 5, name: 'Mr Puff Coffee Shop', price: 700, image: 'https://doki.co.id/image/cache/data/Handphone/Motorola/Moto%20z/Motorola-moto-z-black-500x500.jpg' },
          { id: 6, name: 'Ballroom Restaurant', price: 500, image: 'https://doki.co.id/image/cache/data/Handphone/xiaomi/Note%205A/Redmi-note-5a-Grey-500x500.jpg' },
          { id: 7, name: 'veretto Restaurant', price: 1000, image: 'https://doki.co.id/image/cache/data/Accessories/Tempered Glass/Tempered-Samsung-Galaxy-s8-s8+-500x500h.jpg' },
          { id: 8, name: 'Mr Puff Coffee Shop', price: 700, image: 'https://doki.co.id/image/cache/data/Handphone/Motorola/Moto%20z/Motorola-moto-z-black-500x500.jpg' },
          { id: 9, name: 'Ballroom Restaurant', price: 500, image: 'https://doki.co.id/image/cache/data/Handphone/xiaomi/Note%205A/Redmi-note-5a-Grey-500x500.jpg' },
          { id: 10, name: 'veretto Restaurant', price: 1000, image: 'https://doki.co.id/image/cache/data/Accessories/Tempered Glass/Tempered-Samsung-Galaxy-s8-s8+-500x500h.jpg' },
          { id: 11, name: 'Mr Puff Coffee Shop', price: 700, image: 'https://doki.co.id/image/cache/data/Handphone/Motorola/Moto%20z/Motorola-moto-z-black-500x500.jpg' },
          { id: 12, name: 'Ballroom Restaurant', price: 500, image: 'https://doki.co.id/image/cache/data/Handphone/xiaomi/Note%205A/Redmi-note-5a-Grey-500x500.jpg' },
          { id: 13, name: 'veretto Restaurant', price: 1000, image: 'https://doki.co.id/image/cache/data/Accessories/Tempered Glass/Tempered-Samsung-Galaxy-s8-s8+-500x500h.jpg' },
          
        ] }
        
          renderItem={ this._renderItem }
          keyExtractor={ this._keyExtractor }
        />: <FlatList 
        
        data={ [{ id: 0, name: 'Mr Puff Coffee Shop', price: 700, image: 'https://doki.co.id/image/cache/data/Handphone/Motorola/Moto%20z/Motorola-moto-z-black-500x500.jpg' },
        { id: 1, name: 'Ballroom Restaurant', price: 500, image: 'https://doki.co.id/image/cache/data/Handphone/xiaomi/Note%205A/Redmi-note-5a-Grey-500x500.jpg' },
        { id: 2, name: 'veretto Restaurant', price: 1000, image: 'https://doki.co.id/image/cache/data/Accessories/Tempered Glass/Tempered-Samsung-Galaxy-s8-s8+-500x500h.jpg' },
        
      ] }
      
        renderItem={ this._renderItem }
        keyExtractor={ this._keyExtractor }
      />}
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:"#fff"
  },
  sectionTitle: {
    fontSize: 24,
  },
  btnLogin: {
     
    // backgroundColor: "#432577",
    
        justifyContent: "center",
    marginLeft: 70,

    borderBottomWidth: 1,
    borderColor:"#fff",
    borderStyle: "solid",
    borderWidth: 2,
    width: 180,
  
    height: 50,
  }, text: {
    color: "#fff",
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadProducts
}, dispatch);

const mapStateToProps = (state) => ({
  products: state.products
});

export default (Home);