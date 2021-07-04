import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/colors';
import ExpandingSwipeList from '../components/ExpandingSwipeList';
import { isForToday } from '../helpers/refreshTimeHelper';
import { getDate } from '../helpers/dateHelder';

const TodayItemsScreen = props => {
    const categories = useSelector((state) => {
        return state;
    }).categories;
    let categoriesForToday = JSON.parse(JSON.stringify(categories));
    categoriesForToday.forEach(category => {
        const categoryItems = JSON.parse(JSON.stringify(category.items));
        category.items = [];
        categoryItems.forEach(item => {
            const timesRefreshed = item.refreshes.length;
            const isItemForToday = isForToday(timesRefreshed, timesRefreshed > 0 ? item.refreshes[timesRefreshed - 1] : null);
            const isSkipped = item.skippedDate === getDate();
            const isArchived = item.isArchived;
            if (isItemForToday && !isSkipped && !isArchived) {
                category.items.push(item);
            }
        });
    });
    categoriesForToday = categoriesForToday.filter(category => category.items.length !== 0);

    const renderCategory = (data) => {
        const category = data.item;
        return <ExpandingSwipeList
            title={category.name}
            data={category.items}
            withDescription
            onPress={(data) => {
                props.navigation.navigate('TodayItemActions', { categoryId: category.id, itemId: data.item.id, itemName: data.item.name, itemDescription: data.item.description })
            }}
        />
    }

    if (categoriesForToday.length === 0) {
        return <View style={styles.emptyBox}>
            <Text style={styles.emptyText} >Empty</Text>
        </View>
    }

    return <FlatList
        data={categoriesForToday}
        renderItem={renderCategory}
        keyExtractor={category => category.id.toString()}
    />
}

TodayItemsScreen.navigationOptions = {
    headerTitle: "MindBreaker",
    headerTitleStyle: {
        fontSize: 35,
        fontFamily: 'DancingScript'
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

export default TodayItemsScreen;
