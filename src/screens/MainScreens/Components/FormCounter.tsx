import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    TouchableOpacity,
    FlatList,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import fontSelector from '../../../utils/FontSelectors';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    numberMainContainer: {
        alignItems: 'center',
    },
    numberSubContainer: {
        backgroundColor: colors.grey4,
        paddingHorizontal: 20.5,
        paddingVertical: 15,
        borderRadius: 30
    },
    separatorLine: {
        position: 'absolute',
        top: 25,
        left: 20,
        backgroundColor: colors.grey4,
        height: 1,
        width: Dimensions.get('screen').width,
        alignSelf: 'center',
        zIndex: -1
    },
    numberText: {
        fontFamily: fontSelector('regular'),
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
        color: colors.grey7
    },
    numberTitleText: {
        fontFamily: fontSelector('regular'),
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 18,
        color: colors.grey8,
        textAlign: 'center',
        marginTop: 5
    },
})

const FormCounter = ({ formArray }) => {

    const renderItem = ({ item, index }) => (
        <View style={[styles.numberMainContainer, index === 0 && { marginLeft: 20 }, index !== formArray.length - 1 && { marginRight: 40 }]}>
            <View style={[styles.separatorLine, item.selected && { backgroundColor: colors.pink }]} />
            <View style={[styles.numberSubContainer, item.selected && { backgroundColor: colors.pink }]}>
                <Text style={[styles.numberText, item.selected && { color: colors.grey6, fontWeight: '600', paddingHorizontal: 1.5 }]}>{item.id}</Text>
            </View>
            <Text style={[styles.numberTitleText, item.selected && { color: colors.grey1 }]}>{item.title}</Text>
        </View>
    );

    return (
        <FlatList
            data={formArray}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default FormCounter