import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ArchiveScreen from '../screens/ArchiveScreen';
import ItemsScreen from '../screens/ItemsScreen';
import Colors from '../constants/colors';

const ArchiveNavigator = createStackNavigator(
    {
        Archive: ArchiveScreen,
    },
    {
        defaultNavigationOptions: {
            headerTitleStyle: {
                fontSize: 25,
                fontFamily: 'OpenSansBold'
            },
            headerStyle: {
                backgroundColor: Colors.headerColor,
                shadowColor: Colors.headerShadowColor
            },
            headerTintColor: Colors.headerTextColor,
            cardStyle: { backgroundColor: Colors.pageCardColor }
        },
        initialRouteName: 'Archive'
    }
);

export default createAppContainer(ArchiveNavigator);