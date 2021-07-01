import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors'
const OutlinedButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ flex: 1, height: 70 }}>
            <View style={{ ...styles.outlinedButton, ...props.buttonStyle }}>
                <Text style={{ ...styles.buttonText, color: Colors.mainTextColor, ...props.textStyle }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    outlinedButton: {
        flex: 1,
        borderRadius: 15,
        borderColor: Colors.mainButtonColor,
        borderWidth: 2,
        height: 50,
        margin: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'OpenSansBold',
        textAlign: 'center'
    }
});

export default OutlinedButton;