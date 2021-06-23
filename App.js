import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import ItemsNavigator from './navigation/ItemsNavigator'

console.log("==============================================================================")

export default function App() {
    const [loaded] = useFonts({
        OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <ItemsNavigator/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
