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
        {
            id: 1,
            name: "C1",
            items: [
                {
                    id: 2,
                    name: 'C1I1',
                    description: 'слово',
                    refreshes: [
                        "06/01/2021",
                        "06/02/2021",
                        "06/03/2021",
                        "06/04/2021",
                        "06/05/2021",
                        "06/05/2021"
                    ],
                    isArchived: false,
                    skippedDate: "06/03/2021"
                }
            ]
        }
    ],
    freeId: 11
}
console.log("==============================================================================")

const store = createStore(itemsReducer);

export default function App() {
    const [isFontsLoaded] = useFonts({
        OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
        DancingScript: require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
        Lobster: require('./assets/fonts/Lobster-Regular.ttf')

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