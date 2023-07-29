import{View, ActivityIndicator, ScrollView,useNavigation,StackNavigationProp,Layout, Text,
    useForm, SubmitHandler,AppStackParamList,styles,MyButton, MyLinkButton,
    DividerWithLabel, Logo, MyView,IconGoogle,IconApple,IconLock,IconProfile,
IconMessage,colors,SendOtp,FormInput,FormInputPassword,regex,SignUpForm} from "./imports";


type NavigationProps = StackNavigationProp<AppStackParamList, 'Signup'>;

export default function Signup({ }) {
    const navigation = useNavigation<NavigationProps>();
    const form = useForm<SignUpForm>();
    const { control, handleSubmit, formState: { errors } } = form;

    const onSubmit: SubmitHandler<SignUpForm> = (data,e) => {
        e?.preventDefault();
        SendOtp(data, (dataWithOtp:SignUpForm)=>goToOTPVerify(dataWithOtp));
        return false;
    }

    const goToOTPVerify = (dataWithOtp:SignUpForm) => navigation.navigate<any>('OTPVerify', { data: {src:'signup',data:dataWithOtp} });
    const goToLogin = () => navigation.navigate<any>('Login', { data: '' });

    const validatePasswordMatch = (confirmPassword: string) => {
        const password = form.getValues('password');
        return confirmPassword === password || 'Passwords do not match';
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
                        <FormInput control={control} rules={{
                            required: 'Name is required.',
                            maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                            pattern: { value: regex.onlyAlphabets, message: "Invalid input." }
                        }} placeholder="Name" name='name'
                            prefix={<IconProfile color={colors.primary} />}
                            error={errors.name && errors.name.message}
                        />
                    </MyView>
                    <MyView fullW mb={16}>
                        <FormInput control={control} rules={{
                            required: 'Email is required.',
                            maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                            pattern: {
                                value: regex.email,
                                message: 'Invalid email address.',
                            },
                        }} placeholder="Email" name='email'
                            prefix={<IconMessage color={colors.primary} />}
                            error={errors.email && errors.email.message}
                        />
                    </MyView>
                    <MyView fullW mb={16}>
                        <FormInputPassword control={control} rules={{
                            required: 'Password is required.',
                            maxLength: { value: 100, message: "Maximum 100 characters allowed." }
                        }} placeholder="Password" name='password'
                            prefix={<IconLock color={colors.primary} />}
                            error={errors.password && errors.password.message}
                        />
                    </MyView>
                    <MyView fullW mb={16}>
                        <FormInputPassword control={control} rules={{
                            required: 'Confirm password is required.',
                            maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                            validate: validatePasswordMatch
                        }} placeholder="Password" name='confirmPassword'
                            prefix={<IconLock color={colors.primary} />}
                            error={errors.confirmPassword && errors.confirmPassword.message}
                        />
                    </MyView>
                    <MyButton fullW onPress={handleSubmit(onSubmit)} size='large'>
                    {/* <MyButton fullW onPress={onSave} size='large'> */}
                        {false ?
                            <ActivityIndicator size='small' style={{ margin: 0, padding: 0 }} color={colors.lightGrey} />
                            : 'Sign up'
                        }
                    </MyButton>
                    <DividerWithLabel label='Or' />
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton fullW onPress={goToLogin} secondary
                            accessoryLeft={<IconGoogle />}
                            size='large'>Sign up with Google</MyButton>
                    </MyView>
                    <MyView fullW mb={16} alignItems='right'>
                        <MyButton fullW onPress={goToLogin} secondary
                            accessoryLeft={<IconApple />}
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


