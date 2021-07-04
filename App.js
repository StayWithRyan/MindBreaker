import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import TabNavigator from './navigation/TabNavigator'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import itemsReducer from './store/reducer'
import { getData, storeData, clearData } from './store/localStorage'
import { setState } from './store/action'
import Colors from './constants/colors'

const initialState = {
    categories: [
    ],
    freeId: 0
}

const store = createStore(itemsReducer);

export default function App() {
    const [isFontsLoaded] = useFonts({
        OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
        DancingScript: require('./assets/fonts/DancingScript-Bold.ttf')

    });
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    if (isFontsLoaded && !isDataLoaded) {
        getData().then((data) => {
            if (data === null) {
                storeData(initialState).then(() => {
                    store.dispatch(setState(initialState))
                    setIsDataLoaded(true)
                })
            }
            else {
                store.dispatch(setState(data))
                setIsDataLoaded(true)
            }
        })
    }
    if (!isFontsLoaded || !isDataLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <View style={{ backgroundColor: Colors.pageBackgroundColor, flex: 1 }}>
                <TabNavigator />
            </View>
        </Provider>
    );
}