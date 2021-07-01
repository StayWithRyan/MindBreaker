import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { StyleSheet } from 'react-native';
import SwipeList from '../components/SwipeList';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../store/action';
const ItemsScreen = props => {
    const dispatch = useDispatch();
    const categoryId = props.navigation.state.params.categoryId;
    const category = useSelector((state) => {
        return state
    }).categories.find(category => category.id == categoryId);
    return (
        <SwipeList
            withDescription
            data={category.items}
            onEdit={(data) => {
                props.navigation.navigate('EditItem', { categoryId, itemId: data.item.id, itemName: data.item.name, itemDescription: data.item.description })
            }}
            onDelete={(data) => {
                dispatch(deleteItem(categoryId, data.item.id));
            }}
        />
    );
}

ItemsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.state.params.categoryName,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item iconName='ios-add-sharp' onPress={() => {
                    navigationData.navigation.navigate('AddItem', { categoryId: navigationData.navigation.state.params.categoryId })
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ItemsScreen;