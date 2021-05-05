import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ' ',
            password: ' '
        }
    }
    componentDidMount() {
        const { email, password } = this.props.route.params;
        this.setState({ email: email , password: password })
        this.check()
    }

    check = async () => {
        try {
            
            let user = await AsyncStorage.getItem('register_data');
            console.log('data from auth -- ', user)
            let parsed = JSON.parse(user);
            console.log(this.state.email + '--' + this.state.password)
            console.log('data from auth parsed-- ', parsed.email, parsed.password)
            if (parsed.email === this.state.email && parsed.password === this.state.password) {
                this.props.navigation.replace("Home");
            } else {
                alert('Email or password is invalid');
                this.props.navigation.navigate('Login');
            }
        }
        catch {
            alert(error)
        }
    }
    render() {
        return (
            <View>
              
            </View>
        )
    }
}