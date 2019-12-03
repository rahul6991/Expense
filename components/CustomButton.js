import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title || "Submit"
        };
    }
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={styles.Container}>
                <Text style={styles.btnLogin}> {this.state.title} </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        marginVertical: 10,
        backgroundColor: 'rgba(0,0,0,0.35)',
        width: WIDTH * 0.9,
        height: HEIGHT * 0.06,
        alignSelf: 'center',
    },
    btnLogin: {
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: 'black',
        fontSize: 20
    },
});
