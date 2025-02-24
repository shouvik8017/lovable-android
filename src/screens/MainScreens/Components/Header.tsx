import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import colors from '../../../constants/colors';
import { HamburgerMenu, Search } from '../../../assets/svgs';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.darkRed,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

const Header = () => {
    return(
        <View style={styles.mainContainer}>
            <HamburgerMenu />
            <Search />
        </View>
    )
}

export default Header;