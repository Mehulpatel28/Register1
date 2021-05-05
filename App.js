import React from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import Login from './src/screen/Login/Login';
import Home from './src/screen/Home/Home';
import SignUp from './src/screen/SignUp/SignUp';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './src/Authentication/Auth';
import Details from './src/screen/Details/Details';
import Profile from './src/screen/Profile/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTab from './src/screen/BottomTab/MainTab';
import Drawer from './src/screen/Drawer/Drawer';
import SplashScreen from './src/screen/SplashScreen/SplashScreen';
import { Provider } from 'react-redux'
import store from './src/Redux/store'

// function SplashScreen({navigation}) {
//   setTimeout(() => {
//     navigation.navigate('Login');
//   }, 4000);
//   return (
//     <View>
//       <Image
//         source={require('./src/assets/2cd67234938099.56e31c3bdc480.gif')}
//         style={{height: 740, width: '100%'}}
//       />
//     </View>
//   );
// }

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Splash_Screen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />

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
        <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
