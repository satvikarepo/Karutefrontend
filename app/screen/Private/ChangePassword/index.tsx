import { Layout, Text } from '@ui-kitten/components';
import { Image, View } from 'react-native';
import { useForm, SubmitHandler } from "react-hook-form";

import { Img } from '../../../assets/Banners';
import { styles } from '../../../theme/styles';
import { MyView } from '../../../common/components/layouts';
import { ChangePasswordForm } from '../../../common/types';
import { MyButton } from '../../../common/components/buttons';
import { FormInputPassword } from '../../../common/components/Forms/FormInput';
import { IconLock } from '../../../assets/icons/Lock';
import { colors } from '../../../theme/vars';

const ChangePassword = () => {
    const form = useForm<ChangePasswordForm>();
    const { control, handleSubmit, formState: { errors } } = form;
    return <Layout style={[styles.tabContainer, {}]}>
        <MyView fullW alignItems='center' mt={16} mb={8}>
            <Text category='h4'>Change your password</Text>
        </MyView>
        <MyView fullW alignItems='center' mb={40}>
            <Text appearance='hint'>Stay protected: Update old password today.</Text>
        </MyView>
        <View style={styles.row}>
            <FormInputPassword control={control} rules={{
                required: 'Password is required.',
                maxLength: { value: 100, message: "Maximum 100 characters allowed." },
            }} placeholder="Old password" name='oldPassword'
                prefix={<IconLock color={colors.primary} />}
                error={errors.oldPassword && errors.oldPassword.message}
            />
        </View>
        <View style={styles.row}>
            <FormInputPassword control={control} rules={{
                required: 'Password is required.',
                maxLength: { value: 100, message: "Maximum 100 characters allowed." },
            }} placeholder="New password" name='newPassword'
                prefix={<IconLock color={colors.primary} />}
                error={errors.newPassword && errors.newPassword.message}
            />
        </View>
        <View>
            <FormInputPassword control={control} rules={{
                required: 'Password is required.',
                maxLength: { value: 100, message: "Maximum 100 characters allowed." },
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
        <MyButton fullW>Continue</MyButton>
    </Layout>
}

export default ChangePassword;