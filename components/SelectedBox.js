import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import bgImage from './images/background.jpeg';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default class SelectedBox extends Component {
    constructor(props) {
        super(props);
    }
    state = {
    
    }

    render() {
        return (<View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Inside</Text>
        </View>);
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
        height: HEIGHT * 0.4,
        alignSelf: 'center'
    }
});

