import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, Button, Alert, TouchableOpacity, ScrollView, Image, FlatList, RefreshControl, View} from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import styles from './../Styles'
import editProfile from './../user/EditProfile'
import login from './../sign&reg/login'
import Icon from 'react-native-vector-icons/Ionicons'

class home extends Component{

  constructor(){
    super()
    this.state = {
      response: [],
      refreshing: false,
      search: '',
      hideSearch: false,
      count: 0
    }
  }

  recievePosts(Search){
    fetch('http://192.168.1.18:3000/products').then(res => res.json()).then(responseJSON => {
      this.setState({response: responseJSON.products, count: this.state.count + responseJSON.count})
    }).catch(error => {
      console.error(error)
    })
  }

  componentDidMount(){
    fetch('http://192.168.1.18:3000/products').then((res) => res.json()).then(responseJSON => {
      this.setState({response: responseJSON.products, count: this.state.count + responseJSON.count})
      console.log(responseJSON)
    }).catch(error => {
      console.error(error)
    })
  }

  static navigationOptions= {
    header:null
  }

  hideSearch(){
    this.setState({hideSearch: true})
  }

  render(){
    const newline = <Text>{'\n'}</Text>
    const {BottomView, ScrollTopView, heading, view, text, main, button, link, scrollStyle, input} = styles
    const searchHeight = this.state.hideSearch ? { height: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'} : {height:50 ,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}
    return (
      <KeyboardAvoidingView style={main}>
        <KeyboardAvoidingView style = {ScrollTopView}>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style= {searchHeight}>
        <TextInput style={input} placeholder='  Search' onChangeText={text => this.setState({search: text})} />
        <TouchableOpacity style={styles.link} onPress={() =>  this.recievePosts(this.search)} title='Search'><Icon name='ios-arrow-forward' color= 'black' size={25} /></TouchableOpacity>
        </KeyboardAvoidingView>
        <ScrollView style = {scrollStyle}>
          {
            this.state.response.map(data => {
              return(<View key= {data._id} style={view}>
                  <Text style={heading}>{data.name}</Text>
                  <Image
                  style={{width: 400, height: 200}}
                  source={{uri: data.productImage}}
                  key= {data._id}/>
                  <Text>{data.description}</Text>
                </View>)
            })
          }
          <Text>{this.response}</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default home
