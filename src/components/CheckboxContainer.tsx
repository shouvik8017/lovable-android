import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import fontSelector from '../utils/FontSelectors';
import colors from '../constants/colors';
import { BlankCheckbox, Checkedbox } from '..//assets/svgs';

const styles = StyleSheet.create({
    lowerButtonText: {
        fontFamily: fontSelector('regular'),
        fontSize: 12,
        lineHeight: 18,
        color: colors.grey1
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    checkboxSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
})

const CheckboxContainer = ({ data, onCheckboxPress, value }) => {
    return (
        <View style={styles.checkboxContainer}>
            {
                data.map((item, index) => (
                    <TouchableOpacity onPress={() => onCheckboxPress(item.id)} style={styles.checkboxSubContainer}>
                        {
                            item.id === value ?
                                <Checkedbox />
                                :
                                <BlankCheckbox />
                        }
                        <Text style={[styles.lowerButtonText, { marginLeft: 8 }]}>{item.title}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default CheckboxContainer;
