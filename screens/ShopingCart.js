import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ItemShopingCart from '../components/ItemShoppingCart';

import { connect } from 'react-redux';

class ShopingCart extends Component {

  _keyExtractor = (item, idx) => item.id;

  _renderItem = ({ item }) => (
    
    <ItemShopingCart item={ item }/>
  );

  render() {
    const { cartItems, total } = this.props;
    return (
      <View style={ styles.container }>

        <Text style={ styles.sectionTitle }>Shopping Cart</Text>
        <FlatList
         style={{ flexGrow: 0 }}
         data={ cartItems }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        />
        <Text style={ styles.total }>Total: US${ total }</Text>
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
    margin: 16,
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
    marginTop: 4,
    marginBottom: 4,
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
  
  text: {
    color: "#fff",
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default (ShopingCart);