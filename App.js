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


const initialState = {
    categories: [
        {
            id: 1,
            name: "English",
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
            name: "React",
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
                    description: 'complex state management',
                    refreshes: [
                        '2021-06-21'
                    ],
                    isArchived: true
                }
            ]
        }
    ],
    todayItems: [6, 7]
}
console.log("==============================================================================")

const store = createStore(itemsReducer);

export default function App() {
    const [isFontsLoaded] = useFonts({
        OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
    });
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    if (isFontsLoaded && !isDataLoaded) {
        getData().then((data) => {
            if (data === null) {
                storeData(initialState).then(() => {
                    setIsDataLoaded(true)
                    store.dispatch(setState(initialState))
                })
            }
            else {
                setIsDataLoaded(true)
                store.dispatch(setState(data))
            }
        })
    }
    if (!isFontsLoaded || !isDataLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <TabNavigator />
        </Provider>
    );
}