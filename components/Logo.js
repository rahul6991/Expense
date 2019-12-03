import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Logo extends Component {
    render() {
        return (
            <View>
                <Icon name={'ios-eye'} size={90} color={'green'} style={{ alignSelf: 'center' }}></Icon>
                <Text style={styles.logoText}>EXPENSE</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    logoText: {
        fontStyle: 'italic',
        color: 'green',
        fontSize: 30,
        alignSelf: 'center'
    }
});
