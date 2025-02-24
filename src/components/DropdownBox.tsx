import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import fontSelector from '../utils/FontSelectors';
import colors from '../constants/colors';
import { UserIcon, Mail, DownArrow } from '../assets/svgs';

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
    iconContainer2: {
        height: 38,
        width: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.grey4,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey4,
        borderRightWidth: 1,
        borderRightColor: colors.grey4,
    },
    inputContainer: {
        height: 38,
        width: '79%',
        paddingLeft: 10,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: colors.grey4,
        borderBottomColor: colors.grey4,
    },
    inputTextStyle: {
        fontFamily: fontSelector('regular'),
        fontSize: 13,
        lineHeight: 18,
        color: colors.grey2,
    },
    dropdownContainer: {
        height: '60%',
        width: '89.3%',
        backgroundColor: '#000000cc',
        position: 'absolute',
        top: 72,
        left: 37,
        zIndex: 999,
        paddingLeft: 8,
        paddingRight: 6
    },
    itemContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    itemText: {
        color: colors.white,
        fontFamily: fontSelector('regular'),
        fontSize: 13,
        lineHeight: 18,
    },
    separatorLine: {
        color: colors.white,
        letterSpacing: 5,
        lineHeight: 10
    }
})

const DropdownBox = ({ title, onValueChange, value, icon, data }) => {

    const [showDropdown, setShowDropdown] = useState(false)

    const renderItem = ({ item }) => (
        <TouchableOpacity 
        onPress={() => {
            onValueChange(item)
            setShowDropdown(!showDropdown)
        }} 
        style={styles.itemContainer}
        >
            <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
    )

    const itemSeparatorComponent = () => (
        <Text numberOfLines={1} ellipsizeMode='clip' style={styles.separatorLine}>....................................................................................</Text>
    )

    return (
        <>
            <View style={styles.mainContainer}>
                <Text style={styles.headingText}>{title}</Text>
                <TouchableOpacity onPress={()=> setShowDropdown(!showDropdown)} style={styles.mainBox}>
                    <View style={styles.iconContainer}>
                        {icon}
                    </View>
                    <View style={styles.inputContainer}>
                        <Text
                            style={styles.inputTextStyle}
                        >
                            {value}
                        </Text>
                    </View>
                    <View style={styles.iconContainer2}>
                        <DownArrow />
                    </View>
                </TouchableOpacity>
            </View>
            {
                showDropdown &&
                <View style={styles.dropdownContainer}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        ItemSeparatorComponent={itemSeparatorComponent}
                    />
                </View>
            }
        </>
    )
}

export default DropdownBox;