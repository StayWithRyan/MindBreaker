import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateItem } from '../store/action';

import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import OutlinedTextInput from '../components/OutlinedTextInput';
import Colors from '../constants/colors';

const EditItemScreen = props => {
    const dispatch = useDispatch();

    const categoryId = props.navigation.state.params.categoryId;
    const itemId = props.navigation.state.params.itemId;
    const itemName = props.navigation.state.params.itemName;
    const itemDescription = props.navigation.state.params.itemDescription;

    const [name, setName] = useState(itemName);
    const [description, setDescription] = useState(itemDescription);
    const onClose = () => {
        props.navigation.goBack();
    }

    const onUpdate = () => {
        dispatch(updateItem(categoryId, itemId, name, description));
        props.navigation.goBack();
    }

    return (
        <View>
            <OutlinedTextInput value={name} onChangeText={setName} autoFocus placeholder='name' placeholderTextColor={Colors.secondTextColor} />
            <OutlinedTextInput value={description} onChangeText={setDescription} placeholder='description' placeholderTextColor={Colors.secondTextColor} />
            <View style={styles.buttons}>

                <OutlinedButton onPress={onClose} title='Close' />
                <FilledButton onPress={onUpdate} title='Update' />
            </View>
        </View>
    );
}

EditItemScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.state.params.itemName
    }
};


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    }
});

export default EditItemScreen;