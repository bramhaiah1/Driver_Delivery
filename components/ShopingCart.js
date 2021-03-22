import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableHighlight,
 
} from 'react-native';
import Modal from "react-native-modal";
// import { connect } from 'react-redux'
import ItemShopingCart from '../components/ItemShoppingCart';
import ModelScreen from '../components/ModelScreen'
import { Entypo } from '@expo/vector-icons';



class ShopingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility:true,
      show:false
    };
}
     item = [
        { id: 0, name: 'Order id' },
        { id: 1, name: 'Order id' },
        { id: 2, name: 'Order id'   },
        { id: 3, name: 'Order id' },
        { id: 4, name: 'Order id'   },
        { id: 5, name: 'Order id',   },
      ];

  _keyExtractor = (item, idx) => item.id;
   

  _renderItem = ({ item }) => (
    <ItemShopingCart item={ item } onPress={this.props.removeItem}  />
  );
  setShow = () =>{
  this.setState({show:true})
  }

  render() {
    // const { cartItems, total } = this.props;
    return (
      <View style={ styles.container }>
       {this.state.show?<ModelScreen/>:null}
          {/* <ModelScreen/> */}
        <Text style={ styles.sectionTitle }>Previous order</Text>
        <FlatList
         style={{ flexGrow: 0 }}
         data={ this.item }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        />
          
      <Button title="Show" onPress={this.setShow}/>
      {/* {this.state.show?<ModelScreen/>:null} */}
     
      </View>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
//     }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight:"bold"
  },
  
});
export default ShopingCart;