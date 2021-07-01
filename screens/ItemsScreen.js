import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ItemsScreen = props => {
    //console.log('ItemsScreen props', props.navigation.state.params.categoryId)
    //console.log('ItemsScreen props', props.navigation.getParam('categoryId'))
    return <View>
        <Text>ItemsScreen</Text>
        <Button onPress = {() => {props.navigation.goBack()}}title="Go back"></Button>
    </View>
}

ItemsScreen.navigationOptions = (navigationData) => {
    const selectedItem = navigationData.navigation.getParam('categoryId')

    return {
        headerTitle: 'selectedItem',
        headerTintColor: 'green'
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ItemsScreen;