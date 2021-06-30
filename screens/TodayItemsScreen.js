import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//import {doSomething} from '../store/action'

const TodayItemsScreen = props => {

    return <View>
        <Text>Susu</Text>
        <Button onPress={() => {
            props.navigation.navigate('TodayItemActions')
        }} title="Go to items"></Button>
    </View>
}

TodayItemsScreen.navigationOptions = (navigationData) => {
    //const selectedItem = navigationData.navigation.getParam('categoryId')

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