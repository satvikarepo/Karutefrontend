import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList } from '../../../common/types';
import { MyButton } from '../../../common/components/buttons';


export const Stack = createStackNavigator<AppPublicStackParamList>();

interface IProfile{
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const Profile = (props:IProfile) => {
    return <Layout style={styles.container}>
        <Text>Profile</Text>
        <MyButton onPress={()=>props.setLogin(false)}>Log out</MyButton>
    </Layout>
}

export default Profile;