import React from 'react';
import { StyleSheet } from 'react-native';
import SwipeListWithBack from '../components/SwipeListWithBack';
import { useSelector, useDispatch } from 'react-redux';
import { updateItemIsArchived } from '../store/action';

const ArchiveItemsScreen = props => {
    const dispatch = useDispatch();
    const categoryId = props.navigation.state.params.categoryId;
    const category = useSelector((state) => {
        return state;
    }).categories.find(category => category.id == categoryId);
    const archivedItems = [];
    category.items.forEach(item => {
        if (item.isArchived) {
            archivedItems.push(item);
        }
    });

    return (
        <SwipeListWithBack
            withDescription
            data={archivedItems}
            onBack={(data) => {
                dispatch(updateItemIsArchived(categoryId, data.item.id, false))
                if(archivedItems.length == 1){
                    props.navigation.goBack();
                }
            }}
        />
    );
}

ArchiveItemsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.state.params.categoryName
    }
}

export default ArchiveItemsScreen;
