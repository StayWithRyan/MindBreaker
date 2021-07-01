import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TodayItemsScreen = props => {

    return <View>
        <Text>Susu</Text>
        <Button onPress={() => {
            props.navigation.navigate('TodayItemActions')
        }} title="Go to items"></Button>
    </View>
}

TodayItemsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'MindBreaker'
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TodayItemsScreen;