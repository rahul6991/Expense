import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SelectedOption from './SelectedOption';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      )
    }
  },
  Selected: {
    screen: SelectedOption,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="alien" size={25} color={tintColor} />
      )
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: '#eb6e3d'
  }
}
);

const TabContainer = createAppContainer(TabNavigator);

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state= {
      mobile: props.mobile
    }
    console.log(this.state);
  }
  render() {
    return (<TabContainer name={'rahul'} />);
  }
}