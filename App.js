import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded] = useFonts({
        OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text style={{ fontFamily: 'OpenSans' }}>Open up App.js to start working on your app!</Text>
            <Text style={{ fontFamily: 'OpenSansBold' }}>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
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
