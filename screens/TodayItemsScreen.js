import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//import {doSomething} from '../store/action'

const TodayItemsScreen = props => {
    const storedData = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch();
    const toggleDispath = () => {
        //dispatch(doSomething(99))
    }
    console.log('TodayItemsScreen:storedData', storedData)


    const [title, setTitle] = useState('')

    return <View>
        <Text>{title}</Text>
        <Button onPress={() => {
            //toggleDispath();
            //props.navigation.navigate('TodayItemActions')
        }} title="Go to items"></Button>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TodayItemsScreen;