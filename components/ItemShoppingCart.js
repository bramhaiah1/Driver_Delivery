import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ModelScreen from '../components/ModelScreen'
import { withNavigation } from 'react-navigation';


class ItemShoppingCart extends Component {
  render() {
    const { item } = this.props;
    return (
      
      <View>
     
      <View style={ styles.itemCard}>
        <View style={ styles.itemInfo }>
          <Text style={ styles.itemTitle }>
            { item.name } - { item.id } 
          </Text>
        </View>
        <TouchableHighlight style={ styles.deleteButton }
        onPress={() => this.props.navigation.navigate("Demo")}>
          <Entypo name="plus" size={28} color="black" />
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    backgroundColor: '#e0e0eb',
    // borderWidth:1
  },
  imageSize: { 
    width: 75,
    height: 75,
  },
  itemInfo: {
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1,
  },
  itemTitle: { 
    fontSize: 16,
    fontWeight: 'bold'
  },
  deleteButton: { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
})

export default withNavigation(ItemShoppingCart);