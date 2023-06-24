import React, { useState, useRef } from 'react';
import { View, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { Input } from '@ui-kitten/components';
import { MyInput } from './inputs';

const OtpInput: React.FC = () => {
    const [otp, setOtp] = useState<string>('');
    const otpInputRefs = useRef<(Input | null)[]>([]);

    const handleOtpChange = (value: string, index: number) => {
        const updatedOtp = otp.split('');
        updatedOtp[index] = value;
        setOtp(updatedOtp.join(''));

        // Move to the next input field
        if (value && index < otpInputRefs.current.length - 1) {
            otpInputRefs.current[index + 1]!.focus();
        }
    };

    const handleOtpKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        // Remove the previous digit when pressing backspace
        if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            const updatedOtp = otp.split('');
            updatedOtp[index - 1] = '';
            setOtp(updatedOtp.join(''));
            otpInputRefs.current[index - 1]!.focus();
        }
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            {Array.from({ length: 5 }, (_, index) => (
                <>
                    <Input
                        key={index}
                        ref={(ref) => (otpInputRefs.current[index] = ref)}
                        value={otp[index]}
                        onChangeText={(value) => handleOtpChange(value, index)}
                        onKeyPress={(event) => handleOtpKeyPress(event, index)}
                        textStyle={{
                            paddingTop:2,
                            paddingBottom:2,
                        }}
                        style={{
                            width: 50,
                            marginHorizontal: 4,
                            textAlign: 'center',
                            backgroundColor: 'white',
                            borderRadius: 10
                        }}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                </>
            ))}
        </View>
    );
};

export default OtpInput;
