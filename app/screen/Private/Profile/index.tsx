import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Layout, Text, Divider, List, ListItem } from '@ui-kitten/components';

import { useSelector, useDispatch } from "../../../redux/store";
import { logout } from "../../../redux/actions/global";
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList, ProfileStackParamList } from '../../../common/types';
import { MyCircle, MyView } from '../../../common/components/layouts';
import { IconProfile } from '../../../assets/icons/Profile';
import { colors } from '../../../theme/vars';
import { IconLogout } from '../../../assets/icons/Logout';
import { IconFamily } from '../../../assets/icons/Family';
import { IconChangePwd } from '../../../assets/icons/ChangePwd';
import { startLoading } from '../../../redux/actions/commonActions';


export const Stack = createStackNavigator<AppPublicStackParamList>();
type ProfileProp = StackNavigationProp<ProfileStackParamList, 'ProfileHome'>;

interface IListItem {
    id: string,
    title: string;
    description: string;
    icon?: JSX.Element
}
const ProfileListData: IListItem[] = [
    { id: 'FM', title: 'Family members', description: '', icon: <IconFamily color={colors.primary} /> },
    { id: 'DMY', title: 'Dummy', description: '', icon: <IconProfile color={colors.primary} /> },
    { id: 'DMY1', title: 'Dummy1', description: '', icon: <IconProfile color={colors.primary} /> },
    { id: 'CP', title: 'Change password', description: '', icon: <IconChangePwd color={colors.primary} /> },
    { id: 'LO', title: 'Logout', description: '', icon: <IconLogout color={colors.primary} /> }
]

interface IProfile {
}

const Profile = (props: IProfile) => {
    const user = useSelector(state => state.global.user);
    const navigation = useNavigation<ProfileProp>();
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(startLoading())
        setTimeout(() => {
            dispatch(logout());
        }, 500);
        
    }

    const goToFamily = () => {
        navigation.navigate<any>('Family', { data: "" });
    };

    const goToChangePassword = () => {
        navigation.navigate<any>('ChangePassword', { data: "" });
    };

    const onListPress = (item: IListItem, index: number) => {
        switch (item.id) {
            case 'FM':
                goToFamily();
                break;
            case 'CP':
                goToChangePassword();
                break;
            case 'LO':
                onLogout();
                break;
            default:
                break;
        }
    }

    const renderItem = ({ item, index }: { item: IListItem; index: number }): React.ReactElement => (
        <ListItem key={`${item.title} ${index + 1}`}
            title={`${item.title}`}
            onPress={() => onListPress(item, index)}
            accessoryLeft={item.icon}
            style={{ paddingLeft: 24, paddingRight: 16 }}
        />
    );

    return <Layout style={[styles.tabContainer, { padding: 0 }]}>
        <MyView direction='row' alignItems='center' 
            fullW pl={16} pr={16} pt={16} pb={16}>
            <>
                <MyCircle borderW={1} w={60} bg={colors.primary}>
                    <IconProfile color={colors.white} />
                </MyCircle>
                <MyView ml={16} style={{ flex: 2 }}>
                    <>
                        <Text category="h5">{user?.name}</Text>
                        <Text category="s1">{user?.email}</Text>
                    </>
                </MyView>
            </>
        </MyView>
        <Divider />
        <List data={ProfileListData}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem} />
    </Layout>
}

export default Profile;