import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, LayoutAnimation } from 'react-native';
import Colors from '../constants/colors'
import { SwipeListView } from 'react-native-swipe-list-view';
import { SimpleLineIcons, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const SwipeList = props => {
    const [isOpen, setIsOpen] = useState(true);

    const renderItem = data => {
        return <TouchableHighlight
            onPress={
                () => {
                    props.onPress && props.onPress(data)
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
                        top: props.withDescription ? 0 : -10,
                        color: Colors.mainButtonColor
                    }} name="folder" size={20} color="white" />
                }
                {
                    props.withDescription &&
                    <MaterialCommunityIcons style={{
                        position: 'absolute',
                        left: 10,
                        top: props.withDescription ? 0 : -10,
                        color: Colors.mainButtonColor
                    }} name="target" size={25} color="white" />
                }
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Text style={styles.mainText} ellipsizeMode='tail' numberOfLines={1}>{data.item.name}</Text>
                    {
                        props.withDescription &&
                        <Text style={styles.secondText} ellipsizeMode='tail' numberOfLines={1}>{data.item.description}</Text>
                    }
                </View>
            </View>
        </TouchableHighlight>
    };

    return <View>
        <TouchableOpacity style={styles.categoryBorder} onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setIsOpen((prevState) => {
                return !prevState
            })
        }}>
            <Text style={styles.categoryText} ellipsizeMode='tail' numberOfLines={1} >{props.title}</Text>
        </TouchableOpacity>
        {
            isOpen
            &&
            <SwipeListView
                data={props.data.sort((a, b) => (a.name > b.name))}
                renderItem={renderItem}
                disableRightSwipe={true}
                disableLeftSwipe={true}
                keyExtractor={item => item.id.toString()}
            />
        }
    </View>
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
        backgroundColor: Colors.mainButtonColor,
        right: 0,
    },
    mainText: {
        color: Colors.mainTextColor,
        fontSize: 25,
        fontFamily: 'OpenSans',
        width: '80%',
        textAlign: 'center'
    },
    secondText: {
        color: Colors.secondTextColor,
        fontSize: 15,
        fontFamily: 'OpenSans',
        width: '90%',
        textAlign: 'center'
    },
    categoryText: {
        color: Colors.mainTextColor,
        fontFamily: 'OpenSans',
        fontSize: 24
    },
    categoryBorder: {
        width: '90%',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: Colors.mainButtonColor
    }
});

export default SwipeList;