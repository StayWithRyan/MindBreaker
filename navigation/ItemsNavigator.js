import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'
import ItemsScreen from '../screens/ItemsScreen'
import Colors from '../constants/colors'

const ItemsNavigator = createStackNavigator(
    {
        Items: ItemsScreen,
        Categories: CategoriesScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: Colors.accentColor,
            cardStyle: { backgroundColor: '#d11313' }
        },
        initialRouteName: 'Categories'
    }
);

export default createAppContainer(ItemsNavigator);