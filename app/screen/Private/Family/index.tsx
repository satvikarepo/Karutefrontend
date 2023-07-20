import { Datepicker, Layout, Select, SelectItem, Text } from '@ui-kitten/components';
import { styles } from '../../../theme/styles';
import { MyView } from '../../../common/components/layouts';


const Family = () => {
    return <Layout style={[styles.tabContainer, {}]}>
        <Text>Family</Text>
        <MyView fullW>
            <>
                <Datepicker />
                <Select>
                    <SelectItem title='Option 1' />
                    <SelectItem title='Option 2' />
                    <SelectItem title='Option 3' />
                </Select>
            </>
        </MyView>
    </Layout>
}

export default Family;