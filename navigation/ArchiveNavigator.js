import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ArchiveCategoriesScreen from '../screens/ArchiveCategoriesScreen';
import ArchiveItemsScreen from '../screens/ArchiveItemsScreen';
import Colors from '../constants/colors';

const ArchiveNavigator = createStackNavigator(
    {
        ArchiveCategories: ArchiveCategoriesScreen,
        ArchiveItems: ArchiveItemsScreen,
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
            headerTintColor: Colors.mainTextColor,
            cardStyle: { backgroundColor: Colors.pageBackgroundColor }
        },
        initialRouteName: 'ArchiveCategories'
    }
);

export default createAppContainer(ArchiveNavigator);