import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors'
const OutlinedTextInput = props => {
    return (
        <View style={styles.inputCard}>
            <TextInput keyboardAppearance='dark' style={styles.input} {...props} />
        </View>
    );
}


const styles = StyleSheet.create({
    inputCard: {
        alignItems: 'stretch',
        backgroundColor: Colors.cardColor,
        borderRadius: 15,
        justifyContent: 'center',
        height: 70,
        margin: 10,
        borderWidth: 0.75,
        borderColor: 'white'
    },
    input: {
        flex: 1,
        height: 40,
        margin: 12,
        color: Colors.mainTextColor,
        fontSize: 25,
        fontFamily: 'OpenSans',
        textAlign: 'center'
    }
});

export default OutlinedTextInput;