import React from 'react';
import {
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
} from 'react-native';
import { useSelector } from 'react-redux';
import { BigCircle, HeaderImage, SmallCircle } from '../assets/svgs';

const styles = StyleSheet.create({
    backgroungImageStyle: { height: '65%', width: '100%', alignItems: 'center' }
})

const AuthHeader = () => {
    return (
        <ImageBackground
            source={require('../assets/images/HeaderBackground.png')}
            style={styles.backgroungImageStyle}
            resizeMode='cover'
        >
            <HeaderImage style={{ marginTop: 20 }} />
            <BigCircle style={{ position: 'absolute', left: 46, top: 62 }} />
            <BigCircle style={{ position: 'absolute', left: 299, top: 119 }} />
            <BigCircle style={{ position: 'absolute', left: 32, top: 184 }} />
            <SmallCircle style={{ position: 'absolute', left: 89, top: 143 }} />
            <SmallCircle style={{ position: 'absolute', left: 269, top: 179 }} />
        </ImageBackground>
    );
}

export default AuthHeader;