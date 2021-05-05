import React, {Component} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import InputText from '../../Components/InputText';
import Pickr from '../../Components/Picker';
import styles from './Styles'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      isFirstvalidate: false,
      firstnamerror: '',
      lastname: '',
      isLastvalidate: false,
      lastnamerror: '',
      email: '',
      emailError: '',
      isEmailValidate: false,
      phone: '',
      isPhoneValidate: false,
      phoneErrorValidation: '',
      password: '',
      isPasswordValidation: false,
      PasswordError: '',
      ConfirmPassword: '',
      ConPassword: '',
      isConPassword: false,
    };
  }

  allFieldValidation = () => {
    const { firstname, lastname, email, phone, password, ConfirmPassword } = this.state
    if (firstname == "") {
      alert("Plz Fill firstname")
      return false;
    } else if (lastname == "") {
      alert("Plz Fill LastName")
      return false;
    } else if (email == "") {
      alert("Plz Fill Email")
      return false;
    } else if (phone == "") {
      alert("Plz Fill Phone")
      return false;
    } else if (password == "") {
      alert("Plz Fill Password")
      return false;
    } else if (ConfirmPassword == "") {
      alert("Plz Fill ConfirmPassword")
      return false;
    }
    return true
  }

  making_api_call_all_fields = () => {
    if (this.allFieldValidation()) {
      console.log('data from register - ', this.state.firstname, this.state.lastname, this.state.email, this.state.phone)
      let register_data = { firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, phone: this.state.phone, password: this.state.password }
      AsyncStorage.setItem('register_data', JSON.stringify(register_data));
      console.log('reg-:',register_data);
      alert("SuccessFully Registered")
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
          enabled={Platform.OS === 'ios' ? true : false}
          style={{flex: 1}}>
          <ImageBackground
              source={require('../../assets/bgp12.jpg')}
              style={{height:1000}}>
             <Animatable.View animation="fadeInUp" iterationDelay={500}>
            <View style={styles.container}>
              <Image
                style={styles.img}
                source={require('../../assets/signup1..jpg')}
              />
              <View>
                <InputText
                  placeholder="First Name"
                  iconname="person"
                  onChangeText={text => {
                    this.validateFirstName(text);
                  }}
                />
                {this.state.isFirstvalidate ? (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.firstnamerror}
                  </Text>
                ) : (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.firstnamerror}
                  </Text>
                )}

                <InputText
                  placeholder="Last Name"
                  iconname="person"
                  onChangeText={text => {
                    this.validateLastName(text);
                  }}
                />
                {this.state.isLastvalidate ? (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.lastnamerror}
                  </Text>
                ) : (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.lastnamerror}
                  </Text>
                )}

                <InputText
                  placeholder="Email"
                  iconname="email"
                  onChangeText={text => {
                    this.validate(text);
                  }}
                />
                {this.state.isEmailvalidate ? (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.emailError}
                  </Text>
                ) : (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.emailError}
                  </Text>
                )}
                <Pickr icon="flag-checkered" />

                <InputText
                  maxLength={10}
                  placeholder="Mobile Number"
                  iconname="phone-android"
                  onChangeText={text => {
                    this.validatePhone(text);
                  }}
                />
                {this.state.isPhoneValidate ? (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.phoneErrorValidation}
                  </Text>
                ) : (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.phoneErrorValidation}
                  </Text>
                )}

                <InputText
                  placeholder="Password"
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  iconname="lock"
                  onChangeText={text => {
                    this.validatePassword(text);
                  }}
                  value={this.state.password}
                />
                {this.state.isPasswordValidation ? (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.PasswordError}
                  </Text>
                ) : (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.PasswordError}
                  </Text>
                )}

                <InputText
                  placeholder="Confirm Password"
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  iconname="lock"
                  value={this.state.ConfirmPassword}
                  onChangeText={value => {
                    this.checked_Password(value);
                  }}
                />
                {this.state.isConPassword ? (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.ConPassword}
                  </Text>
                ) : (
                  <Text style={{color: 'red', alignSelf: 'center'}}>
                    {this.state.ConPassword}
                  </Text>
                )}

                <TouchableOpacity style={styles.btn1} onPress={() => this.making_api_call_all_fields()}>
                  <Text
                    style={styles.txt}
                    >
                    Sign Up
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={styles.txt1} >Already have an account? {' '}  
             <Text style={{fontWeight:'bold',color:'#fff'}}>Login</Text>
             </Text>
          </TouchableOpacity>

              </View>
            </View>
            </Animatable.View>
          </ImageBackground>
        </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
  validateFirstName = text => {
    console.log(text);
    let reg = /^[a-zA-Z]*$/;
    if (reg.test(text) === false) {
      this.setState({
        firstname: text,
        firstnamerror: 'Invalid FirstName',
        isFirstvalidate: true,
      });
    } else {
      this.setState({
        firstname: text,
        firstnamerror: 'Valid FirstName',
        isFirstvalidate: true,
      });
    }
  };
  validateLastName = text => {
    console.log(text);
    let reg = /^[a-zA-Z]*$/;
    if (reg.test(text) === false) {
      this.setState({
        lastname: text,
        lastnamerror: 'Invalid LastName',
        isLastvalidate: true,
      });
    } else {
      this.setState({
        lastname: text,
        lastnamerror: 'valid LastName',
        isLastvalidate: true,
      });
    }
  };
  validate = text => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('Email is not Correct');
      this.setState({email: text, emailError: 'Email is not correct'});
      return false;
    } else {
      this.setState({email: text, emailError: 'Email is Correct'});
      console.log('Email is correct');
    }
  };
  validatePhone = text => {
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      this.setState({
        phone: text,
        phoneErrorValidation: 'Invalid number',
        isPhoneValidate: false,
      });
      return false;
    } else {
      this.setState({
        phone: text,
        phoneErrorValidation: 'Valid number',
        isPhoneValidate: true,
      });
      return true;
    }
  };
  validatePassword = text => {
    console.log(text);
    let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    if (reg.test(text) == false) {
      this.setState({
        password: text,
        PasswordError: 'Invalid Password',
        isPasswordValidation: false,
      });
      return false;
    } else {
      this.setState({
        password: text,
        PasswordError: 'Valid Password',
        isPasswordValidation: true,
      });
      console.log('Password is correct', this.state.password, text);
    }
  };

  checked_Password = value => {
    if (this.state.password == this.state.ConfirmPassword) {
      this.setState({
        ConfirmPassword: value,
        ConPassword: 'not matched',
        isConPassword: true,
      });
    } else {
      this.setState({
        ConfirmPassword: value,
        ConPassword: ' Password matched',
        isConPassword: true,
      });
    }
  };
}



export default SignUp;
