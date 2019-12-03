import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import bgImage from './images/background.jpeg';
import Login from './pages/Login';
import CustomButton from './components/CustomButton';
import CustomInputText from './components/CustomInputText';
const { width: WIDTH,height:HEIGHT } = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: null,
    password: null,
    mobileno: null,
  }

  changeText = (val, path) => {
    var field ={};
    field[path]=val;
    this.setState(previousState => (field));
  }
  onSubmit = () => {
    console.log(this.state);
  }
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        
        <CustomInputText
          icon={{ iconColor: 'green', iconName: 'alien' }}
          inpTextField={{ password: true }}
          val={this.state.username}
          changeText={this.changeText}
          changeTextPath={'password'}
        />
        <CustomInputText
          val={this.state.password}
          inpTextField={{}}
          icon={{ iconColor: 'blue', iconName: '' }}
          changeText={this.changeText}
          changeTextPath={'username'}
        />
        <CustomInputText
          val={this.state.mobile_no}
          inpTextField={{}}
          icon={{}}
          changeText={this.changeText}
          changeTextPath={'mobileno'}
        />
        <View style={styles.buttonContainer}>
          <Button title={'rahul'} onPress={this.onSubmit} />
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
    justifyContent: 'center'
  },
  buttonContainer: {
    width: WIDTH * 0.9,
    height:HEIGHT * 0.4,
    alignSelf: 'center'
  }
});

