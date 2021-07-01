import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeList from '../components/SwipeList';

const ItemsScreen = props => {
    const category = props.navigation.state.params.category;
    console.log('ItemsScreen props', props.navigation.state.params.category.items)

    return (
        <SwipeList
            withDescription
            data={category.items}
            onPress={(data) => {
                console.log('onPress')
            }}
            onEdit={(data) => {
                console.log('onEdit')
            }}
            onDelete={(data) => {
                console.log('onDelete')
            }}
        />
    );
}

ItemsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.state.params.category.name
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