import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
    Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import AuthHeader from '../../components/AuthHeader';
import fontSelector from '../../utils/FontSelectors';
import colors from '../../constants/colors';
import ButtonsContainer from '../../components/ButtonsContainer';
import { CommonActions } from '@react-navigation/native';
import { showErrorPopUp } from '../../reduxComponents/actions';


const dataList = [
    {
        id: 1,
        title: 'Acceptance of Terms',
        desc: 'By registering, accessing, or using Lovable, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use the service.',
    },
    {
        id: 2,
        title: 'Eligibility',
        desc: 'You must be at least 18 years old to use Lovable. \n You must provide accurate and truthful information during registration.',
    },
    {
        id: 3,
        title: 'Account Registration and Security',
        desc: 'Users are responsible for maintaining the confidentiality of their account credentials.\n Any unauthorized access or breach of security should be reported immediately.\n You have to give your udid or handicap card file or other kite file because of your security purpose .\n We suggest you before you share your phone number or any other details with anyone have the conversation minimum 3 or 4 months get to know each other on the stand verify then you can do whatever you want',
    },
    {
        id: 4,
        title: 'User Conduct',
        desc: 'Users must communicate respectfully and refrain from using offensive, abusive, or fraudulent behavior.\n Any misuse of the platform, including scams, harassment, or sharing false information, will result in account termination.',
    },
    {
        id: 5,
        title: 'Content and Privacy',
        desc: 'Users may share their personal details voluntarily, but should remain cautious about sharing sensitive information.\n Lovable does not conduct background checks; users are encouraged to verify the authenticity of other members independently.',
    },
    {
        id: 6,
        title: 'Payments and Subscription',
        desc: 'Some features may require a subscription fee, which will be clearly stated.\n Payments made are non-refundable unless explicitly stated.',
    },
    {
        id: 7,
        title: 'Termination of Services',
        desc: 'Lovable reserves the right to suspend or terminate any account that violates these Terms and Conditions.\n Users may deactivate their accounts at any time.',
    },
    {
        id: 8,
        title: 'Limitation of Liability',
        desc: 'Lovable is not responsible for any damages, losses, or disputes arising from user interactions.\n The platform serves as a means of connection, but does not guarantee successful matches or relationships.',
    },
    {
        id: 9,
        title: 'Modifications to Terms and conditions',
        desc: 'Lovable reserves the right to update these terms and conditions at any time with or without prior notice to users/subscribers.',
    },
    {
        id: 10,
        title: 'Contact Information',
        desc: 'For any questions or concerns regarding these Terms and Conditions, please contact us at info@lovabale.co.in.',
    },
]

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
        flex: 1,
        height: '59%'
    },
    itemContainer: {
        marginBottom: 20
    },
    titleText: {
        fontFamily: fontSelector('semi-bold'),
        fontSize: 14,
        lineHeight: 21,
        color: colors.grey1
    },
    descText: {
        fontFamily: fontSelector('regular'),
        fontSize: 12,
        lineHeight: 18,
        color: colors.grey2,
        width: '92%',
    },
    buttonStyle1: {
        backgroundColor: colors.pink,
        width: '45%',
        marginLeft: 20
    },
    buttonStyle2: {
        backgroundColor: colors.grey3,
        width: '45%',
        marginRight: 20
    },
})

const TermsAndConditionsScreen = (props) => {
    const { navigation } = props;
    const dispatch = useDispatch();

    const onButtonPress1 = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'RegistrationScreen',
                    },
                ],
            })
        );
        // navigation.navigate('RegistrationScreen');
    }
    const onButtonPress2 = () => {
        // dispatch(showErrorPopUp('Please accept the Terms and Conditions for proceed'))
        Alert.alert('Please accept the Terms and Conditions for proceed');
    }
    const listHeader = () => (
        <Text style={styles.descText}>
            {"Welcome to Lovable, a connection/ matrimonial platform designed for the Person With Disability (PWD) and non PWD community.\n\nBy using our services,  you agree to comply with the following Terms and Conditions.\n\nPlease read them carefully before proceeding.\n \n"}
        </Text>
    )
    const listFooter = () => (
        <Text style={styles.descText}>
            {
                "Disclaimer: If you not getting your match or if you have any issue with your match app or any person related to the app is not responsible it is totally at your own risk.\n\nBy using Lovable, you acknowledge that you have read, understood, and agreed to these Terms and Conditions."
            }
        </Text>
    )
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.descText}>{item.desc}</Text>
        </View>
    );
    return (
        <>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <AuthHeader />
                    <View style={styles.contentContainer}>

                        <FlatList
                            data={dataList}
                            ListHeaderComponent={listHeader}
                            renderItem={renderItem}
                            ListFooterComponent={listFooter}
                            keyExtractor={(item) => item.id}
                        />

                    </View>
                </View>
            </ScrollView>
            <ButtonsContainer
                buttonText1='Accept'
                buttonText2='Reject'
                buttonStyle1={styles.buttonStyle1}
                buttonStyle2={styles.buttonStyle2}
                buttonTextColor1={colors.white}
                buttonTextColor2={colors.black}
                onButtonPress1={onButtonPress1}
                onButtonPress2={onButtonPress2}
            />
        </>
    );
}

export default TermsAndConditionsScreen;