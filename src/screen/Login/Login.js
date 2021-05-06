import React ,{ Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import InputText from '../../Components/InputText';
import styles from './Styles'



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      isEmailValidate: false,
      password: ''
    }
  }

  // checked_filed = () => {
  //   const { email, password } = this.state
  //   if (email == "") {
  //     alert("please fill email ")
  //     return false;
  //   } else if (password == "") {
  //     alert("please fill password")
  //     return false;
  //   }
  //   return true;
  // }

  // making_api_call = () => {
  //   if (this.checked_filed()) {
  //     this.props.navigation.navigate('Home')
  //   }
  // }

  // making_api_call = () => {
  //   if (this.checked_filed()) {
  //     this.props.navigation.navigate('Auth', { email: this.state.email, password: this.state.password});
  //   }
  // }

//   making_api_call_all_fields = () => {
//     if (this.allFieldValidation()) {

//         this.props.navigation.navigate('Auth', { email: this.state.email, password: this.state.password });
//     }
// }



  render() {
    return (
      <SafeAreaView>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
      enabled={Platform.OS === 'ios' ? true : false}
      style={styles.container}
    >
    <ImageBackground
            source={require('../../assets/bgp12.jpg')}
              style={{height:1000,marginTop:-100}}>
         <Animatable.View animation="fadeInUp" iterationDelay={500}>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../../assets/blogin.png')} />
          <View>
            <InputText placeholder="Email" iconname="email"
            onChangeText={(value) => { this.validate(value) }} value={this.state.email} 
           />
           {this.state.isEmailvalidate ? (
              <Text style={{ color: 'red', alignSelf: 'center' }}>
                {this.state.emailError}
              </Text>
            ) : (
              <Text style={{ color: 'red', alignSelf: 'center' }}>{this.state.emailError}</Text>
            )}
            <InputText
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              iconname="lock"
              onChangeText={(value) => this.setState({ password: value })}
              value={this.state.password} 
            />
          </View>
          <TouchableOpacity style={styles.btn1} onPress={() =>this.props.navigation.navigate('Auth', {
              email: this.state.email,
              password: this.state.password
            })}>
            <Text style={styles.txt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
            <Text style={styles.txt1} >Not Registered?{' '}
             <Text style={{fontWeight:'bold',color:'#EEE4DF'}}>Create an account</Text>
             </Text>
          </TouchableOpacity>
        </View>
        </Animatable.View>
      </ImageBackground>
      </KeyboardAvoidingView>
      </SafeAreaView>
      
    )
  }
  validate = (value) => {
    console.log(value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(value) === false) {
      console.log('Email is not Correct');
      this.setState({ email: value, emailError: 'Email is not correct' })
      return false;
    } else {
      this.setState({ email: value, emailError: 'Email is Correct' })
      console.log('Email is correct')
    }
  }

}



export default Login;