import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'

import ItemsNavigator from './ItemsNavigator'
import TodayItemsNavigator from './TodayItemsNavigator'
import ArchiveNavigator from './ArchiveNavigator'

const TabNavigator = createBottomTabNavigator(
    {
        TodayItemsNavigator: {
            screen: TodayItemsNavigator, navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-restaurant' size={35} color={tabInfo.tintColor} />
                }
            }
        },
        ItemsNavigator: {
            screen: ItemsNavigator, navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='airplane-outline' size={35} color={tabInfo.tintColor} />
                }
            }
        },
        ArchiveNavigator: {
            screen: ArchiveNavigator, navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='albums-sharp' size={35} color={tabInfo.tintColor} />
                }
            }
        }
    },
    {
        initialRouteName: 'ItemsNavigator',
        tabBarOptions: {
            inactiveTintColor: 'grey',
            activeTintColor: 'purple',
            showLabel: false
        }
    }
);

export default createAppContainer(TabNavigator);