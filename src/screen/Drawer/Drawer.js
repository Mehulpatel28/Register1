import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Setting from "../Setting/Setting"
import MainTab from "../BottomTab/MainTab";

//import { ContactStackNavigator } from "./StackNavigator";
//import TabNavigator from "./TabNavigator";
//import Details from '../Screens/Details/Details';


const Drawer = createDrawerNavigator();

const Drawer1 = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainTab} />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}

export default Drawer1;