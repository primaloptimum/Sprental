import React, {Component} from 'react'
import {View, TextInput, Text, ScrollView} from 'react-native'
import styles from './../Styles'

class editProfile extends Component{
  static navigationOptions= {
    header:null
  }

  render(){
    const {BottomView, TopView, heading, input, main, touchStyle, scrollStyle} = styles

    return (
      <View style = {main}>
        <View style = {TopView}>
        </View>
        <ScrollView style = {scrollStyle}>

        </ScrollView>
      </View>
    )
  }
}

export default editProfile
