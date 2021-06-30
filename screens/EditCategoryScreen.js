import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSelector, useDispatch } from 'react-redux';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { updateCategory } from '../store/action'

const EditCategoryScreen = props => {
    return (
        <Text>Edit</Text>
    );
}

EditCategoryScreen.navigationOptions = {
    headerTitle: "Edit category"
}


const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: Colors.cardColor,
        borderRadius: 15,
        justifyContent: 'center',
        height: 70,
        marginTop: 10,
        marginHorizontal: 10
    },
    rowBack: {
        flex: 1,
        alignItems: 'center',
    },
    backRightBtn: {
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    backRightBtnLeft: {
        backgroundColor: '#6380f6',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#bbbbbb',
        right: 0,
    },
    category: {
        color: Colors.mainTextColor,
        fontSize: 25,
        fontFamily: 'OpenSans'
    }
});

export default EditCategoryScreen;