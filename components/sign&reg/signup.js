import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, TouchableOpacity, Alert} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import styles from './../Styles'
import errorhandler from './../ErrorHandler'

class signup extends Component{
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    password: '',
    password2: '',
    email: '',
    phone: ''
  }

  checkSignUp(){
    const {email, username, password, password2, phoneNo} = this.state
    //console.warn(JSON.stringify({username, password}))
    if (password === password2)
    {
        fetch('http://ggff.us.openode.io/user/signup', {method:'POST', headers: {'Content-Type': 'application/json' }, body:JSON.stringify({email, username, password, phoneNo})}).then(res => {
        return res = res.text()
      }).then(res => {
        let msg = JSON.parse(res)
        if(msg.message == 'Check your emial'){
          this.props.navigation.navigate('home')
        }
        else{
          Alert.alert('Error', JSON.stringify({email, username, password, phoneNo}), [{
          text: 'ok'
        }])
        }
      }).catch(error => {
        Alert.alert('Error', msg.error, [{
          text: 'ok'
        }])
      })
    }
  }

  render(){
    const newline = <Text>{'\n'}</Text>
    let emailtxt = <Text>Email address:</Text>
    let usernametxt = <Text>Username:</Text>
    let passwordtxt = <Text>Password:</Text>
    let password2txt = <Text>Confirm Password:</Text>
    let phonenotxt = <Text>Phone No:</Text>

    const {BottomView, TopView, heading, input, view, main, touchStyle} = styles

    return (
      <KeyboardAvoidingView style={main}>
        <KeyboardAvoidingView style={TopView}>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style = {view} behavior="padding" enabled>
          <Text style={heading}>Sign Up</Text>
          {emailtxt}
          <TextInput style={input} placeholder='  Email address' onChangeText={text => this.setState({email: text})} />
          {usernametxt}
          <TextInput style={input} placeholder='  Username' onChangeText={text => this.setState({username: text})} />
          {passwordtxt}
          <TextInput style={input} secureTextEntry={true} placeholder='  Password' onChangeText={text => this.setState({password: text})} />
          {password2txt}
          <TextInput style={input} secureTextEntry={true} placeholder='  Confirm Password' onChangeText={text => this.setState({password2: text})} />
          {phonenotxt}
          <TextInput style={input} placeholder='  Phone No.' onChangeText={text => this.setState({phoneNo: text})} />

          <TouchableOpacity style = {styles.link} onPress={() => this.checkSignUp()}><KeyboardAvoidingView style = {touchStyle}><Text>Sign Up</Text></KeyboardAvoidingView></TouchableOpacity>
          <TouchableOpacity style = {styles.link} onPress={() =>  this.props.navigation.navigate('login')} title='Login'><Text>Have an account?</Text></TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default signup
