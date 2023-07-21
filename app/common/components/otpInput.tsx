import React, { useState, useRef } from 'react';
import { View, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { Input, Text } from '@ui-kitten/components';
import { MyView } from './layouts';

type OtpInputProps = {
    error?: string,
    length:number,
    onChange?: (otp: string) => void
}

const OtpInput: React.FC<OtpInputProps> = ({ error = '',length, onChange = () => { } }) => {
    const [otp, setOtp] = useState<string>('');

    const otpInputRefs = useRef<(Input | null)[]>([]);

    const handleOtpChange = (value: string, index: number) => {
        const updatedOtp = otp.split('');
        updatedOtp[index] = value;
        setOtp(updatedOtp.join(''));
        onChange(updatedOtp.join(''));
        // Move to the next input field
        // if (value && index < otpInputRefs.current.length - 1) {
        //     otpInputRefs.current[index + 1]!.focus();
        // }
    };

    const handleOtpKeyPress = (event: any, index: number) => {
        if (event.nativeEvent.key === 'Backspace' && index > 0) {
          // Move focus to the previous input if Backspace is pressed
          otpInputRefs.current[index - 1]?.focus();
        } else if (index < 5 - 1 && event.nativeEvent.key >= '0' && event.nativeEvent.key <= '9') {
          // Move focus to the next input if a digit (0-9) is pressed
          otpInputRefs.current[index + 1]?.focus();
        }
      };


    const handleOtpKeyPress1 = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        // Remove the previous digit when pressing backspace
        if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            const updatedOtp = otp.split('');
            updatedOtp[index - 1] = '';
            setOtp(updatedOtp.join(''));
            otpInputRefs.current[index - 1]!.focus();
        }
    };

    return (

        <>
            <View style={{ flexDirection: 'row' }}>
                <>
                    {Array.from({ length: length }, (_, index) => (
                        <Input
                            key={`${index}-otp`}
                            ref={(ref) => (otpInputRefs.current[index] = ref)}
                            value={otp[index]}
                            status={error.length > 0 ? 'danger' : 'basic'}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={(event) => handleOtpKeyPress(event, index)}
                            textStyle={{
                                paddingTop: 2,
                                paddingBottom: 2,
                                textAlign: 'center' 
                            }}
                            style={{
                                width: 60,
                                marginHorizontal: 4,
                                textAlign: 'center',
                                backgroundColor: 'white',
                                borderRadius: 10,
                            }}
                            keyboardType="numeric"
                            maxLength={1}
                        />
                    ))}
                </>
            </View>
            <MyView pl={8} pr={8} mt={8}>
                <Text status='danger'>
                    {error}
                </Text>
            </MyView>
        </>

    );
};

export default OtpInput;
