import { StatusBar } from 'expo-status-bar';
import { Layout, Card, Text } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { MyView } from '../../common/components/layouts';
import OtpInput from '../../common/components/otpInput';
import { styles } from '../../theme/styles';
import { MyButton } from '../../common/components/buttons';
import { AppPublicStackParamList } from '../../common/types';

type OTPVerifyProp = StackNavigationProp<AppPublicStackParamList, 'OTPVerify'>;

export default function OTPVerify() {
  const navigation = useNavigation<OTPVerifyProp>();
  const goToLogin = () => {
   navigation.navigate<any>('Login', { data: "" });
};

  return (
    <>
      <Layout style={styles.container}>
      <StatusBar style="auto" />
        <MyView fullW mb={12} alignItems='center'>
          <>
            <Text category="h4">Enter verification code</Text>
          </>
        </MyView>
        <MyView fullW mb={24} alignItems='center'>
          <>
            <Text style={{textAlign:'center'}} appearance='hint'>We have sent a verification code to your email.
             Please check your inbox and enter the code below.</Text>
          </>
        </MyView>
        <MyView fullW mb={24} alignItems='center'>
          <OtpInput />
        </MyView>
        <MyView fullW mb={24} alignItems='center'>
          <Card>
            <Text>
              This is dummy text. The Maldives, officially the Republic of Maldives, is a small country in South Asia,
              located in the Arabian Sea of the Indian Ocean.
              It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
              </Text>
          </Card>
        </MyView>
        <MyButton fullW onPress={goToLogin} size='large'>Continue</MyButton>
      </Layout>
    </>
  );
}

