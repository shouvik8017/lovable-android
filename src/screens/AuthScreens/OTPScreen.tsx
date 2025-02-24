import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OtpInput } from "react-native-otp-entry";
import AuthHeader from '../../components/AuthHeader';
import fontSelector from '../../utils/FontSelectors';
import colors from '../../constants/colors';
import ButtonsContainer from '../../components/ButtonsContainer';
import InputBox from '../../components/InputBox';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginSet, otpVerify, showErrorPopUp, showSuccessPopUp } from '../../reduxComponents/actions';
import Loader from '../../components/Loader';
import { CommonActions } from '@react-navigation/native';

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        height: HEIGHT
    },
    contentContainer: {
        position: 'absolute',
        width: '100%',
        top: '40%',
        paddingHorizontal: 30
    },
    buttonStyle1: {
        backgroundColor: colors.pink,
        width: '100%',

    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingText: {
        fontFamily: fontSelector('semi-bold'),
        fontSize: 14,
        lineHeight: 21,
        color: colors.grey1
    },
    dashStyle: {
        height: 1,
        width: '60%',
        backgroundColor: colors.grey4
    },
    mainContent: {
        marginTop: 15
    },
    lowerButtonContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        alignSelf: 'center',
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingVertical: 10,

    },
    lowerButtonText: {
        fontFamily: fontSelector('regular'),
        fontSize: 12,
        lineHeight: 18,
        color: colors.grey1
    },
    otpContainer: {
        marginTop: 50,
        width: '70%',
        alignSelf: 'center'
    },
    pinCodeContainer: {
        height: 50
    },
})

const OTPScreen = (props) => {

    const { navigation } = props;
    const isLoading = useSelector((state) => state.reducer.authReducers.loading);
    const otpData = useSelector((state) => state.reducer.authReducers.otpData)
    const { email } = props.route.params;
    const [otpText, setOtpText] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (otpData !== null && otpData.status) {
            setToken(otpData.data.token)
        }
    }, [otpData]);

    const setToken = async (token: string) => {
        try {
            await AsyncStorage.setItem('accesstoken', token);
            await AsyncStorage.setItem('isLogin', 'yes');
            var isLogin = await AsyncStorage.getItem('isLogin');
            dispatch(showSuccessPopUp(otpData.message));
            if (isLogin === 'yes') {
                dispatch(isLoginSet(true))
            }
            // navigation.dispatch(
            //     CommonActions.reset({
            //         index: 0,
            //         routes: [
            //             {
            //                 name: 'MainNavigation',
            //             },
            //         ],
            //     })
            // );
            // navigation.navigate('ProfileCreation');
        }
        catch (e) {
            console.error('token--->>>>', e);
            dispatch(showErrorPopUp(otpData.message))
        }
    }

    const onOtpVerify = (text: string) => {
        if (text.length === 4) {
            var data = {
                email: email,
                otp: text
            }
            dispatch(otpVerify(data));
        }
    }



    return (
        <>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <AuthHeader />
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingText}>OTP Verification</Text>
                            <View style={styles.dashStyle} />
                        </View>
                        <View style={styles.mainContent}>
                            <OtpInput
                                numberOfDigits={4}
                                focusColor={colors.pink}
                                focusStickBlinkingDuration={500}
                                onTextChange={(text) => console.log(text)}
                                onFilled={(text) => {
                                    console.log(`OTP is ${text}`)
                                    setOtpText(text)
                                    onOtpVerify(text);
                                }}
                                theme={{
                                    containerStyle: styles.otpContainer,
                                    pinCodeContainerStyle: styles.pinCodeContainer
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            {
                !isLoading ?
                    <View style={{ paddingHorizontal: 20, backgroundColor: '#FFF' }}>
                        <ButtonsContainer
                            buttonText1='Verify'
                            buttonStyle1={styles.buttonStyle1}
                            buttonTextColor1={colors.white}
                            onButtonPress1={() => onOtpVerify(otpText)}
                        />
                    </View>
                    :
                    <Loader />

            }
        </>
    );
}

export default OTPScreen;