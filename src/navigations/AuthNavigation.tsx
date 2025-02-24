import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/AuthScreens';
import TermsAndConditionsScreen from '../screens/AuthScreens/TermsAndConditions';
import RegistrationScreen from '../screens/AuthScreens/RegistrationScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import OTPScreen from '../screens/AuthScreens/OTPScreen';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/AuthScreens/ResetPasswordScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            initialRouteName='WelcomeScreen'
        >
            <AuthStack.Screen
                name='WelcomeScreen'
                component={WelcomeScreen}
            />
            <AuthStack.Screen
                name='TermsAndConditionsScreen'
                component={TermsAndConditionsScreen}
            />
            <AuthStack.Screen
                name='RegistrationScreen'
                component={RegistrationScreen}
            />
            <AuthStack.Screen
                name='LoginScreen'
                component={LoginScreen}
            />
            <AuthStack.Screen
                name='OTPScreen'
                component={OTPScreen}
            />
            <AuthStack.Screen
                name='ForgotPasswordScreen'
                component={ForgotPasswordScreen}
            />
            <AuthStack.Screen
                name='ResetPasswordScreen'
                component={ResetPasswordScreen}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;