import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions, Switch } from 'react-native';
import Logo from '../components/Logo';
import CustomButton from './../components/CustomButton';
import CustomInputText from '../components/CustomInputText';
const { width: WIDTH } = Dimensions.get('window');

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    mobile: null,
    password: null
  }

  changeText = (val, path) => {
    var field = {};
    field[path] = val;
    this.setState(previousState => (field));
  }

  render() {
    return (
      <View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <CustomInputText
          icon={{ iconColor: 'green', iconName: 'alien' }}
          inpTextField={{ password: false, numeric: true }}
          val={this.state.mobile}
          changeText={this.changeText}
          changeTextPath={'mobile'}
        />
        <CustomInputText
          icon={{ iconColor: 'green', iconName: 'textbox-password' }}
          inpTextField={{ password: true }}
          val={this.state.password}
          changeText={this.changeText}
          changeTextPath={'password'}
        />
        <CustomButton title="Login" onPress={() => this.props.onSubmit(this.state)} />
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.flipButtonText}>Login</Text>
          <Switch
            onValueChange={this.props.toggleView}
            value={this.props.isSignup} />
          <Text style={styles.flipButtonText}>Signup</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 80
  },
  logoText: {
    fontSize: 25,
    fontStyle: 'italic'
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
  btnSize: {
    width: WIDTH / 2
  },
  btnLogin: {
    textAlign: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    height: 45,
    color: 'white',
    backgroundColor: 'rgba(70,0,0,0.35)'
  },
  btnEye: {
    position: 'absolute',
    right: 50,
    top: 10
  },
  flipButtonText: {
    color: 'black',
    fontSize: 22,
    marginHorizontal: 10
  }
});