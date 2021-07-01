import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory } from '../store/action';
import SwipeList from '../components/SwipeList'
const CategoriesScreen = props => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => {
        return state
    }).categories;

    return (
        <SwipeList
            data={categories}
            onPress={(data) => {
                props.navigation.navigate('Items', { category: data.item })
            }}
            onEdit={(data) => {
                props.navigation.navigate('EditCategory', { category: data.item })
            }}
            onDelete={(data) => {
                dispatch(deleteCategory(data.item.id));
            }}
        />
    );
}

CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Categories",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item iconName='ios-add-sharp' onPress={() => {
                    navigationData.navigation.navigate('AddCategory')
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({

});

export default CategoriesScreen;