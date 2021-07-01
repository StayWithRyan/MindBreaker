import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateCategory } from '../store/action';

import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import OutlinedTextInput from '../components/OutlinedTextInput';

const EditCategoryScreen = props => {
    const dispatch = useDispatch();

    const categoryId = props.navigation.state.params.categoryId;
    const categoryName = props.navigation.state.params.categoryName;

    const [name, setName] = useState(categoryName);
    const onClose = () => {
        props.navigation.goBack();
    }

    const onUpdate = () => {
        dispatch(updateCategory(categoryId, name));
        props.navigation.goBack();
    }

    return (
        <View>
            <OutlinedTextInput value={name} onChangeText={setName} autoFocus />
            <View style={styles.buttons}>

                <OutlinedButton onPress={onClose} title='Close' />
                <FilledButton onPress={onUpdate} title='Update' />
            </View>
        </View>
    );
}

EditCategoryScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.state.params.categoryName
    }
};


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    }
});

export default EditCategoryScreen;