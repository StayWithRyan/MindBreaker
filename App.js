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
            name: "Not archived category",
            items: [
                {
                    id: 2,
                    name: 'Word',
                    description: 'слово',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: false
                },
                {
                    id: 3,
                    name: 'Crown',
                    description: 'корона',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: false
                }
            ]
        },
        {
            id: 4,
            name: "Half arcvhived category",
            items: [
                {
                    id: 5,
                    name: 'useState',
                    description: 'state management',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: false
                },
                {
                    id: 6,
                    name: 'useEffect',
                    description: 'side effects',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: false
                },
                {
                    id: 7,
                    name: 'redux',
                    description: 'archived',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: true
                }
            ]
        },
        {
            id: 8,
            name: "Archived category",
            items: [
                {
                    id: 9,
                    name: 'Word',
                    description: 'a1',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: true
                },
                {
                    id: 10,
                    name: 'Word',
                    description: 'a2',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: true
                }
            ]
        },
    ],
    todayItems: [6, 7],
    freeId: 8
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
            <View style={{backgroundColor: Colors.pageBackgroundColor, flex: 1}}>
                <TabNavigator />
            </View>
        </Provider>
    );
}