import { Datepicker, Layout, Select, SelectItem, Text } from '@ui-kitten/components';
import { styles } from '../../../theme/styles';
import { MyCard, MyView } from '../../../common/components/layouts';
import { View } from 'react-native';
import { colors } from '../../Signup/imports';



const Family = () => {
    return <Layout style={[styles.tabContainer, {}]}>
        <MyCard>
            <Text>Hello</Text>
        </MyCard>
    </Layout>
}

export default Family;