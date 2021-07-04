import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import { useDispatch } from 'react-redux';
import { updateSkippedItem, updateRefreshedItem } from '../store/action';

const TodayItemActionsScreen = props => {
    const specifiedParams = props.navigation.state.params;
    const categoryId = specifiedParams.categoryId;
    const itemId = specifiedParams.itemId;
    const itemName = specifiedParams.itemName;
    const itemDescription = specifiedParams.itemDescription;
    const dispatch = useDispatch();

    const onRefreshed = () => {
        dispatch(updateRefreshedItem(categoryId, itemId));
        props.navigation.goBack();
    }
    const onSkipped = () => {
        dispatch(updateSkippedItem(categoryId, itemId));
        props.navigation.goBack();
    }

    return <View>
        <View style={{ alignItems: 'center', height: '88%' }}>
            <Text style={styles.mainText}>{itemName}</Text>
            <Text style={styles.secondText}>{itemDescription}</Text>
        </View>
        <View style={styles.buttons}>

            <OutlinedButton onPress={onSkipped} title='Skipped' />
            <FilledButton onPress={onRefreshed} title='Refreshed' />
        </View>
    </View >
}

TodayItemActionsScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.state.params.itemName
    }
};

const styles = StyleSheet.create({
    mainText: {
        marginTop: '45%',
        color: Colors.mainTextColor,
        fontSize: 25,
        fontFamily: 'OpenSans',
        width: '80%',
        textAlign: 'center',
    },
    secondText: {
        marginTop: '5%',
        color: Colors.secondTextColor,
        fontSize: 15,
        fontFamily: 'OpenSans',
        width: '90%',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
    }
});

export default TodayItemActionsScreen;
