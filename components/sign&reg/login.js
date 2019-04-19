import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import styles from './../Styles'

class login extends Component{
  state = {username: '', productImage: '', productName: '', productDescription: ''}

  static navigationOptions= {
    header:null
  }

  checkLogin(){
    const {username, productImage, name, productDescription} = this.state
    //console.warn(JSON.stringify({username, password}))
    fetch('http://ggff.us.openode.io/user/login', {method:'POST', headers: {'Content-Type': 'application/json charset=utf-8' } , body:JSON.stringify({username, productImage, name, productDescription})}).then(res => {
      return res = res.text()
    }).then(res => {
      let msg = JSON.parse(res)
      if(msg.message == 'login'){
        this.props.navigation.navigate('home')
      }
      else{
        Alert.alert('Error', 'Username or Password are incorrect', [{
        text: 'ok'
        }])
      }
    })
  }


  render(){
    const newline = <Text>{'\n'}</Text>
    const {BottomView, TopView, heading, input, view, main} = styles
    return (
      <KeyboardAvoidingView style={main}>
        <KeyboardAvoidingView style={TopView}>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={view} behavior="padding" enabled>
          <Text style={heading}>Login</Text>
          <Text>Username: </Text>
          <TextInput style={input} placeholder='  Username' onChangeText={text => this.setState({username: text})} />
          <Text>Password: </Text>
          <TextInput style={input} secureTextEntry={true} placeholder='  Type your password' onChangeText={text => this.setState({password: text})} />
          <TouchableOpacity onPress={() => this.checkLogin()} title='checkLogin'><KeyboardAvoidingView style = {styles.touchStyle} ><Text>Login</Text></KeyboardAvoidingView></TouchableOpacity>
          {newline}
          {newline}
          <TouchableOpacity style={styles.link} onPress={() => this.props.navigation.navigate('signup')} title='signup'><Text>Create a new account</Text></TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() =>  this.props.navigation.navigate('home')} title='Home'><Text>Home page</Text></TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default login
