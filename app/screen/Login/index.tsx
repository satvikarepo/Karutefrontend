// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import { SvgXml } from 'react-native-svg';
import { IconUser } from "../../assets/icons"

import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';
import { MyInput, MyPassword } from '../../common/components/inputs';
import { MyButton, MyLinkButton } from '../../common/components/buttons';
import { DividerWithLabel, Logo, MyView } from '../../common/components/layouts';


type LoginProp = StackNavigationProp<AppStackParamList, 'Login'>;

export default function Login({ }) {

    const navigation = useNavigation<LoginProp>();
    const goToSignup = () => {
        navigation.navigate<any>('Signup', { data: "" });
      // navigation.navigate<any>('Dashboard', { data: "" });
    };

    return (
        <>
            <Layout style={[styles.container, { marginTop: 32 }]}>
                {/* <IconUser w={60} h={60} color='blue' /> */}
                <MyView fullW mb={8} alignItems='center'>
                    <>
                        <Logo />
                    </>
                </MyView>
                <MyView fullW mb={48} alignItems='center'>
                    <Text category="h4">WECARE</Text>
                </MyView>
                <View style={[styles.row, { alignItems: 'center' }]}>
                    <Text category="h1">Welcome back!</Text>
                    <Text appearance='hint'>Use your credentials to access your account</Text>
                </View>
                <View style={styles.row}>
                    <MyInput placeholder='Username' />
                </View>
                <MyView fullW mb={8}>
                    <MyPassword placeholder='Password' />
                </MyView>
                <MyView fullW mb={16} alignItems='right'>
                    <MyLinkButton textAlign='right'>Forgot Password?</MyLinkButton>
                </MyView>
                <MyButton onPress={goToSignup} size='large'>Log in</MyButton>
                <DividerWithLabel label='Or' />
                <MyView fullW mb={16} alignItems='right'>
                    <MyButton onPress={goToSignup} secondary size='large'>Sign in with Google</MyButton>
                </MyView>
                <MyView fullW mb={16} alignItems='right'>
                    <MyButton onPress={goToSignup} secondary size='large'>Sign in with Apple</MyButton>
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

