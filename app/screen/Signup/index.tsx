// import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';

import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';
import { MyInput, MyPassword } from '../../common/components/inputs';
import { MyButton, MyLinkButton } from '../../common/components/buttons';
import { DividerWithLabel, Logo, MyView } from '../../common/components/layouts';
import { IconGoogle } from '../../assets/icons/Google';
import { IconApple } from '../../assets/icons/Apple';
import { IconLock } from '../../assets/icons/Lock';
import { IconProfile } from '../../assets/icons/Profile';
import { IconMessage } from '../../assets/icons/Message';
import { colors } from '../../theme/vars';

type NavigationProps = StackNavigationProp<AppStackParamList, 'Signup'>;

export default function Signup({ }) {
    const navigation = useNavigation<NavigationProps>();
    const goToOTPVerify = () => {
        navigation.navigate<any>('OTPVerify', { data: '' });
    };

    const goToLogin = () => {
        navigation.navigate<any>('Login', { data: '' });
    };

    return (
        <>
            <ScrollView>
                <Layout style={[styles.container, { marginTop: 32 }]}>
                    <MyView fullW alignItems='center'>
                        <Logo />
                    </MyView>
                    <MyView fullW mb={18} mt={8} alignItems='center'>
                        <Text category="h4">WECARE</Text>
                    </MyView>
                    <View style={[styles.row, { alignItems: 'center' }]}>
                        <Text category="h1">Create your account</Text>
                        <Text appearance='hint'>Please fill the details to create your account</Text>
                    </View>
                    <MyView fullW mb={16}>
                        <MyInput placeholder='Name' prefix={<IconProfile color={colors.primary}/>} />
                    </MyView>
                    <MyView fullW mb={16}>
                        <MyInput placeholder='Email' prefix={<IconMessage color={colors.primary}/>} />
                    </MyView>
                    <MyView fullW mb={16}>
                        <MyPassword placeholder='Password' prefix={<IconLock color={colors.primary}/>} />
                    </MyView>
                    <MyView fullW mb={16}>
                        <MyPassword placeholder='Confirm password' prefix={<IconLock color={colors.primary}/>} />
                    </MyView>

                    <MyButton onPress={goToOTPVerify} size='large'>Sign up</MyButton>
                    <DividerWithLabel label='Or' />
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton onPress={goToLogin} secondary 
                        accessoryLeft={<IconGoogle/>}
                        size='large'>Sign up with Google</MyButton>
                    </MyView>
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton onPress={goToLogin} secondary 
                        accessoryLeft={<IconApple/>}
                        size='large'>Sign up with Apple</MyButton>
                    </MyView>
                </Layout>
            </ScrollView>
            <Layout>
                <MyView fullW alignItems='center' pt={8} pb={16}>
                    <MyView direction='row'>
                        <>
                            <Text category='s1'>Already have an account?</Text>
                            <MyLinkButton ml={4}
                                onPress={goToLogin}
                                textAlign='right'>Sign in</MyLinkButton>
                        </>
                    </MyView>
                </MyView>
            </Layout>
        </>
    );
}


