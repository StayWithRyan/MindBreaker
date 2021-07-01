import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import EditCategoryScreen from '../screens/EditCategoryScreen';
import AddCategoryScreen from '../screens/AddCategoryScreen';

import ItemsScreen from '../screens/ItemsScreen';
import Colors from '../constants/colors';

const ItemsNavigator = createStackNavigator(
    {
        Items: ItemsScreen,
        Categories: CategoriesScreen,
        EditCategory: EditCategoryScreen,
        AddCategory: AddCategoryScreen,
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
            headerTintColor: Colors.mainTextColor,
            cardStyle: {
                backgroundColor: Colors.pageBackgroundColor,
            }
        },
        initialRouteName: 'Categories'
    }
);

export default createAppContainer(ItemsNavigator);