import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Layout, Text, Avatar, Divider, List, Card, ListItem, Icon } from '@ui-kitten/components';
import { View } from 'react-native';

import { useSelector, useDispatch } from "../../../redux/store";
import { logout } from "../../../redux/actions/global";
import { styles } from '../../../theme/styles';
import { AppPublicStackParamList, ProfileStackParamList } from '../../../common/types';
import { MyButton, MyIconButton } from '../../../common/components/buttons';
import { DividerWithLabel, MyCircle, MyView } from '../../../common/components/layouts';
import { IconProfile } from '../../../assets/icons/Profile';
import { colors } from '../../../theme/vars';
import { IconLogout } from '../../../assets/icons/Logout';
import { IconFamily } from '../../../assets/icons/Family';


export const Stack = createStackNavigator<AppPublicStackParamList>();
type ProfileProp = StackNavigationProp<ProfileStackParamList, 'ProfileHome'>;


interface IProfile {
}

const Profile = (props: IProfile) => {
    const navigation = useNavigation<ProfileProp>();
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }

    const goToFamily = () => {
        navigation.navigate<any>('Family', { data: "" });
    };
    return <Layout style={[styles.tabContainer, { padding: 0 }]}>
        <MyView direction='row' mb={8} alignItems='center'
            fullW pl={20} pr={20} pt={8} pb={8}>
            <>
                <MyCircle borderW={1} w={60} bg={colors.primary}>
                    <IconProfile color={colors.white} />
                </MyCircle>
                <MyView ml={16} style={{ flex: 2 }}>
                    <>
                        <Text category="h5">John Doe</Text>
                        <Text category="s1">JohnDoe@gmail.com</Text>
                    </>
                </MyView>
            </>
        </MyView>
        <Divider />
        <Layout style={{
            flexDirection: 'row', padding: 16,
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, paddingLeft: 16, }}>
                    <MyIconButton square onPress={goToFamily}>
                        <IconFamily color={colors.primary} />
                    </MyIconButton>
                </View>
                <View style={{ flex: 1, paddingRight: 16, alignItems: 'flex-end' }}>
                    <MyIconButton onPress={onLogout}>
                        <IconLogout color={colors.primary} />
                    </MyIconButton>
                </View>
            </View>
        </Layout>

    </Layout>
}

export default Profile;