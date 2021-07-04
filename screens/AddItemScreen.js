import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/action';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import OutlinedTextInput from '../components/OutlinedTextInput';
import Colors from '../constants/colors';

const AddItemScreen = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const onClose = () => {
        props.navigation.goBack();
    }

    const onAdd = () => {
        dispatch(addItem(props.navigation.state.params.categoryId, name, description));
        props.navigation.goBack();
    }

    return (
        <View>
            <OutlinedTextInput value={name} onChangeText={setName} autoFocus placeholder='name' placeholderTextColor={Colors.secondTextColor} />
            <OutlinedTextInput value={description} onChangeText={setDescription} placeholder='description' placeholderTextColor={Colors.secondTextColor} />
            <View style={styles.buttons}>
                <OutlinedButton onPress={onClose} title='Close' />
                <FilledButton onPress={onAdd} title='Add' />
            </View>
        </View>
    );
}

AddItemScreen.navigationOptions = {
    headerTitle: "New item"
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    }
});

export default AddItemScreen;
