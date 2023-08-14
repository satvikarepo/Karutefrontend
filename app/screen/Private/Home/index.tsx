import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, View, Image } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList } from '../../../common/types';
import { MyInput } from '../../../common/components/inputs';
import { IconSearch } from '../../../assets/icons/Search';
import { MyView, colors } from '../../Signup/imports';
import { IconBell } from '../../../assets/icons/IconBell';
import HomePageTopBanner from './HomePageTopBanner';


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
            <HomePageTopBanner/>
            <HomePageTopBanner/>
        </Layout>
    </ScrollView>
}

export default Home;