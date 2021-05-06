import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screen/SignUp/SignUp';
import Auth from '../Authentication/Auth';
import Login from '../screen/Login/Login';

const Stack = createStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    );
}

export default NotAuthenticated;