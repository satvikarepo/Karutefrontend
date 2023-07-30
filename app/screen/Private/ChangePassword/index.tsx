import { Layout, Text } from '@ui-kitten/components';
import { Image, View, ScrollView } from 'react-native';
import { useForm, SubmitHandler } from "react-hook-form";

import { Img } from '../../../assets/Banners';
import { styles } from '../../../theme/styles';
import { MyView } from '../../../common/components/layouts';
import { ChangePasswordForm } from '../../../common/types';
import { MyButton } from '../../../common/components/buttons';
import { FormInputPassword } from '../../../common/components/Forms/FormInput';
import { IconLock } from '../../../assets/icons/Lock';
import { colors } from '../../../theme/vars';
import { useDispatch, useSelector } from '../../../redux/store';
import { SubmitChangePassword, logout } from '../../../redux/actions/global';
import ChangePasswordSuccess from './ChangePasswordSuccess';
import { closeModel, showModel } from '../../../redux/actions/commonActions';


const ChangePassword = () => {
    const email=useSelector(state=>state.global.user?.email);
    const dispatch=useDispatch();

    const form = useForm<ChangePasswordForm>();
    const { control, handleSubmit, formState: { errors } } = form;
    const goToLogin=()=>{
        dispatch(closeModel());
        dispatch(logout());
    }
    const onSubmit: SubmitHandler<ChangePasswordForm> = (data, e) => {
        e?.preventDefault();
        dispatch(SubmitChangePassword(email,data,()=>{
            dispatch(showModel(<ChangePasswordSuccess cb={goToLogin} />));
        }))
        return false;
    }
    const validatePasswordMatch = (confirmPassword: string) => {
        const password = form.getValues('newPassword');
        return confirmPassword === password || 'New passwords do not match.';
    };

    return <ScrollView style={styles.scrollView}>
        <Layout style={[styles.tabContainer, {}]}>
            <MyView fullW alignItems='center' mt={12} mb={8}>
                <Text category='h4'>Change your password</Text>
            </MyView>
            <MyView fullW alignItems='center' mb={36}>
                <Text appearance='hint'>Stay protected: Update old password today.</Text>
            </MyView>
            <View style={styles.row}>
                <FormInputPassword control={control} rules={{
                    required: 'Old password is required.',
                    maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                }} placeholder="Old password" name='oldPassword'
                    prefix={<IconLock color={colors.primary} />}
                    error={errors.oldPassword && errors.oldPassword.message}
                />
            </View>
            <View style={styles.row}>
                <FormInputPassword control={control} rules={{
                    required: 'New password is required.',
                    maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                }} placeholder="New password" name='newPassword'
                    prefix={<IconLock color={colors.primary} />}
                    error={errors.newPassword && errors.newPassword.message}
                />
            </View>
            <View>
                <FormInputPassword control={control} rules={{
                    required: 'Confirm password is required.',
                    maxLength: { value: 100, message: "Maximum 100 characters allowed." },
                    validate: validatePasswordMatch
                }} placeholder="Confirm password" name='confirmPassword'
                    prefix={<IconLock color={colors.primary} />}
                    error={errors.confirmPassword && errors.confirmPassword.message}
                />
            </View>
            <MyView fullW mb={8} alignItems='center'>
                <>
                    <Image style={{ width: 250, height: 250 }} source={Img.OTPSuccess()} />
                </>
            </MyView>
            <MyButton fullW onPress={handleSubmit(onSubmit)} >Continue</MyButton>
        </Layout>
    </ScrollView>
}

export default ChangePassword;