import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList } from '../../../common/types';


export const Stack = createStackNavigator<AppPublicStackParamList>();

const Home = () => {
    return <Layout style={[styles.tabContainer,{}]}>
        <Text>Dashboard</Text>

    </Layout>
}

export default Home;