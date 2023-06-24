import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { AppStackParamList } from "../../routes";

type NavigationProps  = StackNavigationProp<AppStackParamList, 'Login'>;

export default function Signup({}) {
    const navigation = useNavigation<NavigationProps>();
    const goToOTPVerify = () => {
        navigation.navigate<any>('OTPVerify', { data: '' });
    };
    return (
        <>
            <View style={styles.container}>
                <Text>This is Signup</Text>
                <StatusBar style="auto" />
                <Button
                    title="Go to OTPVerify"
                    onPress={goToOTPVerify}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
