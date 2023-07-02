import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';

import { useSelector,useDispatch } from "../../redux/store";
import { SubmitLogin } from "../../redux/actions/global";
import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';
import { MyInput, MyPassword } from '../../common/components/inputs';
import { MyButton, MyLinkButton } from '../../common/components/buttons';
import { DividerWithLabel, Logo, MyView } from '../../common/components/layouts';
import { colors } from '../../theme/vars';



type LoginProp = StackNavigationProp<AppStackParamList, 'Login'>;

interface ILogin {
}
export default function Login(props: ILogin) {
    const dispatch = useDispatch();
    const navigation = useNavigation<LoginProp>();
    const goToSignup = () => {
        navigation.navigate<any>('Signup', { data: "" });
    };

    const onLogin = async () => {
        await dispatch(SubmitLogin({userName:'sdsd', password:'jhjj'}));
    };

    return (
        <>
            <ScrollView style={{ width: '100%', flex:1, backgroundColor:colors.white }}>
                <Layout style={[styles.container, { marginTop: 32}]}>
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
                    <MyButton onPress={onLogin} size='large'>Log in</MyButton>
                    <DividerWithLabel label='Or' />
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton onPress={goToSignup} secondary size='large'>Sign in with Google</MyButton>
                    </MyView>
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton onPress={goToSignup} secondary size='large'>Sign in with Apple</MyButton>
                    </MyView>
                </Layout>
            </ScrollView>
            <Layout>
                <MyView fullW alignItems='center' pt={8} pb={16}>
                    <MyView direction='row'>
                        <>
                            <Text category='s1'>Don't have an account?</Text>
                            <MyLinkButton ml={4} onPress={goToSignup} textAlign='right'>Sign up</MyLinkButton>
                        </>
                    </MyView>
                </MyView>
            </Layout>

        </>
    );
}

