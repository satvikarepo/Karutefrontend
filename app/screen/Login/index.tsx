import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from "../../routes";
import { styles } from '../../theme/styles';

type LoginProp = StackNavigationProp<AppStackParamList, 'Login'>;

export default function Login({ }) {
    
    const navigation = useNavigation<LoginProp>();
    const goToSignup = () => {
        navigation.navigate<any>('Signup', { data: "" });
    };
    
    return (
        <>
            <View style={styles.container}>
                <Text>This is login</Text>
                <StatusBar style="dark" />
                <Button
                    title="Go to Signup"
                    onPress={goToSignup}
                />
            </View>
        </>
    );
}

