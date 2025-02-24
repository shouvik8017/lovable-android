import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import fontSelector from '../utils/FontSelectors';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    mainContainer: { 
        position: 'absolute', 
        bottom: 0, 
        height: '4%', 
        width: '100%', 
        backgroundColor: colors.green, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    textStyle: { 
        fontFamily: fontSelector('regular'), 
        fontSize: 12, 
        color: colors.white 
    }
})

const SuccessPopUp = ({successMessage}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>{successMessage}</Text>
        </View>
    )
}

export default SuccessPopUp;
