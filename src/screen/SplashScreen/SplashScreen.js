import React, { Component } from 'react'
import { View,Image } from 'react-native'

class SplashScreen extends Component {
    render() {
        setTimeout(() => {
                    this.props.navigation.navigate('Login');
                  }, 4000);
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
