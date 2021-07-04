import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCategory } from '../store/action';
import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import OutlinedTextInput from '../components/OutlinedTextInput';

const AddCategoryScreen = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const onClose = () => {
        props.navigation.goBack();
    }

    const onAdd = () => {
        dispatch(addCategory(name));
        props.navigation.goBack();
    }

    return (
        <View>
            <OutlinedTextInput value={name} onChangeText={setName} autoFocus />
            <View style={styles.buttons}>

                <OutlinedButton onPress={onClose} title='Close' />
                <FilledButton onPress={onAdd} title='Add' />
            </View>
        </View>
    );
}

AddCategoryScreen.navigationOptions = {
    headerTitle: "New category"
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    }
});

export default AddCategoryScreen;
