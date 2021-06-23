import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const TodayItemsScreen = props => {
    return <Text style={styles.screen}>TodayItemsScreen</Text>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TodayItemsScreen;