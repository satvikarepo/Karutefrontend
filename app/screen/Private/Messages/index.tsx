import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList } from '../../../common/types';


export const Stack = createStackNavigator<AppPublicStackParamList>();

const Messages = () => {
    return <Layout style={styles.container}>
        <Text>Messages</Text>
    </Layout>
}

export default Messages;