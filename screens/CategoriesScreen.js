import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSelector, useDispatch } from 'react-redux';
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { deleteCategory } from '../store/action'

const CategoriesScreen = props => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => {
        return state
    }).categories;

    const renderItem = data => {
        return <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={Colors.cardColor}
        >
            <View>
                <Text style={styles.category}>{data.item.name}</Text>
            </View>
        </TouchableHighlight>
    };

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={
                    () => {
                        props.navigation.navigate('EditCategory', { category: data.item })
                        rowMap[data.item.id].closeRow();
                    }
                }
            >
                <SimpleLineIcons name="pencil" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={
                    () => {
                        dispatch(deleteCategory(data.item.id));
                    }
                }
            >
                <FontAwesome name="trash-o" size={35} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SwipeListView
            data={categories}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            disableRightSwipe={true}
            keyExtractor={item => item.id.toString()}
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
    rowFront: {
        alignItems: 'center',
        backgroundColor: Colors.cardColor,
        borderRadius: 15,
        justifyContent: 'center',
        height: 70,
        marginTop: 10,
        marginHorizontal: 10,
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

export default CategoriesScreen;