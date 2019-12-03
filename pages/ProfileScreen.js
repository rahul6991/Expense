import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import cards from './../components/cards';
import ProfileImageCard from '../components/ProfileImageCard';
export default class ProfileScreen extends Component{
    render(){
        return (<View style={{flex:1, justifyContent: 'center'}}>
            <ProfileImageCard />
            <ScrollView>
            {cards.map(function (value, index) {
                        return (
                            <View key={index}>
                            <ProfileCard val={value} />
                            </View>
                        );
                    })}
           </ScrollView>
        </View>);
    }
  }
