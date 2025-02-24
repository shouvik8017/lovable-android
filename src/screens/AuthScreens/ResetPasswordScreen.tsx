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
import { Password } from '../../assets/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, showErrorPopUp, showSuccessPopUp } from '../../reduxComponents/actions';
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

const ResetPasswordScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.reducer.authReducers.loading);
    const resetPasswordData = useSelector((state) => state.reducer.authReducers.resetPasswordData);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setEmail(props.route.params.email)
        if (resetPasswordData !== null) {
            if (resetPasswordData.status) {
                dispatch(showSuccessPopUp(resetPasswordData.message))
                navigation.navigate('LoginScreen');
                // setVerificationCodeSend(verificationData.data.verification_code)
            }
            else {
                dispatch(showErrorPopUp(resetPasswordData.message))
            }
        }
    }, [resetPasswordData])

    const onTextPasswordChange = (text: string) => {
        setPassword(text)
    }

    const onTextConfirmPasswordChange = (text: string) => {
        setConfirmPassword(text)
    }

    const onSubmitPress = () => {
        if (password === '') {
            dispatch(showErrorPopUp('Please enter your Password'))
            Alert.alert('Please enter your Password');
        }
        else if (confirmPassword === '') {
            dispatch(showErrorPopUp('Please confirm your Password'))
            Alert.alert('Please confirm your Password');
        }
        else if (password !== confirmPassword) {
            dispatch(showErrorPopUp('The password and confirm password mismatched'));
            Alert.alert('The password and confirm password mismatched');
        }
        else {
            var data = {
                email: email,
                password: password,
            }
            console.log(data);
            
            dispatch(resetPassword(data));
            // dispatch(loginUser(data))
        }
    }

    return (
        <>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <AuthHeader />
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingText}>Reset Password</Text>
                            <View style={styles.dashStyle} />
                        </View>
                        <View style={styles.mainContent}>
                        <InputBox
                                title="Password"
                                onTextChange={onTextPasswordChange}
                                value={password}
                                password={true}
                                icon={<Password />}
                            />
                            <InputBox
                                title="Confirm Password"
                                onTextChange={onTextConfirmPasswordChange}
                                value={confirmPassword}
                                password={true}
                                icon={<Password />}
                            />
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
                            onButtonPress1={()=> onSubmitPress()}
                        />

                    </View>
                    :
                    <Loader />
            }
        </>
    );
}

export default ResetPasswordScreen;