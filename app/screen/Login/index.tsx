// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';

import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';
import { MyInput, MyPassword } from '../../common/components/inputs';
import { MyButton, MyLinkButton } from '../../common/components/buttons';
import { MyView } from '../../common/components/layouts';

type LoginProp = StackNavigationProp<AppStackParamList, 'Login'>;



export default function Login({ }) {

    const navigation = useNavigation<LoginProp>();
    const goToSignup = () => {
        navigation.navigate<any>('Signup', { data: "" });
    };

    return (
        <>
            <Layout style={styles.container}>
                {/* <Icon name='star' /> */}
                <View style={[styles.row, { alignItems: 'center' }]}>
                    <Text category="h1">Login</Text>
                </View>
                <View style={styles.row}>
                    <MyInput placeholder='Username' />
                </View>
                <MyView fullW mb={8}>
                    <MyPassword placeholder='Password' />
                </MyView>
                <MyView fullW mb={16} alignItems='right'>
                    <MyLinkButton textAlign='right'>Forgot Password?</MyLinkButton>
                </MyView>
                <MyButton onPress={goToSignup} size='large'>Log in</MyButton>

            </Layout>
            <Layout>
                <MyView fullW alignItems='center' pt={8} pb={8}>
                    <MyView direction='row'>
                        <>
                            <Text>Don't have an account?</Text>
                            <MyLinkButton ml={4} textAlign='right'>Sign up</MyLinkButton>
                        </>
                    </MyView>
                </MyView>
            </Layout>

        </>
    );
}

