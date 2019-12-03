import React, { Component } from 'react';
import { View, Image, Button, Alert, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');

export default class ProfileCard extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <TouchableOpacity  style={styles.Container}>
                <Text style={styles.imageText}>{this.props.val.title}  </Text>
                <Text>{this.props.val.description} </Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        padding:10,
        marginVertical:5,
        backgroundColor: 'white',
        height: WIDTH * 0.15,
        flexDirection: "column"
    },
    imageText: {
        fontSize: 20,
    }
})