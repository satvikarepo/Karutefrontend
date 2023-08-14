import { View, Image,StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { MyLinkButton} from '../../../common/components/buttons';
import { MyView } from '../../../common/components/layouts';
import { colors } from '../../../theme/vars';
import { Img } from '../../ForgetResetPassword/imports';


const HomePageTopBanner = () => {
    return <MyView mt={16} bg={colors['color-primary-100']} borderRadius={10} minH={130}>
        <MyView fullW style={bannerStyle.main} >
            <View style={bannerStyle.leftBox}>
                <Text category='h6'>Early protection for your family health</Text>
                <View style={bannerStyle.viewMore}>
                    <MyLinkButton mt={8}>Learn more</MyLinkButton>
                </View>
            </View>
            <View style={bannerStyle.rightBox}>
                <MyView bg={colors.white}
                    w={110} h={110} borderRadius={70}
                    style={bannerStyle.bgCircle} >
                </MyView>
                <Image style={bannerStyle.img} source={Img.DummyDoc()} />
            </View>
        </MyView>
    </MyView>
}

const bannerStyle=StyleSheet.create({
    main:{
        flexDirection: 'row'
    },
    leftBox:{
        width: '60%', height: 130, padding: 24
    },
    rightBox:{
        width: '40%', height: 130, alignItems: 'flex-end',
        flex: 1
    },
    bgCircle:{
        position: 'absolute', opacity: 0.7, right: 5, top: 15
    },
    img:{
        position: 'absolute', top:5, right: 16
    },
    viewMore:{
        position: 'absolute', bottom: 24, left: 24
    }
})


export default HomePageTopBanner;