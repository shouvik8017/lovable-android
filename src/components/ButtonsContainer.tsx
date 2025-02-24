import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import fontSelector from '../utils/FontSelectors';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: colors.white,
        // height: '20%'
    },
    buttonStyle: {
        alignItems: 'center',
        paddingVertical: 10
    },
    buttonText: {
        fontFamily: fontSelector('semi-bold'),
        fontSize: 13,
        lineHeight: 19.5
    }
})

const ButtonsContainer = ({
    buttonText1,
    buttonText2,
    buttonStyle1,
    buttonStyle2,
    buttonTextColor1,
    buttonTextColor2,
    onButtonPress1,
    onButtonPress2,
}) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={()=> onButtonPress1()} style={[styles.buttonStyle, buttonStyle1]}>
                <Text style={[styles.buttonText, { color: buttonTextColor1 }]}>{buttonText1}</Text>
            </TouchableOpacity>
            {
                buttonText2 &&
                <TouchableOpacity onPress={()=> onButtonPress2()} style={[styles.buttonStyle, buttonStyle2]}>
                    <Text style={[styles.buttonText, { color: buttonTextColor2 }]}>{buttonText2}</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default ButtonsContainer;