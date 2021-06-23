import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const ItemsScreen = props => {
    return <Text style={styles.screen}>ItemsScreen</Text>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ItemsScreen;