import { Text } from '@ui-kitten/components';

import { MyView } from '../../common/components/layouts';
import { MyButton } from '../../common/components/buttons';
import { Image } from 'react-native';

import { Img } from '../../assets/Banners';

interface IOtpSuccess{
    cb:()=>void
}
const OtpSuccess = (props:IOtpSuccess) => {

    return (<MyView fullW minW={200} pd={14} alignItems='center'>
        <>
            <MyView fullW mb={0} alignItems='center'>
                <Image style={{ width: 300, height: 300 }} source={Img.OTPSuccess()} />
            </MyView>
            <Text category='h1' status='primary'>
                Congratulations
            </Text>
            <MyView fullW alignItems='center' mb={16}>
                <Text category='s1'>Your account is ready to use</Text>
            </MyView>
            <MyButton onPress={props.cb} fullW>Go to login</MyButton>
        </>
    </MyView>)
}

export default OtpSuccess;