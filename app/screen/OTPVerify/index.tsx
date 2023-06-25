import { StatusBar } from 'expo-status-bar';
import { Layout, Card, Text } from '@ui-kitten/components';

import { MyView } from '../../common/components/layouts';
import OtpInput from '../../common/components/otpInput';
import { styles } from '../../theme/styles';
import { MyButton } from '../../common/components/buttons';

export default function OTPVerify() {
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
        <MyButton onPress={() => null} size='large'>Continue</MyButton>
      </Layout>
    </>
  );
}

