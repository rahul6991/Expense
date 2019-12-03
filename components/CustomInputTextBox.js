import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TextInput } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default class CustomInputTextBox extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <View>
                <TextInput {...this.props} style={styles.input}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        backgroundColor:'black'
    },
    input: {
        width: WIDTH * 0.9,
        height: 0.06,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25
    },
});
