import React, { useEffect, useState } from 'react';
import {
    Image,
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Alert,
} from 'react-native';
import Header from '../Components/Header';
import fontSelector from '../../../utils/FontSelectors';
import colors from '../../../constants/colors';
import InputBox from '../../../components/InputBox';
import { Calendar, Children, City, Drink, Drop, Graduate, Height, Home, Moon, Phone, Religion, State, Sun, Tag, Time, UserIcon, UserIcon2, Users, Weight, Women, Zipcode } from '../../../assets/svgs';
import CheckboxContainer from '../../../components/CheckboxContainer';
import ButtonsContainer from '../../../components/ButtonsContainer';
import DropdownBox from '../../../components/DropdownBox';
import FormCounter from '../Components/FormCounter';
import { addressUpdate, astrologyDetailsUpdate, basicDetailsUpdate, getCity, getState, lifeStyleUpdate, physicalAttributeUpdate, showErrorPopUp, showSuccessPopUp, socialBackgroundUpdate } from '../../../reduxComponents/actions';
import { useDispatch, useSelector } from 'react-redux';

const checkboxData = [
    {
        id: 1,
        title: 'Male'
    },
    {
        id: 2,
        title: 'Female'
    },
    {
        id: 3,
        title: 'Others'
    }
];

const checkboxData1 = [
    {
        id: 1,
        title: 'Married'
    },
    {
        id: 2,
        title: 'Un-Married'
    },
    {
        id: 3,
        title: 'Divorcee'
    }
];

const checkboxData2 = [
    {
        id: 1,
        title: 'Yes'
    },
    {
        id: 2,
        title: 'No'
    },
];

const checkboxData3 = [
    {
        id: 1,
        title: 'Student'
    },
    {
        id: 2,
        title: 'Employee'
    },
];

const dropdownData = [
    {
        id: 1,
        title: 'Yes'
    },
    {
        id: 2,
        title: 'No'
    },
];

const dropdownData1 = [
    {
        id: 1,
        title: 'Hindu'
    },
    {
        id: 2,
        title: 'Muslim'
    },
    {
        id: 3,
        title: 'Christian'
    },
];

const dropdownData2 = [
    {
        id: 1,
        title: 'BRAHMAN'
    },
    {
        id: 2,
        title: 'AGURI'
    },
];

const dropdownData3 = [
    {
        id: 1,
        title: 'BAIRAGI'
    },
    {
        id: 2,
        title: 'BARENDRA'
    },
];

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20
    },
    formHeaderContainer: {
        marginTop: 20,
    },
    dottedSeparator: {
        color: colors.grey4,
        paddingHorizontal: 20,
        letterSpacing: 1,
        lineHeight: 19,
        marginBottom: 20,
        fontSize: 15
    },
    mainFormContainer: {
        paddingHorizontal: 20
    },
    profileImageContainer: {
        alignItems: 'center',
        paddingVertical: 10
    },
    editProfileImageContainer: {
        height: 20,
        width: 20,
        backgroundColor: colors.pink,
        borderRadius: 20,
        position: 'absolute',
        right: 165,
        top: 60
    },
    headerSubText: {
        fontFamily: fontSelector('regular'),
        color: colors.grey1
    },
    headerText: {
        fontFamily: fontSelector('medium'),
        color: colors.grey1
    },
    buttonStyle1: {
        backgroundColor: colors.pink,
        width: '98.5%'
    },
})


const ProfileCreation = () => {

    const dispatch = useDispatch();

    const [formArray, setFormArray] = useState([
        {
            id: 1,
            title: 'Basic',
            selected: true,
        },
        {
            id: 2,
            title: 'Address',
            selected: false,
        },
        {
            id: 3,
            title: 'Family',
            selected: false,
        },
        {
            id: 4,
            title: 'Life Style',
            selected: false,
        },
        {
            id: 5,
            title: 'Astronomic',
            selected: false,
        },
        {
            id: 6,
            title: 'Social',
            selected: false,
        },
        {
            id: 7,
            title: 'Status',
            selected: false,
        },
        {
            id: 8,
            title: 'Physical',
            selected: false,
        },
        {
            id: 9,
            title: 'Interest',
            selected: false,
        },
    ]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [maritalStatus, setMaritalStatus] = useState(null);
    const [noOfChildren, setNoOfChildren] = useState('');
    const [presentState, setPresentState] = useState('');
    const [presentCity, setPresentCity] = useState('');
    const [presentStateId, setPresentStateId] = useState('');
    const [presentCityId, setPresentCityId] = useState('');
    const [presentPostalcode, setPresentPostalcode] = useState('');
    const [isPresentPermanentAddressSame, setIsPresentPermanentAddressSame] = useState(null)
    const [permanentState, setPermanentState] = useState('');
    const [permanentStateId, setPermanentStateId] = useState(null);
    const [permanentCity, setPermanentCity] = useState('');
    const [permanentCityId, setPermanentCityId] = useState(null);
    const [permanentPostalcode, setPermanentPostalcode] = useState('');
    const [currentSelected, setCurrentSelected] = useState(1);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [isHasSiblings, setIsHasSiblings] = useState(null);
    const [noOfSiblings, setNoOfSiblings] = useState(0);
    const [nameOfSiblings, setNameOfSiblings] = useState('');
    const [isSiblingMarried, setIsSiblingMarried] = useState(null);
    const [drink, setDrink] = useState(null);
    const [smoke, setSmoke] = useState(null);
    const [livingWith, setLivingWith] = useState('');
    const [sunsign, setSunsign] = useState('');
    const [moonsign, setMoonsign] = useState('');
    const [timeOfBirth, setTimeOfBirth] = useState('');
    // const [birthCityId, setBirthCityId] = useState(null);
    const [birthCity, setBirthCity] = useState('');
    const [religion, setReligion] = useState(null);
    const [religionId, setReligionId] = useState(null);
    const [caste, setCaste] = useState(null);
    const [casteId, setCasteId] = useState(null);
    const [subcaste, setSubCaste] = useState(null);
    const [subcasteId, setSubCasteId] = useState(null);
    const [yourHeight, setYourHeight] = useState('');
    const [yourWeight, setYourWeight] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [empOrStu, setEmpOrStu] = useState(null);
    const [instName, setInstName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [hobby, setHobby] = useState('');
    const [dressStyle, setDressStyle] = useState('');

    const stateData = useSelector((state) => state.reducer.profileCreateReducers.stateList);
    const cityData = useSelector((state) => state.reducer.profileCreateReducers.cityList);

    useEffect(() => {
        dispatch(getState());
    }, [])

    useEffect(() => {
        if (stateData?.length > 0) {
            var tempArr = []
            stateData?.map((item) => {
                tempArr.push({
                    id: item.id,
                    title: item.name,
                })
            })
            setStateList(tempArr)
        }
    }, stateData);

    useEffect(() => {
        if (cityData?.length > 0) {
            var tempArr = []
            cityData?.map((item) => {
                tempArr.push({
                    id: item.id,
                    title: item.name,
                })
            })
            setCityList(tempArr)
        }
    }, cityData);

    const onStateValueChange = (item) => {
        setPresentState(item.title)
        setPresentStateId(item.id);
        dispatch(getCity(item.id))
    }

    const onCityValueChange = (item) => {
        setPresentCity(item.title)
        setPresentCityId(item.id);
    }

    const onPermanentStateValueChange = (item) => {
        setPermanentState(item.title)
        setPermanentStateId(item.id);
        dispatch(getCity(item.id))
    }

    const onPermanentCityValueChange = (item) => {
        setPermanentCity(item.title)
        setPermanentCityId(item.id);
    }



    const saveNext = () => {
        console.log('-7-7-7-7-7-7-', currentSelected);
        if (currentSelected === 1) {
            if (firstName === '') {
                dispatch(showErrorPopUp('Please enter your First Name'))
            }
            else if (firstName.length < 3) {
                dispatch(showErrorPopUp('First Name must be atleast 3 characters'))
            }
            else if (lastName === '') {
                dispatch(showErrorPopUp('Please enter your Last Name'))
            }
            else if (!gender) {
                dispatch(showErrorPopUp('Please check gender'))
            }
            else if (phoneNo === '') {
                dispatch(showErrorPopUp('Please enter your Phone Number No.'))
            }
            else if (!maritalStatus) {
                dispatch(showErrorPopUp('Please check marital status'))
            }
            else {
                console.log('9090909090');

                var data = {
                    first_name: firstName,
                    last_name: lastName,
                    gender: gender,
                    date_of_birth: dob,
                    phone: phoneNo,
                    marital_status: maritalStatus,
                    children: noOfChildren,
                }
                console.log(data);

                dispatch(basicDetailsUpdate(data))

                setFormArray(prev => {
                    var newCount = prev;
                    newCount[currentSelected].selected = true
                    return newCount;
                });

                setCurrentSelected(currentSelected + 1);
            }
        }
        if (currentSelected === 2) {
            if (presentState === '') {
                dispatch(showErrorPopUp('Please choose your State Name'))
            }
            else if (presentCity === '') {
                dispatch(showErrorPopUp('Please choose your City Name'))
            }
            else if (presentPostalcode === '') {
                dispatch(showErrorPopUp('Please enter your Postal Code'))
            }
            else if (!isPresentPermanentAddressSame) {
                dispatch(showErrorPopUp('Please enter your Permanent Address'))
            }
            else if (isPresentPermanentAddressSame === 2 && permanentState === '') {
                dispatch(showErrorPopUp('Please enter your permanent State Name'))
            }
            else if (isPresentPermanentAddressSame === 2 && permanentCity === '') {
                dispatch(showErrorPopUp('Please enter your permanent City Name'))
            }
            else if (isPresentPermanentAddressSame === 2 && permanentPostalcode === '') {
                dispatch(showErrorPopUp('Please enter your permanent Postal Code'))
            }
            else {
                var data1 = {
                    present_state_id: presentStateId,
                    present_city_id: presentCityId,
                    present_postal_code: presentPostalcode,
                    permanent_state_id: isPresentPermanentAddressSame ? presentStateId : permanentStateId,
                    permanent_city_id: isPresentPermanentAddressSame ? presentCityId : permanentCityId,
                    permanent_postal_code: isPresentPermanentAddressSame ? presentPostalcode : permanentPostalcode,
                }
                console.log(data1);

                dispatch(addressUpdate(data1));

                setFormArray(prev => {
                    var newCount = prev;
                    newCount[currentSelected].selected = true
                    return newCount;
                });

                setCurrentSelected(currentSelected + 1);
            }
        }
        if (currentSelected === 3) {
            var data2 = {

            }

            setFormArray(prev => {
                var newCount = prev;
                newCount[currentSelected].selected = true
                return newCount;
            });

            setCurrentSelected(currentSelected + 1);
        }
        if (currentSelected === 4) {
            if (!drink) {
                dispatch(showErrorPopUp('Please choose you drink or not'))
            }
            else if (!smoke) {
                dispatch(showErrorPopUp('Please choose you smoke or not'))
            }
            else if (livingWith === '') {
                dispatch(showErrorPopUp('Please enter you are living with'))
            }
            else {
                var data3 = {
                    drink: drink,
                    smoke: smoke,
                    living_with: livingWith
                }
                console.log(data3);

                dispatch(lifeStyleUpdate(data3))
                setFormArray(prev => {
                    var newCount = prev;
                    newCount[currentSelected].selected = true
                    return newCount;
                });

                setCurrentSelected(currentSelected + 1);
            }
        }
        if (currentSelected === 5) {
            var data4 = {
                sun_sign: sunsign,
                moon_sign: moonsign,
                time_of_birth: timeOfBirth,
                city_of_birth: birthCity,
            }
            dispatch(astrologyDetailsUpdate(data4))
            setFormArray(prev => {
                var newCount = prev;
                newCount[currentSelected].selected = true
                return newCount;
            });

            setCurrentSelected(currentSelected + 1);
        }
        if (currentSelected === 6) {
            if (!religionId) {
                dispatch(showErrorPopUp('Please choose your religion'))
            }
            else if (!casteId) {
                dispatch(showErrorPopUp('Please choose your cast'))
            }
            else if (!subcasteId) {
                dispatch(showErrorPopUp('Please choose your sub-cast'))
            }
            else {
                var data5 = {
                    religion_id: religionId,
                    caste_id: casteId,
                    sub_caste_id: subcasteId
                }
                dispatch(socialBackgroundUpdate(data5))
                setFormArray(prev => {
                    var newCount = prev;
                    newCount[currentSelected].selected = true
                    return newCount;
                });

                setCurrentSelected(currentSelected + 1);
            }
        }
        if (currentSelected === 7) {
            setFormArray(prev => {
                var newCount = prev;
                newCount[currentSelected].selected = true
                return newCount;
            });

            setCurrentSelected(currentSelected + 1);
        }
        if (currentSelected === 8) {
            if (yourHeight === '') {
                dispatch(showErrorPopUp('Please enter your height'))
            }
            else if (yourWeight === '') {
                dispatch(showErrorPopUp('Please enter your weight'))
            }
            else if (bloodGroup === '') {
                dispatch(showErrorPopUp('Please enter your blood group'))
            }
            else {
                var data7 = {
                    height: yourHeight,
                    weight: yourWeight,
                    blood_group: bloodGroup,
                    disability: 2
                }
                dispatch(physicalAttributeUpdate(data7))
                setFormArray(prev => {
                    var newCount = prev;
                    newCount[currentSelected].selected = true
                    return newCount;
                });

                setCurrentSelected(currentSelected + 1);
            }
        }
        // if (currentSelected !== 9) {
        //     setFormArray(prev => {
        //         var newCount = prev;
        //         newCount[currentSelected].selected = true
        //         return newCount;
        //     });

        //     setCurrentSelected(currentSelected + 1);
        // }
        if (currentSelected === 9) {
            console.log('--------');
            Alert.alert('Your profile is created successfully');
            showSuccessPopUp('Your profile is created successfully');
        }
    }

    return (
        <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <Header />
            <View style={styles.formHeaderContainer}>
                {/* <View style={styles.separatorLine} /> */}
                <FormCounter
                    formArray={formArray}
                />
                <Text numberOfLines={1} ellipsizeMode='clip' style={styles.dottedSeparator}>....................................................................................</Text>
            </View>

            <View style={styles.mainFormContainer}>
                {
                    currentSelected == 1 &&
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={require('../../../assets/images/Profile.png')}
                        />
                        <TouchableOpacity style={styles.editProfileImageContainer}>

                        </TouchableOpacity>
                    </View>
                }
                {
                    currentSelected == 1 &&
                    <View>
                        <InputBox
                            title="First Name"
                            onTextChange={(text) => setFirstName(text)}
                            value={firstName}
                            icon={<UserIcon2 />}
                        />
                        <InputBox
                            title="Last Name"
                            onTextChange={(text) => setLastName(text)}
                            value={lastName}
                            icon={<UserIcon2 />}
                        />
                        <CheckboxContainer
                            data={checkboxData}
                            onCheckboxPress={(val) => setGender(val)}
                            value={gender}
                        />
                        <InputBox
                            title="D.O.B"
                            onTextChange={(text) => setDob(text)}
                            value={dob}
                            icon={<Calendar />}
                        />
                        <InputBox
                            title="Phone No"
                            onTextChange={(text) => setPhoneNo(text)}
                            value={phoneNo}
                            icon={<Phone />}
                        />
                        <Text style={styles.headerSubText}>Marital Status</Text>
                        <CheckboxContainer
                            data={checkboxData1}
                            onCheckboxPress={(val) => setMaritalStatus(val)}
                            value={maritalStatus}
                        />
                        <InputBox
                            title="No. of Children"
                            onTextChange={(text) => setNoOfChildren(text)}
                            value={noOfChildren}
                            icon={<Children />}
                        />
                    </View>
                }
                {
                    currentSelected == 2 &&
                    <View>
                        <Text style={styles.headerText}>Present Address</Text>
                        <DropdownBox
                            title="State"
                            data={stateList}
                            value={presentState}
                            onValueChange={onStateValueChange}
                            icon={<State />}
                        />
                        <DropdownBox
                            title="City"
                            data={cityList}
                            value={presentCity}
                            onValueChange={onCityValueChange}
                            icon={<City />}
                        />
                        <InputBox
                            title="Postal Code"
                            onTextChange={(text) => setPresentPostalcode(text)}
                            value={presentPostalcode}
                            icon={<Zipcode />}
                        />
                        <Text style={styles.headerSubText}>Present & Permanent Address are Same</Text>
                        <CheckboxContainer
                            data={checkboxData2}
                            onCheckboxPress={(val) => {
                                console.log(val);

                                setIsPresentPermanentAddressSame(val)
                            }}
                            value={isPresentPermanentAddressSame}
                        />
                        {
                            isPresentPermanentAddressSame === 2 &&
                            <>
                                <Text style={[styles.headerText, { marginTop: 20 }]}>Premanent Address</Text>
                                <DropdownBox
                                    title="State"
                                    data={stateList}
                                    value={permanentState}
                                    onValueChange={onPermanentStateValueChange}
                                    icon={<State />}
                                />
                                <DropdownBox
                                    title="State"
                                    data={cityList}
                                    value={permanentCity}
                                    onValueChange={onPermanentCityValueChange}
                                    icon={<City />}
                                />
                                <InputBox
                                    title="Postal Code"
                                    onTextChange={(text) => setPermanentPostalcode(text)}
                                    value={permanentPostalcode}
                                    icon={<Zipcode />}
                                />
                            </>
                        }
                    </View>
                }
                {
                    currentSelected == 3 &&
                    <View>
                        <Text style={styles.headerText}>Family Info</Text>
                        <InputBox
                            title="Father Name"
                            onTextChange={(text) => setFatherName(text)}
                            value={fatherName}
                            icon={<UserIcon2 />}
                        />
                        <InputBox
                            title="Mother Name"
                            onTextChange={(text) => setMotherName(text)}
                            value={motherName}
                            icon={<Women />}
                        />
                        <Text style={styles.headerSubText}>Siblings</Text>
                        <CheckboxContainer
                            data={checkboxData2}
                            onCheckboxPress={(val) => setIsHasSiblings(val)}
                            value={isHasSiblings}
                        />
                        <InputBox
                            title="No. of Siblings"
                            onTextChange={(text) => setNoOfSiblings(text)}
                            value={noOfSiblings}
                            icon={<Users />}
                        />
                        <InputBox
                            title="Name"
                            onTextChange={(text) => setNameOfSiblings(text)}
                            value={nameOfSiblings}
                            icon={<UserIcon2 />}
                        />
                        <Text style={styles.headerSubText}>Married</Text>
                        <CheckboxContainer
                            data={checkboxData2}
                            onCheckboxPress={(val) => setIsSiblingMarried(val)}
                            value={isSiblingMarried}
                        />
                    </View>
                }
                {
                    currentSelected == 4 &&
                    <View>
                        <Text style={styles.headerText}>Life Style Info</Text>
                        <DropdownBox
                            title="Drink"
                            data={dropdownData}
                            value={drink}
                            onValueChange={(val) => setDrink(val.title)}
                            icon={<Drink />}
                        />
                        <DropdownBox
                            title="Smoke"
                            data={dropdownData}
                            value={smoke}
                            onValueChange={(val) => setSmoke(val.title)}
                            icon={<Drink />}
                        />
                        <InputBox
                            title="Living With"
                            onTextChange={(text) => setLivingWith(text)}
                            value={livingWith}
                            icon={<Home />}
                        />
                    </View>
                }
                {
                    currentSelected == 5 &&
                    <View>
                        <Text style={styles.headerText}>Astronomic Info</Text>
                        <InputBox
                            title="Sun Sign"
                            onTextChange={(text) => setSunsign(text)}
                            value={sunsign}
                            icon={<Sun />}
                        />
                        <InputBox
                            title="Moon Sign"
                            onTextChange={(text) => setMoonsign(text)}
                            value={moonsign}
                            icon={<Moon />}
                        />
                        <InputBox
                            title="Time of Birth"
                            onTextChange={(text) => setTimeOfBirth(text)}
                            value={timeOfBirth}
                            icon={<Time />}
                        />
                        <InputBox
                            title="City of Birth"
                            onTextChange={(text) => setBirthCity(text)}
                            value={birthCity}
                            icon={<City />}
                        />
                    </View>
                }
                {
                    currentSelected == 6 &&
                    <View>
                        <Text style={styles.headerText}>Social Background Info</Text>
                        <DropdownBox
                            title="Religion"
                            data={dropdownData1}
                            value={religion}
                            onValueChange={(val) => {
                                setReligion(val.title)
                                setReligionId(val.id)
                            }}
                            icon={<Religion />}
                        />
                        <DropdownBox
                            title="Caste"
                            data={dropdownData2}
                            value={caste}
                            onValueChange={(val) => {
                                setCaste(val.title)
                                setCasteId(val.id)
                            }}
                            icon={<Tag />}
                        />
                        <DropdownBox
                            title="Sub Caste"
                            data={dropdownData3}
                            value={subcaste}
                            onValueChange={(val) => {
                                setSubCaste(val.title)
                                setSubCasteId(val.id)
                            }}
                            icon={<Tag />}
                        />
                    </View>
                }
                {
                    currentSelected == 7 &&
                    <View>
                        <Text style={styles.headerText}>Current Status Info</Text>
                        <Text style={styles.headerSubText}>Are You Student Or Employee?</Text>
                        <CheckboxContainer
                            data={checkboxData3}
                            onCheckboxPress={(val) => setEmpOrStu(val)}
                            value={empOrStu}
                        />
                        <InputBox
                            title="Institution Name"
                            onTextChange={(text) => setInstName(text)}
                            value={instName}
                            icon={<Graduate />}
                        />
                        <InputBox
                            title="Start Date"
                            onTextChange={(text) => setStartDate(text)}
                            value={startDate}
                            icon={<Calendar />}
                        />
                        <InputBox
                            title="End Date"
                            onTextChange={(text) => setEndDate(text)}
                            value={endDate}
                            icon={<Calendar />}
                        />
                    </View>
                }
                {
                    currentSelected == 8 &&
                    <View>
                        <Text style={styles.headerText}>Physical Attributes Info</Text>

                        <InputBox
                            title="Height (In Feet)"
                            onTextChange={(text) => setYourHeight(text)}
                            value={yourHeight}
                            icon={<Height />}
                        />
                        <InputBox
                            title="Weight (In K.G.)"
                            onTextChange={(text) => setYourWeight(text)}
                            value={yourWeight}
                            icon={<Weight />}
                        />
                        <InputBox
                            title="Blood Group"
                            onTextChange={(text) => setBloodGroup(text)}
                            value={bloodGroup}
                            icon={<Drop />}
                        />
                    </View>
                }
                {
                    currentSelected == 9 &&
                    <View>
                        <Text style={styles.headerText}>Hobby and Interest Info</Text>

                        <InputBox
                            title="Hobby"
                            onTextChange={(text) => setHobby(text)}
                            value={hobby}
                            icon={<Height />}
                        />
                        <InputBox
                            title="Dress Style"
                            onTextChange={(text) => setDressStyle(text)}
                            value={dressStyle}
                            icon={<Weight />}
                        />
                    </View>
                }
                <ButtonsContainer
                    buttonText1={currentSelected == 9 ? 'Submit' : 'Save & Next'}
                    buttonStyle1={styles.buttonStyle1}
                    buttonTextColor1={colors.white}
                    onButtonPress1={() => saveNext()}
                />
            </View>
        </View>
    )
}

export default ProfileCreation;