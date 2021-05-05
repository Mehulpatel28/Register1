import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputText from '../../Components/InputText';
import * as Animatable from 'react-native-animatable';
import styles from './Styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    };
  }

  componentDidMount() {
    this.check_data();
  }

  check_data = async () => {
    try {
      let user_data = await AsyncStorage.getItem('register_data');
      console.log('registered_data from check_data:', user_data);

      var parsed = JSON.parse(user_data);
      this.setState({
        firstname: parsed.firstname,
        lastname: parsed.lastname,
        email: parsed.email,
        phone: parsed.phone,
        password: parsed.password,
      });
      console.log('register_data from firstName:', parsed.firstname);
    } catch (error) {
      alert('heello');
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/bgp12.jpg')}
        style={{height: 1000}}>
        <Animatable.View animation="zoomIn" iterationDelay={500}>
          <View style={styles.container}>
            <View style={styles.centerValues}>
              <Image
                source={require('../../assets/user.jpg')}
                style={{height: 150, width: 150, marginBottom: 20}}
              />
            </View>
            <View style={styles.form}>
              <InputText iconname="person" value={this.state.firstname} />
              <InputText iconname="person" value={this.state.lastname} />
              <InputText iconname="email" value={this.state.email} />
              <InputText iconname="phone-android" value={this.state.phone} />
            </View>
          </View>

          <TouchableOpacity
            style={styles.btn1}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.txt}>Logout</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    );
  }
}

export default Profile;
