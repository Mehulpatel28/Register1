import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
// import MainTab from '../screen/BottomTab/MainTab';
// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Home from '../screen/Home/Home';
import Drawer from '../screen/Drawer/Drawer';
import Profile from '../screen/Profile/Profile';
import Details from '../screen/Details/Details';
import Setting from  '../screen/Setting/Setting';

const Stack = createStackNavigator();

const Authenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Drawer}
        options={({navigation}) => ({
          title: 'Home',
          // headerShown:false,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Icon
                name="account-details" //"person-outline"
                color="#000"
                size={35}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Setting" component={Setting} />


    </Stack.Navigator>
  );
};

export default Authenticated;
