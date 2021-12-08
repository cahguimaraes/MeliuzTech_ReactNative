import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './screens/signIn';
import SignUp from './screens/signUp';

const {Navigator, Screen} = createStackNavigator();

export default function Stack(){
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Register" component={SignUp}/>
                <Screen name ="Login" component={SignIn}/>
            </Navigator>
        </NavigationContainer>
    );
}