import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../app/screen/Login';
import Signup from '../../app/screen/Signup';
import OTPVerify from '../../app/screen/OTPVerify';
import ForgetPassword from '../../app/screen/ForgetPassword';
import ResetPassword from '../../app/screen/ForgetResetPassword';
import AppIntro from "../../app/screen/AppIntro";
import { AppStackParamList } from '../common/types';



export const Stack = createStackNavigator<AppStackParamList>();

interface IRoutes {
}
export const Routes = (props: IRoutes) => {
   
    const SignupProps=()=><Signup/>;
    const LoginProps=()=><Login />

    return <>
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
            >
            <Stack.Screen name="Login"
            options={{ title: "Login here" }}
            component={LoginProps} />
            <Stack.Screen name="Signup" options={{ title: "" }} component={SignupProps} />
            <Stack.Screen name="OTPVerify" options={{ title: "", headerShown: true }} component={OTPVerify} />
            <Stack.Screen name="ForgetPassword" options={{ title: "",headerShown: true }} component={ForgetPassword} />
            <Stack.Screen name="ResetPassword" options={{ title: "",headerShown: true }} component={ResetPassword} />
        </Stack.Navigator>
    </>
}