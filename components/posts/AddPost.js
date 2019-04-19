import React, {Component} from 'react'
import {KeyboardAvoidingView, TextInput, Text, TouchableOpacity} from 'react-native'
import styles from './../Styles'

class addPost extends Component{
  state = {
    description: '',
    name: '',
    productImage:'',
    price: '',
  }

  static navigationOptions= {
    header:null
  }

  createPost(){
    const productImage = {
      uri: this.productImage,
      name: 'download.jpeg',
      type: 'image/jpeg'
    }
    const body = new FormData()
    const {description, name, price} = this.state
    body.append('description', description)
    body.append('name', name)
    body.append('price', price)
      fetch('http://ggff.us.openode.io/user/login', {method:'POST', headers: {'Accept': 'application/json', 'Content-Type': 'multipart/form-data' }, body: body, file: productImage).then(res => {
      return res = res.text()
      }).then(res => {
        let msg = JSON.parse(res)
        if(msg.message == 'Created product successfully'){
          Alert.alert('Error', JSON.stringify({description, name, file, price}), [{
          text: 'ok'
        }])
          this.props.navigation.navigate('home')
        }
        else{
          Alert.alert('Error', JSON.stringify({description, name, price}), [{
          text: 'ok'
        }])
        }
      }).catch(error => {
        Alert.alert('Error', msg.error, [{
          text: 'ok'
        }])
      })
    }

  render(){
    const {BottomView, TopView, heading, input, view, main} = styles
    return (
      <KeyboardAvoidingView style={main}>
        <KeyboardAvoidingView style={TopView}>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={view} behavior="padding" enabled>
          <Text style={heading}>Create a post</Text>
          <Text>Product Name: </Text>
          <TextInput style={input} placeholder='  Product Name' onChangeText={text => this.setState({name: text})} />
          <Text>Product Description: </Text>
          <TextInput style={input} placeholder='  Product Description' onChangeText={text => this.setState({description: text})} />
          <Text>Product Price: </Text>
          <TextInput style={input} placeholder='  Product Description' onChangeText={text => this.setState({price: text})} />
          <Text>Image Path: </Text>
          <TextInput style={input} placeholder='  Type Image Path' onChangeText={text => this.setState({productImage: 'file://' + text})} />
          <TouchableOpacity onPress={() => this.createPost()} title='createPost'><KeyboardAvoidingView style = {styles.touchStyle} ><Text>Create Post</Text></KeyboardAvoidingView></TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    )
  }
}

export default addPost
