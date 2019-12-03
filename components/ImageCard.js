import React, { Component } from 'react';
import { View, Image, Button, Alert, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');

export default class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.val.title,
            id: props.val.id,
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={()=>{this.props.onPress()}} style={styles.Container}>
                <Image style={styles.imageContainer} resizeMode='cover' source={this.props.val.source} />
                <Text style={styles.imageText}> {this.props.val.title}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        width: WIDTH * 0.45,
        height: WIDTH * 0.45,
        borderRadius: 50,
    },
    imageContainer: {
        width: WIDTH * 0.45,
        height: WIDTH * 0.45,
        borderRadius: 50,
    },
    imageText: {
        fontSize: 22,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    }
})