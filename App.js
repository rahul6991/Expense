import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import bgImage from './images/background.jpeg';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
const { width: WIDTH,height:HEIGHT } = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
    isLogin: true,
    isSignup: false,
    isHome: false,
    mobile: null,
    password: null
  }

  changeText = (val, path) => {
    var field ={};
    field[path]=val;
    this.setState(previousState => (field));
  }

  onSubmit = (newValue) => {
    this.setState(previousState=>(newValue));
    this.setState(previousState=>({
      isLogin:false,
      isSignup: false,
      isHome: true
    }))
  }

  onSignup = (newValue)=>{
    console.log("hello")
    this.setState(previousState=>(newValue));
  }

  togglePageView = ()=>{
    this.setState(previousState=>({
      isLogin:!this.state.isLogin,
      isSignup: !this.state.isSignup
    }));
  }

  render() {
    let comp;
    if(this.state.isLogin){
        comp =(<Login 
        isSignup ={this.state.isSignup} 
        onSubmit={this.onSubmit} 
        toggleView={this.togglePageView}
        />);
    }else if(this.state.isSignup){
      comp = (<Signup 
        isSignup={this.state.isSignup}
        onSubmit={this.onSignup}  
        toggleView={this.togglePageView}
      />);
    }
    else{
      return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <Home mobile={this.state.mobile}/></ImageBackground>
        );
    }
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={{flex:1,justifyContent: 'center'}}>
        {comp}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  buttonContainer: {
    width: WIDTH * 0.9,
    height:HEIGHT * 0.4,
    alignSelf: 'center'
  }
});

