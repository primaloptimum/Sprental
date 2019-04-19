import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import styles from './../Styles'
import Icon from 'react-native-vector-icons/Ionicons'

class editPost extends Component{
  constructor(){
    super()
    this.state = {
      response: []
    }
  }

  static navigationOptions= {
    header:null
  }

  componentDidMount(){
    fetch('http://ggff.us.openode.io/user/login').then(res => res.text()).then(responseJSON => {return responseJSON
    }).then(responseJSON => {
      let msg = responseJSON
      this.setState({response: msg.products})
    }).catch(error => {
      console.error(error)
    })
  }

  render(){
    const {ScrollTopView, ScrollBottomView, TopView, heading, view, text, main, paragraph, scrollStyle} = styles

    return (
        <KeyboardAvoidingView style = {main}>
          <KeyboardAvoidingView style = {ScrollTopView}>
          </KeyboardAvoidingView>
          <ScrollView style = {scrollStyle}>
          <Text style={heading}>Sprented Items</Text>
            {this.response}
          </ScrollView>
          <KeyboardAvoidingView style = {ScrollBottomView}>
          <TouchableOpacity onPress={() =>  this.props.navigation.navigate('AddPost')}><KeyboardAvoidingView><Icon name='ios-add' color='black' size={35} /></KeyboardAvoidingView></TouchableOpacity>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
  }
}

export default editPost
