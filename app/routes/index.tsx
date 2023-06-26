import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../app/screen/Login';
import Signup from '../../app/screen/Signup';
import OTPVerify from '../../app/screen/OTPVerify';
import Dashboard from '../screen/Private/Dashboard';

export type AppStackParamList = {
    Login: undefined;
    Signup: undefined;
    OTPVerify: undefined;
    Dashboard:undefined
};

export const Stack = createStackNavigator<AppStackParamList>();


export const Routes = () => {
    return <>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" options={{ title: "Login here" }} component={Login} />
            <Stack.Screen name="Dashboard" options={{ title: "Dashboard" }} component={Dashboard} />
            <Stack.Screen name="Signup" options={{title:""}} component={Signup} />
            <Stack.Screen name="OTPVerify" options={{ title:"", headerShown:true}} component={OTPVerify} />
        </Stack.Navigator>
    </>
}