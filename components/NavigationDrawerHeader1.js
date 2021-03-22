/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from "react";

//Import all required component
import { View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { withNavigation } from 'react-navigation';

import { DrawerActions } from "react-navigation-drawer"

const NavigationDrawerHeader1 = (props) => {
  const toggleDrawer1 = () => { props.navigation.navigate("product")}

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity   onPress={toggleDrawer1}>
        <Entypo name="arrow-left" size={40} color="#fff" />
        
      </TouchableOpacity>
    </View>
  );
};
export default withNavigation(NavigationDrawerHeader1);
