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
                props.navigation.navigate('Items', { categoryId: data.item.id, categoryName: data.item.name})
            }}
            onEdit={(data) => {
                props.navigation.navigate('EditCategory', { categoryId: data.item.id, categoryName: data.item.name })
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