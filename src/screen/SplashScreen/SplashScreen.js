import React, { Component } from 'react'
import { View,Image } from 'react-native'
import { CommonActions } from '@react-navigation/routers';
import AsyncStorage from '@react-native-async-storage/async-storage';


class SplashScreen extends Component {

    resetToAuth = CommonActions.reset({
        index: 0,
        routes: [{
            name: "Authenticated"
        }]
    })

    resetToNotAuth = CommonActions.reset({
        index: 0,
        routes: [{
            name: "NotAuthenticated"
        }]
    })

    componentDidMount() {
        this.checkAuthentication();
    }

    checkAuthentication = async () => {
        let isAuthenticated = await AsyncStorage.getItem('register_data');
        if (isAuthenticated != null)
            this.goTo(true);
        else
            this.goTo(false)

    }
    goTo = (value) => {
        if (value) {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToAuth);
            }, 3000);
        } else {
            setTimeout(() => {
                this.props.navigation.dispatch(this.resetToNotAuth);
            }, 3000);
        }
    }

    render() {
        // setTimeout(() => {
        //             this.props.navigation.navigate('Login');
        //           }, 4000);
        return (
            <View>
                <Image
                    source={require('../../../src/assets/splash.gif')}
                    style={{ height: 800, width: '100%' }}
                />
            </View>
        )
    }
}

export default SplashScreen
