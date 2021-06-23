import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Colors from '../constants/colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = props => {
    console.log("props", props)
    return <View>
        <Text>CategoriesScreen</Text>
        <Button onPress={() => {
            props.navigation.navigate('Items', {
                categoryId: 322
            })
        }} title="Go to items"></Button>
    </View>
}

CategoriesScreen.navigationOptions = {
    headerTitle: "ItemsCategories",
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item iconName='ios-star' onPress={() => {
                console.log("add folder")
            }} />
        </HeaderButtons>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;