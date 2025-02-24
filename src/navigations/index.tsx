import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPopUp from '../components/ErrorPopUp';
import { isLoginSet, showErrorPopUp, showSuccessPopUp } from '../reduxComponents/actions';
import SuccessPopUp from '../components/SuccessPopUp';
import MainNavigation from './MainNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigation = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.reducer.authReducers.isLogin);
    const errorMessage = useSelector((state) => state.reducer.authReducers.errorMessage);
    const successMessage = useSelector((state) => state.reducer.authReducers.successMessage);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            dispatch(showErrorPopUp(null))
        }, 5000)
    }, [errorMessage])

    useEffect(() => {
        getLoggedIn();
    },[])

    useEffect(() => {
        setIsLoggedIn(isLogin);
    }, [isLogin])

    useEffect(() => {
        setTimeout(() => {
            dispatch(showSuccessPopUp(null))
        }, 5000)
    }, [successMessage])

    const getLoggedIn = async () => {
        var isLogin = await AsyncStorage.getItem('isLogin');
        if(isLogin === 'yes'){
            dispatch(isLoginSet(true))
            setIsLoggedIn(true);
        }
        else {
            dispatch(isLoginSet(false))
            setIsLoggedIn(false);
        }
    }

    return (
        <>
            <NavigationContainer>
                {/* {
                    isLoggedIn ?
                        <MainNavigation />
                        : */}
                        <AuthNavigation />
                {/* } */}

            </NavigationContainer>
            {
                errorMessage &&
                <ErrorPopUp errorMessage={errorMessage} />
            }
            {
                successMessage &&
                <SuccessPopUp successMessage={successMessage} />
            }
        </>
    )
}

export default RootNavigation