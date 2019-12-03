import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import ImageCard from './../components/ImageCard';
import Options from '../components/Options';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }


    onPress = (val = {}) => {
        console.log("hello", val)
    }

    render() {
        return (<View>
                <View style={{marginTop:25,flexDirection: 'row',justifyContent:'space-between',paddingVertical:5 ,paddingHorizontal:10,backgroundColor:'#E5E5E5'}}>
                    <Text style={{color: 'black', fontSize:30}}>Expense</Text>
                    <TouchableOpacity style={{backgroundColor:'grey',padding:10,borderRadius:30,width:50,height:50}}>
                        <Text style={{color: 'white', fontSize:23}}>RA</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsHorizontalScrollIndicator={true} >
                <View style={{ flexDirection: 'row', flexWrap: 'wrap',paddingBottom:70 }}>
                    {Options.map(function (value, index) {
                        return (
                            <View style={{ margin: 10 }} key={index} >
                                <ImageCard onPress={this.onPress} val={value} />
                            </View>
                        );
                    })}
                </View>
                </ScrollView>
                </View>
        );
    }
}


const styles = StyleSheet.create({

    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 50
    },
    imageText: {
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 1,
        bottom: 0
    }
})