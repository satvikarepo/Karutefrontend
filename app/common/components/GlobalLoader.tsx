import React, { useRef } from 'react';
import { View, ActivityIndicator, Animated, Modal } from 'react-native';
import { Text } from '@ui-kitten/components';

import { styles } from '../../theme/styles';
import { colors } from '../../theme/vars';
import { useSelector } from "../../redux/store";

import { HStack, Logo, MyCircle, MyView } from './layouts';


export const GlobalLoader = () => {
    const { loading } = useSelector(state => state.global);
    const contentPadding = 8;
    const opacityValue = useRef(new Animated.Value(0)).current;
    console.log('loading', loading);
    const animateModalExit = () => {
        Animated.timing(opacityValue, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
        }).start();
    };

    if (!loading) {
        animateModalExit();
    }

    return (
        <>
            <Modal
                visible={loading}
                transparent
                animationType='slide'
            >
                <View style={styles.loaderBackdrop}>
                    <MyView mb={30}>
                        <Logo />
                    </MyView>
                    <MyView bg={colors.white} pd={8} w={120} alignItems='center'
                        borderRadius={5}>
                        <MyView w={150} pd={24} alignItems='center'
                            borderRadius={3}
                            pt={contentPadding} pb={contentPadding} pl={contentPadding} pr={contentPadding} >
                            <>
                                <HStack gap={8}>
                                    <ActivityIndicator size='small' style={{ margin: 0, padding: 0, marginLeft: 16 }}
                                        color={colors.primary} />
                                    <Text style={{ color: colors.primary }} >Please wait...</Text>
                                </HStack>
                            </>
                        </MyView>
                    </MyView>
                </View>

            </Modal>
        </>
    );
}