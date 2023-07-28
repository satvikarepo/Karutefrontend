import { View, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import { useForm, SubmitHandler } from "react-hook-form";

import { useSelector, useDispatch } from "../../redux/store";
import { SubmitLogin } from "../../redux/actions/global";
import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';
import { FormInput, FormInputPassword } from '../../common/components/Forms/FormInput';
import { MyButton, MyLinkButton } from '../../common/components/buttons';
import { DividerWithLabel, Logo, MyView } from '../../common/components/layouts';
import { colors } from '../../theme/vars';
import { IconGoogle } from '../../assets/icons/Google';
import { IconApple } from '../../assets/icons/Apple';
import { IconLock } from '../../assets/icons/Lock';
import { IconProfile } from '../../assets/icons/Profile';
import { SignInForm } from '../../common/types';
import { regex } from '../../common/constants';


type LoginProp = StackNavigationProp<AppStackParamList, 'Login'>;

interface ILogin {
}
export default function Login(props: ILogin) {
    const dispatch = useDispatch();
   // const global = useSelector(state => state.global);
    const navigation = useNavigation<LoginProp>();
    const form = useForm<SignInForm>();
    const { control, handleSubmit, formState: { errors } } = form;
    const goToSignup = () => {
        navigation.navigate<any>('Signup', { data: "" });
    };

    const onSubmit: SubmitHandler<SignInForm> = (data,e) => {
        e?.preventDefault();
        console.log(data);
        dispatch(SubmitLogin(data));
        return false;
    }

    

    return (
        <>
            <ScrollView style={{ width: '100%', flex: 1, backgroundColor: colors.white }}>
                <Layout style={[styles.container, { marginTop: 32 }]}>
                    <MyView fullW mb={8} alignItems='center'>
                        <>
                            <Logo/>
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
                    <FormInput control={control} rules={{
                            required: 'Email is required.',
                            maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                            pattern: {
                                value: regex.email,
                                message: 'Invalid email address.',
                            },
                        }} placeholder="Email" name='email'
                            prefix={<IconProfile color={colors.primary} />}
                            error={errors.email && errors.email.message}
                        />
                    </View>
                    <MyView fullW mb={8}>
                        <FormInputPassword control={control} rules={{
                            required: 'Password is required.',
                            maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                        }} placeholder="Password" name='password'
                            prefix={<IconLock color={colors.primary} />}
                            error={errors.password && errors.password.message}
                        />
                    </MyView>
                    <MyView fullW mb={16} alignItems='right'>
                        <MyLinkButton textAlign='right'>Forgot Password?</MyLinkButton>
                    </MyView>
                    <MyButton onPress={handleSubmit(onSubmit)} fullW size='large'>
                        Log in
                    </MyButton>
                    <DividerWithLabel label='Or' />

                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton fullW onPress={goToSignup} status='basic' secondary size='large'
                            accessoryLeft={<IconGoogle />}
                        >Sign in with Google</MyButton>
                    </MyView>
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton fullW onPress={goToSignup} status='basic'
                            accessoryLeft={<IconApple />}
                            secondary size='large'>Sign in with Apple</MyButton>
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

