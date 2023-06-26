import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
// import Signup from '../../Signup';
// import OTPVerify from '../../OTPVerify';

export type AppStackParamList = {
    Login: undefined;
    Signup: undefined;
    OTPVerify: undefined
};

export const Stack = createStackNavigator<AppStackParamList>();

const Dashboard = () => {
    return <>
    <Text>Dashboard</Text>
        {/* <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="OTPVerify" options={{ title:"OTP", headerShown:true}} component={OTPVerify} />
        </Stack.Navigator> */}
    </>
}

export default Dashboard;