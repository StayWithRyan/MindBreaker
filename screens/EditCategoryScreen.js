import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../store/action';

import FilledButton from '../components/FilledButton';
import OutlinedButton from '../components/OutlinedButton';
import OutlinedTextInput from '../components/OutlinedTextInput';

const EditCategoryScreen = props => {
    const dispatch = useDispatch();

    const category = props.navigation.state.params.category;

    const [name, setName] = useState(category.name);
    const onClose = () => {
        props.navigation.goBack();
    }

    const onUpdate = () => {
        dispatch(updateCategory(category.id, name));
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
        headerTitle: navigationData.navigation.state.params.category.name
    }
};


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    }
});

export default EditCategoryScreen;