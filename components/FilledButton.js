import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const FilledButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{ flex: 1, height: 70 }}>
            <View style={{ ...styles.filledButton, ...props.buttonStyle }}>
                <Text style={{ ...styles.buttonText, color: Colors.pageBackgroundColor, ...props.textStyle }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    filledButton: {
        flex: 1,
        backgroundColor: Colors.mainButtonColor,
        borderRadius: 15,
        height: 50,
        margin: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'OpenSansBold',
        textAlign: 'center'
    }
});

export default FilledButton;
