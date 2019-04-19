import React, {Component} from 'react'
import {View, TextInput, Text} from 'react-native'
import home from './home/Home'
import styles from './Styles'
import login from './sign&reg/login'
import signup from './sign&reg/signup'

class Errorhandler extends Component{
  render(){
    return (
      <View>
        <Text>errorhandler:</Text>
      </View>
    )
  }
}

export default Errorhandler
