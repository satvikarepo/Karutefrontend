// import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';

import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';
import { MyInput, MyPassword } from '../../common/components/inputs';
import { MyButton, MyLinkButton } from '../../common/components/buttons';
import { DividerWithLabel, MyView } from '../../common/components/layouts';


type NavigationProps = StackNavigationProp<AppStackParamList, 'Signup'>;

export default function Signup({ }) {
    const navigation = useNavigation<NavigationProps>();
    const goToOTPVerify = () => {
        navigation.navigate<any>('OTPVerify', { data: '' });
    };
    return (
        <>
                <Layout style={styles.container}>
                    {/* <Icon name='star' /> */}
                    <MyView fullW alignItems='center'>
                        <>
                            <Text category="h4">LOGO</Text>
                        </>
                    </MyView>
                    <MyView fullW mb={32} mt={24} alignItems='center'>
                        <Text category="h4">WECARE</Text>
                    </MyView>
                    <View style={[styles.row, { alignItems: 'center' }]}>
                        <Text category="h1">Create your account</Text>
                        <Text appearance='hint'>Please fill the details to create your account</Text>
                    </View>
                    <MyView fullW mb={16}>
                        <MyInput placeholder='Name' />
                    </MyView>
                    <MyView fullW mb={16}>
                        <MyInput placeholder='Email' />
                    </MyView>
                    <MyView fullW mb={16}>
                        <MyPassword placeholder='Password' />
                    </MyView>
                    <MyView fullW mb={16}>
                        <MyPassword placeholder='Confirm password' />
                    </MyView>

                    <MyButton onPress={goToOTPVerify} size='large'>Sign up</MyButton>
                    <DividerWithLabel label='Or' />
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton onPress={goToOTPVerify} secondary size='large'>Sign in with Google</MyButton>
                    </MyView>
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton onPress={goToOTPVerify} secondary size='large'>Sign in with Apple</MyButton>
                    </MyView>
                </Layout>
                <Layout>
                    <MyView fullW alignItems='center' pt={8} pb={16}>
                        <MyView direction='row'>
                            <>
                                <Text category='s1'>Don't have an account?</Text>
                                <MyLinkButton ml={4} textAlign='right'>Sign up</MyLinkButton>
                            </>
                        </MyView>
                    </MyView>
                </Layout>
        </>
    );
}


