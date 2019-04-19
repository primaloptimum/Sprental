import React, { Component, AppRegistry } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView
} from 'react-native';
import { createTabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import styles from './components/Styles';
import login from './components/sign&reg/login';
import signup from './components/sign&reg/signup';
import Options from './components/Options';
import home from './components/home/Home';
import editProfile from './components/user/EditProfile';
import editPosts from './components/posts/EditPosts';
import addPost from './components/posts/AddPost';
import Icon from 'react-native-vector-icons/Ionicons'

export default class App extends Component{
  render(){
    return(
      <SafeAreaView style = {{flex:1}} forceInset={{ top: 'always' }}>
        <TabNavi />
      </SafeAreaView>
    )
  }
}

const homeStack = createStackNavigator({
  home: { screen: home },
  login: { screen: login },
  signup: { screen: signup },
});

const editProfileStack = createStackNavigator({
  login: { screen: login },
  signup: { screen: signup },
  Profile: { screen: editProfile },
});

const editPostsStack = createStackNavigator({
  Posts: { screen: editPosts },
  AddPost: { screen: addPost },
});

const TabNavi = createMaterialTopTabNavigator({
  home: { screen: homeStack,
  navigationOptions:{
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor})=>(
        <Icon name='ios-home' color={tintColor} size={18} />
    )}
  },
  Profile: { screen: editProfileStack,
  navigationOptions:{
    tabBarLabel: 'Profile',
    tabBarIcon: ({tintColor})=>(
        <Icon name='ios-person' color={tintColor} size={18} />
    )}
  },
  Posts: { screen: editPostsStack,
  navigationOptions:{
    tabBarLabel: 'Posts',
    tabBarIcon: ({tintColor})=>(
        <Icon name='ios-albums' color={tintColor} size={18} />
    )}},
},{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions:{
    labelStyle:{
      fontSize: 10,
    },
    tabStyle:{
      height: 55,
    },
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    style:{
      backgroundColor:'#ffee00'
    },
    showIcon: true
  }
});
