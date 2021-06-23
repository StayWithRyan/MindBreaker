import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ArchiveScreen from '../screens/ArchiveScreen'
import ItemsScreen from '../screens/ItemsScreen'
import Colors from '../constants/colors'

const ArchiveNavigator = createStackNavigator(
    {
        Archive: ArchiveScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: Colors.accentColor,
            cardStyle: { backgroundColor: 'yellow' }
        },
        initialRouteName: 'Archive'
    }
);

export default createAppContainer(ArchiveNavigator);