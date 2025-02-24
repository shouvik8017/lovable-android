import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import fontSelector from '../../utils/FontSelectors';
import colors from '../../constants/colors';
import ButtonsContainer from '../../components/ButtonsContainer';
import InputBox from '../../components/InputBox';
import { BlankCheckbox, Checkedbox, Mail, Password } from '../../assets/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginUserSuccess, sendPasswordResetCode, showErrorPopUp, showSuccessPopUp } from '../../reduxComponents/actions';
import Loader from '../../components/Loader';

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
        paddingHorizontal: 30,
    },
    buttonStyle1: {
        backgroundColor: colors.pink,
        width: '100%'
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
        width: '68%',
        backgroundColor: colors.grey4
    },
    mainContent: {
        marginTop: 15,
    },
    lowerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lowerSubContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lowerContentText: {
        fontFamily: fontSelector('regular'),
        fontSize: 12,
        lineHeight: 18,
        color: colors.black,
        marginLeft: 5
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
    }
})

const ForgotPasswordScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.reducer.authReducers.loading);
    const verificationData = useSelector((state) => state.reducer.authReducers.passwordResetCode);

    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationCodeSend, setVerificationCodeSend] = useState('');

    useEffect(() => {
        if (verificationData !== null) {
            if (verificationData.status) {
                dispatch(showSuccessPopUp(verificationData.message))
                //navigation.navigate('OTPScreen', {email: email});
                setVerificationCodeSend(verificationData.data.verification_code)
            }
            else {
                dispatch(showErrorPopUp(verificationData.message))
            }
        }
    }, [verificationData])

    const onTextEmailChange = (text: string) => {
        setEmail(text)
    }

    const onVerificationCodeChange = (text: string) => {
        setVerificationCode(text)
    }

    const onSubmitPress = () => {
        if (email === '') {
            dispatch(showErrorPopUp('Please enter your Email-ID'));
            Alert.alert('Please enter your Email-ID');
        }
        // else if (password === '') {
        //     dispatch(showErrorPopUp('Please enter your Password'))
        // }
        // else if (password.length < 8) {
        //     dispatch(showErrorPopUp('The password must be at least 8 characters'))
        // }
        else {
            var data = {
                email: email
            }
            dispatch(sendPasswordResetCode(data));
            // dispatch(loginUser(data))
        }
    }

    const onSubmitPress1 = () => {
        if (verificationCode === '') {
            dispatch(showErrorPopUp('Please enter your Verification code'))
            Alert.alert('Please enter your Verification code');
        }
        // else if (password === '') {
        //     dispatch(showErrorPopUp('Please enter your Password'))
        // }
        // else if (password.length < 8) {
        //     dispatch(showErrorPopUp('The password must be at least 8 characters'))
        // }
        else {
            console.log(verificationCodeSend, verificationCode);
            
            if(verificationCodeSend != verificationCode){
                dispatch(showErrorPopUp('Verification code mismatched'))
                Alert.alert('Verification code mismatched');
            }
            else {
                navigation.navigate('ResetPasswordScreen', {email: email})
            }
        }
    }

    return (
        <>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <AuthHeader />
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingText}>Forgot Password</Text>
                            <View style={styles.dashStyle} />
                        </View>
                        <View style={styles.mainContent}>
                            <InputBox
                                title="Email ID"
                                onTextChange={onTextEmailChange}
                                value={email}
                                icon={<Mail />}
                            />
                            {
                                verificationData?.data?.verification_code &&
                                <InputBox
                                    title="Verification Code"
                                    onTextChange={onVerificationCodeChange}
                                    value={verificationCode}
                                    icon={<Password />}
                                />
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
            {
                !isLoading ?
                    <View style={{ paddingHorizontal: 20, backgroundColor: '#FFF' }}>
                        <ButtonsContainer
                            buttonText1='Submit'
                            buttonStyle1={styles.buttonStyle1}
                            buttonTextColor1={colors.white}
                            onButtonPress1={() => verificationCode !== '' ? onSubmitPress1() : onSubmitPress()}
                        />

                    </View>
                    :
                    <Loader />
            }
        </>
    );
}

export default ForgotPasswordScreen;