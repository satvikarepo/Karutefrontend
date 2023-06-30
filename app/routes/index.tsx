import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../app/screen/Login';
import Signup from '../../app/screen/Signup';
import OTPVerify from '../../app/screen/OTPVerify';
import Dashboard from '../screen/Private/Home';

export type AppStackParamList = {
    Login: undefined;
    Signup: undefined;
    OTPVerify: undefined;
    Dashboard: undefined
};

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
        </Stack.Navigator>
    </>
}