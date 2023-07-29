import { Layout, Text } from '@ui-kitten/components';
import { Image, View, ScrollView } from 'react-native';
import { useForm, SubmitHandler } from "react-hook-form";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Img } from '../../assets/Banners';
import { styles } from '../../theme/styles';
import { MyView } from '../../common/components/layouts';
import { AppPublicStackParamList, ChangePasswordForm } from '../../common/types';
import { MyButton } from '../../common/components/buttons';
import { FormInput } from '../../common/components/Forms/FormInput';
import { colors } from '../../theme/vars';
import { useDispatch } from '../../redux/store';
import { SendForgetPasswordOtp } from '../../redux/actions/global';
import { IconMessage } from '../../assets/icons/Message';
import { commanMessage, regex } from '../../common/constants';


type ForgetPasswordProp = StackNavigationProp<AppPublicStackParamList, 'ForgetPassword'>;

const ForgetPassword = () => {
    const navigation = useNavigation<ForgetPasswordProp>();
    const goToOTPVerify = (_data:ChangePasswordForm) => navigation.navigate<any>('OTPVerify', { data: {src:'forgetpwd', data:_data} });
    const dispatch=useDispatch();

    const form = useForm<ChangePasswordForm>();
    const { control, handleSubmit, formState: { errors } } = form;
   
    const onSubmit: SubmitHandler<ChangePasswordForm> = (data, e) => {
        e?.preventDefault();

        dispatch(SendForgetPasswordOtp(data.email,(otp:string)=>{
            data.tempPassword=otp;
            goToOTPVerify(data);
        }));
        return false;
    }

    return <ScrollView style={styles.scrollView}>
        <Layout style={[styles.container, {}]}>
            <MyView fullW alignItems='center' mt={12} mb={8}>
                <Text category='h4'>Forget password</Text>
            </MyView>
            <MyView fullW alignItems='center' mb={36}>
                <Text appearance='hint'>Enter your registered email address.</Text>
            </MyView>
            <View style={styles.row}>
                <FormInput control={control} rules={{
                    required: commanMessage.EmailReq,
                    maxLength: { value: 100, message: commanMessage.Len_100 },
                    pattern:{value:regex.email,message:commanMessage.InvalidEmail}
                }} placeholder="Email" name='email'
                    prefix={<IconMessage color={colors.primary} />}
                    error={errors.email && errors.email.message}
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

export default ForgetPassword;