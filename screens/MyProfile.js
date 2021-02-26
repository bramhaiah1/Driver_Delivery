import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import ItemShopingCart from '../components/ItemShoppingCart';


class MyProfile extends Component {

  _keyExtractor = (item, idx) => item.id;

  _renderItem = ({ item }) => (
    <ItemShopingCart item={ item }/>
  );

  render() {
    const { cartItems, total } = this.props;
    return (
      <View style={ styles.container }>
        <Text style={ styles.sectionTitle }>Welcome to My Profile</Text>
        {/* <FlatList
         style={{ flexGrow: 0 }}
         data={ cartItems }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        /> */}
        <Text style={ styles.total }>Profile Details</Text>
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
  }
});

export default (MyProfile);