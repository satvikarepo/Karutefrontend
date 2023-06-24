import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../app/screen/Login';
import Signup from '../../app/screen/Signup';
import OTPVerify from '../../app/screen/OTPVerify';

export type AppStackParamList = {
    Login: undefined;
    Signup: undefined;
    OTPVerify: undefined
};

export const Stack = createStackNavigator<AppStackParamList>();

export const Routes = () => {
    return <>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" options={{ title: "Login here" }} component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="OTPVerify" options={{ title:"", headerShown:true}} component={OTPVerify} />
        </Stack.Navigator>
    </>
}