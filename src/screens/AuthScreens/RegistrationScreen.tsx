import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    Alert,
    Pressable,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import { pickDocument } from 'react-native-file-access';
import AuthHeader from '../../components/AuthHeader';
import fontSelector from '../../utils/FontSelectors';
import colors from '../../constants/colors';
import ButtonsContainer from '../../components/ButtonsContainer';
import InputBox from '../../components/InputBox';
import { DocIcon, Mail, UserIcon } from '../../assets/svgs';
import CheckboxContainer from '../../components/CheckboxContainer';
import DropdownBox from '../../components/DropdownBox';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { registerUser, registerUserSuccess, showErrorPopUp, showSuccessPopUp } from '../../reduxComponents/actions';
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
        top: '37%',
        paddingHorizontal: 30,
        height: '70%'
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
        width: '65%',
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    checkboxSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    mainContainer1: {
        marginVertical: 10
    },
    headingText1: {
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
        justifyContent: 'center'
    },
    inputTextStyle: {
        fontFamily: fontSelector('regular'),
        fontSize: 13,
        lineHeight: 18,
        color: colors.grey2,
        height: 35,
    }
})

const checkboxData = [
    {
        id: 1,
        title: 'PWD'
    },
    {
        id: 2,
        title: 'NON-PWD'
    }
];

const onBehalfData = [
    {
        id: 1,
        title: 'Self'
    },
    {
        id: 2,
        title: 'Parent'
    },
    {
        id: 3,
        title: 'Sibling'
    },
    {
        id: 4,
        title: 'Friend'
    },
    {
        id: 5,
        title: 'Relative'
    },
    {
        id: 6,
        title: 'Guardian'
    },
    {
        id: 7,
        title: 'Matchmaker/Professional'
    },
]

const RegistrationScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.reducer.authReducers.userData);
    const isLoading = useSelector((state) => state.reducer.authReducers.loading);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [checkboxVal, setCheckboxVal] = useState(null);
    const [udidNo, setUdidNo] = useState('');
    const [aadhaarNo, setAAdhaarNo] = useState('');
    const [onBehalf, setOnBehalf] = useState('-- Choose --');

    useEffect(() => {
        if (userData) {
            if (userData.status) {
                dispatch(showSuccessPopUp(userData.message))
                Alert.alert(userData.message);
                navigation.navigate('LoginScreen');
            }
            dispatch(registerUserSuccess(null));
        }
    }, [userData])

    const onSignUpPress = () => {
        // navigation.navigate('OTPScreen');
        // dispatch(registerUser({ name, email, password }));
        if (onBehalf === '-- Choose --') {
            dispatch(showErrorPopUp('Please choose On Behalf'))
            Alert.alert('Please choose On Behalf');
        }
        else if (firstName === '') {
            dispatch(showErrorPopUp('Please enter your First Name'))
            Alert.alert('Please enter your First Name');
        }
        else if (lastName === '') {
            dispatch(showErrorPopUp('Please enter your Last Name'))
            Alert.alert('Please enter your Last Name');
        }
        else if (email === '') {
            dispatch(showErrorPopUp('Please enter your Email-ID'))
            Alert.alert('Please enter your Email-ID');
        }
        else if (!checkboxVal) {
            dispatch(showErrorPopUp('Please check Disabled/Non-Disabled'))
            Alert.alert('Please check Disabled/Non-Disabled');
        }
        else if (checkboxVal === 1 && udidNo === '') {
            dispatch(showErrorPopUp('Please enter your UDID No.'))
            Alert.alert('Please enter your UDID No.');
        }
        else if (checkboxVal === 2 && aadhaarNo === '') {
            dispatch(showErrorPopUp('Please enter your AADHAAR No.'))
            Alert.alert('Please enter your AADHAAR No.');
        }
        else {
            var data = {
                on_behalf: onBehalf,
                first_name: firstName,
                last_name: lastName,
                email: email,
                udid_no: udidNo,
                aadhar_no: aadhaarNo,
            }
            dispatch(registerUser(data))
        }
    }

    const onTextFirstNameChange = (text: string) => {
        setFirstName(text)
    }

    const onTextEmailChange = (text: string) => {
        setEmail(text)
    }

    const onTextLastNameChange = (text: string) => {
        setLastName(text);
    }

    const onTextUdidNoChange = (text: string) => {
        setUdidNo(text)
    }

    const onTextAadhaarNoChange = (text: string) => {
        setAAdhaarNo(text)
    }

    const onCheckboxPress = (val: number) => {
        setCheckboxVal(val)
    }

    const onDropdownValueChange = (val: string) => {
        setOnBehalf(val.title);
    }

    const checkPermissionAndPick = async () => {
        // Check permissions on Android
        if (Platform.OS === 'android') {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
            );

            if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Permission denied');
                return;
            }
        }

        try {
            const res = await pickDocument({
                mimeTypes: ['*/*'],
            });
            console.log('Response = ', res);
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    return (
        <>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <AuthHeader />
                    <View style={styles.contentContainer}>
                        <View style={styles.headingContainer}>
                            <Text style={styles.headingText}>Registration</Text>
                            <View style={styles.dashStyle} />
                        </View>
                        <View style={styles.mainContent}>
                            <DropdownBox
                                title="On Behalf"
                                data={onBehalfData}
                                value={onBehalf}
                                onValueChange={onDropdownValueChange}
                                icon={<DocIcon />}
                            />
                            <InputBox
                                title="First Name"
                                onTextChange={onTextFirstNameChange}
                                value={firstName}
                                icon={<UserIcon />}
                            />
                            <InputBox
                                title="Last Name"
                                onTextChange={onTextLastNameChange}
                                value={lastName}
                                icon={<UserIcon />}
                            />
                            <InputBox
                                title="Email ID"
                                onTextChange={onTextEmailChange}
                                value={email}
                                icon={<Mail />}
                            />
                            <CheckboxContainer
                                data={checkboxData}
                                onCheckboxPress={onCheckboxPress}
                                value={checkboxVal}
                            />
                            {
                                checkboxVal === 1 &&
                                <>
                                    <InputBox
                                        title="UDID No."
                                        onTextChange={onTextUdidNoChange}
                                        value={udidNo}
                                        icon={<DocIcon />}
                                    />
                                    <View style={styles.mainContainer1}>
                                        <Text style={styles.headingText1}>UDID Doc</Text>
                                        <View style={styles.mainBox}>
                                            <View style={styles.iconContainer}>
                                                <DocIcon />
                                            </View>
                                            <TouchableOpacity onPress={checkPermissionAndPick} style={styles.inputContainer}>
                                                <Text>  -- Choose --</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </>
                            }
                            {
                                checkboxVal === 2 &&
                                <>
                                    <InputBox
                                        title="AADHAAR No."
                                        onTextChange={onTextAadhaarNoChange}
                                        value={aadhaarNo}
                                        icon={<DocIcon />}
                                    />
                                    <View style={styles.mainContainer1}>
                                        <Text style={styles.headingText1}>AADHAAR Doc</Text>
                                        <View style={styles.mainBox}>
                                            <View style={styles.iconContainer}>
                                                <DocIcon />
                                            </View>
                                            <TouchableOpacity onPress={checkPermissionAndPick} style={styles.inputContainer}>
                                                <Text>  -- Choose --</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </>
                            }
                        </View>
                    </View>
                    <Pressable onPress={() => navigation.navigate('LoginScreen')} style={styles.lowerButtonContainer}>
                        <Text style={styles.lowerButtonText}>Already Have An Account? <Text style={{ color: colors.pink }}>Log In</Text></Text>
                    </Pressable>
                </View>

            </ScrollView>
            {
                !isLoading ?
                    <View style={{ paddingHorizontal: 20, backgroundColor: colors.white }}>
                        <ButtonsContainer
                            buttonText1='Sign Up'
                            buttonStyle1={styles.buttonStyle1}
                            buttonTextColor1={colors.white}
                            onButtonPress1={() => onSignUpPress()}
                        />
                        <View style={{ height: 18 }} />

                    </View>
                    :
                    <Loader />

            }

        </>
    );
}

export default RegistrationScreen;