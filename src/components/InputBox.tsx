import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';
import fontSelector from '../utils/FontSelectors';
import colors from '../constants/colors';
import { UserIcon, Mail } from '../assets/svgs';

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 10
    },
    headingText: {
        fontFamily: fontSelector('regular'),
        fontSize: 13,
        lineHeight: 19.5,
        color: colors.grey1,
        marginBottom: 5,
    },
    mainBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        height: 38,
        width: 38,
        backgroundColor: colors.grey5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.grey4,
    },
    inputContainer: {
        height: 38,
        width: '89.3%',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: colors.grey4,
        borderRightColor: colors.grey4,
        borderBottomColor: colors.grey4,
    },
    inputTextStyle: {
        fontFamily: fontSelector('regular'),
        fontSize: 13,
        lineHeight: 18,
        color: colors.grey2,
        height: 35,
    }
})

const InputBox = ({ title, onTextChange, value, password=false, icon }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>{title}</Text>
            <View style={styles.mainBox}>
                <View style={styles.iconContainer}>
                    {icon}
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={(text) => onTextChange(text)}
                        value={value}
                        style={styles.inputTextStyle}
                        secureTextEntry={password}
                    />
                </View>
            </View>
        </View>
    )
}

export default InputBox