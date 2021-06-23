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
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         backgroundColor: Colors.primaryColor
        //     },
        //     headerTintColor: Colors.accentColor
        // },
        initialRouteName: 'TodayItems'
    }
);

export default createAppContainer(TodayItemsNavigator);