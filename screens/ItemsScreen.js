import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors'

const ItemsScreen = props => {
    //console.log('ItemsScreen props', props.navigation.state.params.categoryId)
    //console.log('ItemsScreen props', props.navigation.getParam('categoryId'))
    return <View>
        <Text style={styles.screen}>ItemsScreen</Text>
        <Button onPress = {() => {props.navigation.goBack()}}title="Go back"></Button>
    </View>
}

ItemsScreen.navigationOptions = (navigationData) => {
    const selectedItem = navigationData.navigation.getParam('categoryId')


    return {
        headerTitle: selectedItem.toString(),
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.accentColor
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