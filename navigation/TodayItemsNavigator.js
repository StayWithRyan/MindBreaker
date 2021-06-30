import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TodayItemsScreen from '../screens/TodayItemsScreen'
import TodayItemActionsScreen from '../screens/TodayItemActionsScreen'
import Colors from '../constants/colors'

const TodayItemsNavigator = createStackNavigator(
    {
        TodayItems: TodayItemsScreen,
        TodayItemActions: TodayItemActionsScreen,
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
        initialRouteName: 'TodayItems',
    }
);

export default createAppContainer(TodayItemsNavigator);