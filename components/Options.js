import React, {Component} from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity} from 'react-native'
import styles from './Styles'

class Options extends Component{
   navigate(screenName){
    this.props.navigation.navigate(screenName)
    }

  render(){
    const routes = [
    {
      title: 'Home',
      route: 'home'
    },
    {
      title: 'Profile',
      route: 'editProfile'
    },
    {
      title: 'Edit Posts',
      route: 'editPosts'
    }]
    return (
      <View>
        <Text style = {styles.link}>
        </Text>
        {
          routes.map(e => (
            <TouchableOpacity style = {styles.link} onPress={_ => this.navigate(e.route)} title={e.title}>
              <Text>{e.title}</Text>
            </TouchableOpacity>
            )
          )}
      </View>
    )
  }
}

export default Options
