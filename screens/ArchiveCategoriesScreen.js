import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateCategoryItemsIsArchived } from '../store/action';
import SwipeListWithBack from '../components/SwipeListWithBack';
import Colors from '../constants/colors';

const ArchiveCategoriesScreen = props => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => {
        return state
    }).categories;
    const categoriesWithArchivedItems = [];
    categories.forEach(category => {
        if (category.items.some((item) => item.isArchived)) {
            categoriesWithArchivedItems.push(category)
        }
    });

    if (categoriesWithArchivedItems.length === 0) {
        return <View style={styles.emptyBox}>
            <Text style={styles.emptyText} >Empty</Text>
        </View>
    }

    return (
        <SwipeListWithBack
            data={categoriesWithArchivedItems}
            onPress={(data) => {
                props.navigation.navigate('ArchiveItems', { categoryId: data.item.id, categoryName: data.item.name })
            }}
            onBack={(data) => {
                dispatch(updateCategoryItemsIsArchived(data.item.id, false))
            }}
        />
    );
}

ArchiveCategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Archive"
    }
}

const styles = StyleSheet.create({
    emptyBox: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyText: {
        textAlign: 'center', color: Colors.secondTextColor,
        fontSize: 25,
        fontFamily: 'OpenSans'
    }
});

export default ArchiveCategoriesScreen;