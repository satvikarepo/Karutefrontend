import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';

import { useSelector,useDispatch } from "../../../redux/store";
import { logout } from "../../../redux/actions/global";
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList } from '../../../common/types';
import { MyButton } from '../../../common/components/buttons';


export const Stack = createStackNavigator<AppPublicStackParamList>();

interface IProfile{
}

const Profile = (props:IProfile) => {

    const dispatch = useDispatch();
    const onLogout=()=>{
        dispatch(logout());
    }

    return <Layout style={styles.tabContainer}>
        <Text>Profile</Text>
        <MyButton onPress={onLogout}>Log out</MyButton>
    </Layout>
}

export default Profile;