import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory } from '../store/action';
import SwipeListWithEditAndDelete from '../components/SwipeListWithEditAndDelete';
import Colors from '../constants/colors';
const CategoriesScreen = props => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => {
        return state;
    }).categories;
    const categoriesWithoutArchivedItems = [];
    categories.forEach(category => {
        if (category.items.some((item) => !item.isArchived)) {
            categoriesWithoutArchivedItems.push(category);
        }
    });

    if (categoriesWithoutArchivedItems.length === 0) {
        return <View style={styles.emptyBox}>
            <Text style={styles.emptyText} >Empty</Text>
        </View>
    }

    return (
        <SwipeListWithEditAndDelete
            data={categoriesWithoutArchivedItems}
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

export default CategoriesScreen;