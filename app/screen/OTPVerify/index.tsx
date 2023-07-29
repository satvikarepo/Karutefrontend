import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Layout, Text } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, RouteProp } from '@react-navigation/native';

import { MyView } from '../../common/components/layouts';
import OtpInput from '../../common/components/otpInput';
import { styles } from '../../theme/styles';
import { MyButton } from '../../common/components/buttons';
import { AppPublicStackParamList,ChangePasswordForm, SignUpForm } from '../../common/types';
import { Image } from 'react-native';
import { Img } from '../../assets/Banners';
import { useDispatch } from '../../redux/store';
import { closeModel, showModel } from '../../redux/actions/commonActions';
import OtpSuccess from './OtpSuccess';
import { SubmitRegistration } from './OtpUtil';
import { commanMessage } from '../../common/constants';

type OTPVerifyProp = StackNavigationProp<AppPublicStackParamList, 'OTPVerify'>;
type OTPVerifyScreenRouteProp = RouteProp<AppPublicStackParamList, 'OTPVerify'>;
type Props = {
  route: OTPVerifyScreenRouteProp;
};

interface SrcObject {
  signup: () => void;
  forgetpwd: () => void;
}


export default function OTPVerify(props: Props) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const dispatch=useDispatch();

  const navigation = useNavigation<OTPVerifyProp>();
  const goToLogin = () => {
    dispatch(closeModel());
    navigation.navigate<any>('Login', { data: "" });
  };
  const goToRestPwd = (_data:ChangePasswordForm) => navigation.navigate<any>('ResetPassword', { data: _data });
  const {src, data} = props.route.params.data;
  
  const ExecuteFlow=(key: keyof SrcObject)=>{
    let fn=flow[key];
    fn();
  }



  const flow={
    signup:()=>{
      const signUpData=data as SignUpForm;
      if (otp === "") {
        setError(commanMessage.EnterOTP);
        return;
      }
      if (signUpData.emailOtp !== otp) {
        setError(commanMessage.InvalidOTP);
        return;
      }
      setError('');
      SubmitRegistration(signUpData,()=>{
        dispatch(showModel(<OtpSuccess cb={goToLogin} />));
      });
    },
    forgetpwd:()=>{
      let forgerPwdData=data as ChangePasswordForm;
      console.log(forgerPwdData);
      if (otp === "") {
        setError(commanMessage.EnterOTP);
        return;
      }
      if (forgerPwdData.tempPassword !== otp) {
        setError(commanMessage.InvalidOTP);
        return;
      }
      goToRestPwd(forgerPwdData);
      // SubmitRecoverPassword(forgerPwdData,()=>{
      //   dispatch(showModel(<OtpSuccess cb={goToLogin} />));
      // })
    }
  }


  const matchOtp = () => {
    // const data = props.route.params.data as SignUpForm;
    // if(src==='signup'){
    //   signUpData=data as SignUpForm;
    // }else if(src==='forgetpwd'){
    //   forgerPwdData=data as ChangePasswordForm;
    // }

    // const otpMsg = 'Invalid OTP. Please re-enter the OTP or change the email.';
    // if (otp === "") {
    //   setError("Please enter OTP.");
    //   return;
    // }
    // if (signUpData.emailOtp !== otp) {
    //   setError(otpMsg);
    //   return;
    // }
    // setError('');
    // SubmitRegistration(signUpData,()=>{
    //   dispatch(showModel(<OtpSuccess cb={goToLogin} />));
    // });
  }

  return (
    <>
      <Layout style={[styles.tabContainer, { alignItems: 'center' }]}>
        <StatusBar style="auto" />
        <MyView fullW mb={12} alignItems='center'>
          <>
            <Text category="h4">Enter verification code</Text>
          </>
        </MyView>
        <MyView w={200} mb={24} alignItems='center'>
          <Text style={{ textAlign: 'center' }} appearance='hint'>We have sent a verification code to your email.</Text>
        </MyView>
        <MyView fullW mb={24} alignItems='center'>
          <OtpInput length={5} error={error} onChange={(value) => setOtp(value)} />
        </MyView>
        <MyView fullW mb={40} alignItems='center'>
          <Image style={{ width: 300, height: 300 }} source={Img.OTPBanner()} />
        </MyView>
        <MyButton fullW onPress={()=>ExecuteFlow(src)} size='large'>Verify and continue</MyButton>
      </Layout>
    </>
  );
}

