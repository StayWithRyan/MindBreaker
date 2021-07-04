import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import ItemsNavigator from './ItemsNavigator';
import TodayItemsNavigator from './TodayItemsNavigator';
import ArchiveNavigator from './ArchiveNavigator';

const TabNavigator = createBottomTabNavigator(
    {
        TodayItemsNavigator: {
            screen: TodayItemsNavigator, navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Feather name='target' size={35} color={tabInfo.tintColor} />
                }
            }
        },
        ItemsNavigator: {
            screen: ItemsNavigator, navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <MaterialCommunityIcons name='text-box-plus-outline' size={35} color={tabInfo.tintColor} />
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
            inactiveTintColor: Colors.tabInactiveTintColor,
            activeTintColor: Colors.tabActiveTintColor,
            showLabel: false,
            style: {
                backgroundColor: Colors.tabColor,
                borderTopColor: Colors.tabBordedColor
            }
        }
    }
);

export default createAppContainer(TabNavigator);