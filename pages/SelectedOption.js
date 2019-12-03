import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import CustomInputText from '../components/CustomInputText';
import CustomButton from './../components/CustomButton';
import AmountCard from './../components/AmountCard';
export default class SelectedOption extends Component{
    state = {
        amount: null,
        description: null
    }
    changeText = (val, path) => {
        var field = {};
        field[path] = val;
        this.setState(previousState => (field));
      }

    render(){
        return (<View>
            <View style={{marginTop:25,flexDirection: 'row',justifyContent:'space-between',paddingVertical:5 ,paddingHorizontal:10,backgroundColor:'#E5E5E5'}}>
                    <Text style={{color: 'black', fontSize:25}}>Expense</Text>
                    <TouchableOpacity style={{backgroundColor:'grey',padding:10,borderRadius:30,width:50,height:50}}>
                        <Text style={{color: 'white', fontSize:23}}>RA</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{marginLeft:10,color: 'black', fontSize:22}}> Vegetables</Text>
                    <CustomInputText
                        icon={{ iconColor: 'green', iconName: 'alien' }}
                        inpTextField={{ password: false }}
                        val={this.state.amount}
                        changeText={this.changeText}
                        changeTextPath={'amount'}
                    />
                    <CustomInputText
                        icon={{ iconColor: 'green', iconName: 'alien' }}
                        inpTextField={{ password: false }}
                        val={this.state.description}
                        changeText={this.changeText}
                        changeTextPath={'description'}
                    />
                    <CustomButton title="Submit" />
                </View>
                <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <View style={{margin:15}}>
                    <AmountCard />
                    </View>
                    <View style={{margin:15}}>
                    <AmountCard />
                    </View>
                    <View style={{margin:15}}>
                    <AmountCard />
                    </View>
                    <View style={{margin:15}}>
                    <AmountCard />
                    </View>
                    <View style={{margin:15}}>
                    <AmountCard />
                    </View>
                </View>

        </View>);
    }
  }