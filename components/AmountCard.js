import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import ImageCard from './../components/ImageCard';
import Options from '../components/Options';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AmountCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                    <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.5)',padding:30,borderRadius:40,width:100,height:100}}>
                        <Text style={{color: 'white', fontSize:30}}>20</Text>
                    </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({

})