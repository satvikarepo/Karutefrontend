import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, Dimensions, View, Image, StyleSheet } from 'react-native';
import { Layout, Text, ViewPager } from '@ui-kitten/components';
import { styles } from '../../theme/styles';

import { MyButton, MyLinkButton, MyView, colors } from '../Signup/imports';
import { IconBell } from '../../assets/icons/IconBell';
import { spacing } from '../../theme/vars';


const dim = Dimensions.get('screen');
const AppIntro = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const onNext = () => {
        if (selectedIndex < 2) {
            setSelectedIndex(index => index + 1);
        }
    }

    return <ScrollView style={[styles.scrollView, {}]}>

        <ViewPager
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}
        >
            <Layout
                style={introStyles.tab}
                level='2'
            >
                <Text category='h5'>
                    USERS
                </Text>
                <MyView minH={200} pl={24} pr={24} fullW bg={colors.bg} alignItems='center'
                    style={{
                        borderTopEndRadius: 25, borderTopStartRadius: 25,
                        position: 'absolute', bottom: 0,
                    }}>
                    <MyView mt={24} alignItems='center'>
                        <Text category='h5'>Find the best doctors in your</Text>
                        <Text category='h5'>vicinity</Text>
                    </MyView>
                    <MyView mt={16} w="70%" style={{justifyContent:'center', alignItems:'center'}}>
                        <Text appearance='hint'>With the help of our intelligent algorithms,</Text>
                        <Text appearance='hint'>now locate the best doctors around your</Text>
                        <Text appearance='hint'>vicinity at total ease.</Text>
                    </MyView>
                </MyView>
            </Layout>
            <Layout
                style={introStyles.tab}
                level='2'
            >
                <Text category='h5'>
                    ORDERS
                </Text>
            </Layout>
            <Layout
                style={introStyles.tab}
                level='2'
            >
                <Text category='h5'>
                    TRANSACTIONS
                </Text>
            </Layout>
        </ViewPager>
        <View style={{ position: 'absolute', top: 50, right: 30 }}>
            <MyLinkButton w={50} withBg>Skip</MyLinkButton>
        </View>
        <MyView pd={16} pl={24} pr={24} fullW>
            <MyButton fullW onPress={onNext}>Next</MyButton>
        </MyView>
    </ScrollView>
}

const introStyles = StyleSheet.create({
    tab: {
        height: dim.height - spacing.bottomTab.h - 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
});

export default AppIntro;

