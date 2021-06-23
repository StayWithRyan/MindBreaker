import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'
import ItemsScreen from '../screens/ItemsScreen'

const ItemsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Items: ItemsScreen,
});

export default createAppContainer(ItemsNavigator);