import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList } from '../../../common/types';
import { MyInput } from '../../../common/components/inputs';
import { IconSearch } from '../../../assets/icons/Search';
import { MyButton, MyLinkButton, MyView, colors } from '../../Signup/imports';
import { IconBell } from '../../../assets/icons/IconBell';


export const Stack = createStackNavigator<AppPublicStackParamList>();

const Home = () => {
    return <ScrollView style={[styles.scrollView, {}]}>
        <Layout style={[styles.tabContainer, { marginTop: 70 }]}>
            <MyView mb={16} style={{ width: '100%', flexDirection: 'row' }}>
                <View style={{ width: '80%' }}>
                    <Text category='h4' >Find your desire health solution</Text>
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end', flex: 1 }}>
                    <IconBell color={colors.primary} />
                </View>
            </MyView>
            <MyInput size='small' placeholder='Search doctor, drugs, articles...' prefix={<IconSearch color={colors.border} />} />
            <MyView mt={16} bg={colors.blueBg} pd={16} borderRadius={10}>
                <MyView mb={16} style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ width: '70%' }}>
                        <Text category='h6'>Early protection for your family health</Text>
                        <MyLinkButton>View more</MyLinkButton>
                    </View>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end', flex: 1 }}>
                        {/* <IconBell color={colors.primary} /> */}
                    </View>
                </MyView>
            </MyView>
        </Layout>
    </ScrollView>
}

export default Home;