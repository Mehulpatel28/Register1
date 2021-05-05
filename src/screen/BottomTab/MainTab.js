import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home/Home';
import Setting from '../Setting/Setting';    



const Tab = createMaterialBottomTabNavigator();


function MainTab() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#31726A' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color="#fff" size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="snowflake" color="#fff" size={26} />
                    )
                }} />
        </Tab.Navigator>
    );
}
export default MainTab;