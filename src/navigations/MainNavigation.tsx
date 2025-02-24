import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileCreation from '../screens/MainScreens/ProfileCreation';

const MainStack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
            initialRouteName='ProfileCreation'
        >
            <MainStack.Screen
                name='ProfileCreation'
                component={ProfileCreation}
            />
        </MainStack.Navigator>
    )
}

export default MainNavigation;