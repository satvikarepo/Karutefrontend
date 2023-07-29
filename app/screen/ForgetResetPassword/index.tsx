import {Layout,Text,Image, View, ScrollView,useForm,SubmitHandler,StackNavigationProp,
    useNavigation,RouteProp, Img, styles, MyView,AppPublicStackParamList,ChangePasswordForm,MyButton,
FormInputPassword,IconLock,colors,useDispatch,logout,closeModel,showModel,commanMessage,
SubmitRecoverPassword,OtpSuccess} from "./imports";

type ResetPasswordRouteProp = RouteProp<AppPublicStackParamList, 'ResetPassword'>;
type stackProp = StackNavigationProp<AppPublicStackParamList, 'ResetPassword'>;
type Props = {
    route: ResetPasswordRouteProp;
  };
const ForgetResetPassword = (props: Props) => {
    const routeData=props.route.params.data;
    const dispatch = useDispatch();
    const navigation = useNavigation<stackProp>();
    const form = useForm<ChangePasswordForm>();
    const { control, handleSubmit, formState: { errors } } = form;
    const goToLogin = () => {
        navigation.navigate<any>('Login', { data: "" });
        dispatch(logout());
        dispatch(closeModel());
    }
    const onSubmit: SubmitHandler<ChangePasswordForm> = (data, e) => {
        e?.preventDefault();
        const submitData:ChangePasswordForm={...routeData,newPassword:data.newPassword};
        SubmitRecoverPassword(submitData, () => {
            dispatch(showModel(<OtpSuccess cb={goToLogin} />));
        })
        return false;
    }
    const validatePasswordMatch = (confirmPassword: string) => {
        const password = form.getValues('newPassword');
        return confirmPassword === password || 'New passwords do not match.';
    };

    return <ScrollView style={styles.scrollView}>
        <Layout style={[styles.container, {}]}>
            <MyView fullW alignItems='center' mt={12} mb={8}>
                <Text category='h4'>Forget password</Text>
            </MyView>
            <MyView fullW alignItems='center' mb={36}>
                <Text appearance='hint'>Enter your registered email address.</Text>
            </MyView>
            <View style={styles.row}>
                <FormInputPassword control={control} rules={{
                    required: 'New password is required.',
                    maxLength: { value: 100, message: commanMessage.Len_100 },
                }} placeholder="New password" name='newPassword'
                    prefix={<IconLock color={colors.primary} />}
                    error={errors.newPassword && errors.newPassword.message}
                />
            </View>
            <View style={styles.row}>
                <FormInputPassword control={control} rules={{
                    required: 'Confirm password is required.',
                    maxLength: { value: 100, message: commanMessage.Len_100 },
                    validate: validatePasswordMatch
                }} placeholder="Confirm password" name='confirmPassword'
                    prefix={<IconLock color={colors.primary} />}
                    error={errors.confirmPassword && errors.confirmPassword.message}
                />
            </View>
            <MyView fullW mb={16} mt={48} alignItems='center'>
                <>
                    <Image style={{ width: 300, height: 300 }} source={Img.ForgetPassword()} />
                </>
            </MyView>
            <MyButton fullW onPress={handleSubmit(onSubmit)} >Continue</MyButton>
        </Layout>
    </ScrollView>
}

export default ForgetResetPassword;