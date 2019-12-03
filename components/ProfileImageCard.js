import React, { Component } from 'react';
import { View, Image, Button, Alert, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default class ProfileImageCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.insideContainer}>
                    <View style={{flex: 1,justifyContent: 'space-around'  }}>
                        <View>
                            <Text style={styles.imageText}>Dyane Johnson  </Text>
                            <Text style={{ color: 'white' }}>________________________</Text>
                        </View>
                        <View>
                            <Text style={{color: 'white'}}>Current Balance  </Text>
                            <Text style={styles.amountText}>$777</Text>
                        </View>
                    </View>
                </View>

                <Image source={require('../assets/rock.png')} style={styles.imageContainer} />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        marginBottom: 10,
        backgroundColor: 'white',
        height: HEIGHT * 0.3,
        flexDirection: "column",
    },
    insideContainer: {
        height: HEIGHT * 0.25,
        backgroundColor: '#4844EB',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingTop: 30,
        paddingHorizontal: 10
    },
    imageText: {
        fontSize: 20,
        color: 'white'
    },
    amountText: {
        fontSize: 20,
        color: 'yellow'
    },
    imageContainer: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: 20,
        bottom: 10,
        borderRadius: 30
    }
})