import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Colors from '../constants/colors'

const CategoriesScreen = props => {
    console.log("props", props)
    return <View>
        <Text style={styles.screen}>CategoriesScreen</Text>
        <Button onPress={() => {
            props.navigation.navigate('Items', {
                categoryId: 322
            })
        }} title="Go to items"></Button>
    </View>
}

CategoriesScreen.navigationOptions = {
    headerTitle: "ItemsCategories",
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: Colors.accentColor
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;