import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors'
import { SwipeListView } from 'react-native-swipe-list-view';
import { SimpleLineIcons, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const SwipeList = props => {

    const renderItem = data => {
        return <TouchableHighlight
            onPress={
                () => {
                    props.onPress(data)
                }
            }
            style={styles.rowFront}
            underlayColor={Colors.cardColor}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                {
                    !props.withDescription &&
                    <Feather style={{
                        position: 'absolute',
                        left: 10,
                        top: props.withDescription ? 0 : -10
                    }} name="folder" size={20} color="white" />
                }
                {
                    props.withDescription &&
                    <MaterialCommunityIcons style={{
                        position: 'absolute',
                        left: 10,
                        top: props.withDescription ? 0 : -10
                    }} name="target" size={25} color="white" />
                }
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Text style={styles.mainText}>{data.item.name}</Text>
                    {
                        props.withDescription &&
                        <Text style={styles.secondText}>{data.item.description}</Text>
                    }
                </View>
            </View>
        </TouchableHighlight>
    };

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={
                    () => {
                        props.onEdit(data)
                    }
                }
            >
                <SimpleLineIcons name="pencil" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={
                    () => {
                        props.onDelete(data)
                    }
                }
            >
                <FontAwesome name="trash-o" size={35} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SwipeListView
            data={props.data}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            disableRightSwipe={true}
            keyExtractor={item => item.id.toString()}
        />
    );
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
    mainText: {
        color: Colors.mainTextColor,
        fontSize: 25,
        fontFamily: 'OpenSans'
    },
    secondText: {
        color: Colors.secondTextColor,
        fontSize: 15,
        fontFamily: 'OpenSans'
    }
});

export default SwipeList;