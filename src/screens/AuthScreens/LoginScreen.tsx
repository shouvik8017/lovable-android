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
    Pressable,
} from 'react-native';
import AuthHeader from '../../components/AuthHeader';
import fontSelector from '../../utils/FontSelectors';
import colors from '../../constants/colors';
import ButtonsContainer from '../../components/ButtonsContainer';
import InputBox from '../../components/InputBox';
import { BlankCheckbox, Checkedbox, Mail, Password } from '../../assets/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginUserSuccess, showErrorPopUp, showSuccessPopUp } from '../../reduxComponents/actions';
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
        width: '83%',
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

const LoginScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.reducer.authReducers.loading);
    const data = useSelector((state) => state.reducer.authReducers.loginUserData);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);

    useEffect(()=>{
        if(data !== null){
            if (data.status) {
                dispatch(showSuccessPopUp(data.message))
                navigation.navigate('OTPScreen', {email: email});
            }
            else{
                dispatch(showErrorPopUp(data.message))
            }
        }
    },[data])

    const onTextEmailChange = (text: string) => {
        setEmail(text)
    }

    const onTextPasswordChange = (text: string) => {
        setPassword(text)
    }

    const onLoginPress = () => {
        if (email === '') {
            dispatch(showErrorPopUp('Please enter your Email-ID'))
            Alert.alert('Please enter your Email-ID');
        }
        else if (password === '') {
            dispatch(showErrorPopUp('Please enter your Password'))
            Alert.alert('Please enter your Password');
        }
        else if (password.length < 8) {
            dispatch(showErrorPopUp('The password must be at least 8 characters'))
            Alert.alert('The password must be at least 8 characters');
        }
        else {
            var data = {
                email: email,
                password: password,
            }

            dispatch(loginUser(data))
        }
    }

    return (
        <>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <AuthHeader />
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingText}>Login</Text>
                            <View style={styles.dashStyle} />
                        </View>
                        <View style={styles.mainContent}>
                            <InputBox
                                title="Email ID"
                                onTextChange={onTextEmailChange}
                                value={email}
                                icon={<Mail />}
                            />
                            <InputBox
                                title="Password"
                                onTextChange={onTextPasswordChange}
                                value={password}
                                password={true}
                                icon={<Password />}
                            />
                        </View>
                        <View style={styles.lowerContent}>
                            <TouchableOpacity
                                onPress={() => setIsRemember(!isRemember)}
                                style={styles.lowerSubContent}
                            >
                                {
                                    isRemember ?
                                        <Checkedbox />
                                        :
                                        <BlankCheckbox />
                                }
                                <Text style={styles.lowerContentText}>Remember Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate('ForgotPasswordScreen')} style={styles.lowerSubContent}>
                                <Text style={styles.lowerContentText}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate('RegistrationScreen')} style={styles.lowerButtonContainer}>
                        <Text style={styles.lowerButtonText}>Don’t Have An Account? <Text style={{ color: colors.pink }}>Sign Up</Text></Text>
                    </Pressable>
                </View>
            </ScrollView>
            {
                !isLoading ?
                    <View style={{paddingHorizontal: 20, backgroundColor: '#FFF'}}>
                        <ButtonsContainer
                            buttonText1='Log In'
                            buttonStyle1={styles.buttonStyle1}
                            buttonTextColor1={colors.white}
                            onButtonPress1={() => onLoginPress()}
                        />
                        <View style={{ height: 18 }} />
                        
                    </View>
                    :
                    <Loader />

            }
        </>
    );
}

export default LoginScreen;