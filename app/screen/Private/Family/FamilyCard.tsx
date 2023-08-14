import { Text } from '@ui-kitten/components';
import { TouchableHighlight, View } from 'react-native';

import { styles } from '../../../theme/styles';
import { HStack, MyView } from '../../../common/components/layouts';
import { FamilyMember } from '../../../common/types';
import { colors } from '../../../theme/vars';
import { IconClose } from '../../../assets/icons/Close';
import { MyButton, MyIconButton } from '../../../common/components/buttons';

interface IFamilyCard {
    data: FamilyMember,
    onDelete: (id: number) => void,
    mb?: number
}

const FamilyCard = ({ data, mb, onDelete }: IFamilyCard) => {

    const colorMap = {
        'self': { bg: colors.blueBg, nameInitalBg: colors.blue, border: colors.blueBorder },
        'spouse': { bg: colors.redBg, nameInitalBg: colors.red, border: colors.redBorder },
        'children': { bg: colors.yellowBg, nameInitalBg: colors.yellow, border: colors.yellowBorder },
        'parents': { bg: colors.yellowBg, nameInitalBg: colors.yellow, border: colors.yellowBorder },
        'mother': { bg: colors.yellowBg, nameInitalBg: colors.yellow, border: colors.yellowBorder },
        'father': { bg: colors.yellowBg, nameInitalBg: colors.yellow, border: colors.yellowBorder }
    }

    const relation = data.relation.toLocaleString().toLocaleLowerCase();
    const color = colorMap[relation as keyof typeof colorMap] || colorMap.self;

    return <MyView focusable borderRadius={24} mb={mb}
        fullW pd={16}
        borderColor={color.border} borderW={1}
        bg={color.bg}
        style={styles.shadow}>
        <View focusable style={{ position: 'absolute', zIndex: 1000, top: 15, right: 15 }}>
            <MyIconButton w={30} onPress={() => onDelete(data.id as number)}>
            <IconClose w={16} h={16} color={colors.black} />
            </MyIconButton>
        </View>
        <HStack gap={8}>
            <MyView w={60} h={60} alignItems='center' style={{ justifyContent: 'center' }}
                borderRadius={18}
                bg={color.nameInitalBg}
            >
                <Text category='s1' style={{ color: colors.white, fontSize: 48 }}>
                    {data.fullName[0]}
                </Text>
            </MyView>
            <MyView pl={8} style={{ justifyContent: 'center' }}>
                <Text category='h5'>{data.fullName}</Text>
                <Text category='h6' style={{ color: colors.red }}>{data.relation}</Text>
                <Text category='s2' style={{ fontSize: 18 }} >{data.gender} </Text>
            </MyView>
        </HStack>
    </MyView>
}

export default FamilyCard;