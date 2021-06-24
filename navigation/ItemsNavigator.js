import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import ItemsScreen from '../screens/ItemsScreen';
import Colors from '../constants/colors';

const ItemsNavigator = createStackNavigator(
    {
        Items: ItemsScreen,
        Categories: CategoriesScreen,
    },
    {
        defaultNavigationOptions: {
            headerTitleStyle: {
                fontSize: 25,
                fontFamily: 'OpenSansBold'
            },
            headerStyle: {
                backgroundColor: Colors.headerColor,
                shadowColor: Colors.headerShadowColor,
            },
            headerTintColor: Colors.headerTextColor,
            cardStyle: {
                backgroundColor: Colors.pageCardColor,
            }
        },
        initialRouteName: 'Categories'
    }
);

export default createAppContainer(ItemsNavigator);