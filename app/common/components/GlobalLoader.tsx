import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, Animated, Modal } from 'react-native';
import { Text } from '@ui-kitten/components';

import { styles } from '../../theme/styles';
import { colors } from '../../theme/vars';
import { useSelector } from "../../redux/store";

import { HStack, Logo, MyView } from './layouts';


export const GlobalLoader = () => {
    const { loading } = useSelector(state => state.global);
    const [logoOp, setOpa] = useState(new Animated.Value(1));
    const contentPadding = 8;
    const opacityValue = useRef(new Animated.Value(0)).current;
    
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

    useEffect(() => {
        startAnimation();
    }, [])

    const startAnimation = () => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(logoOp, {
                    toValue: 0.6, // Target opacity value (partially transparent)
                    duration: 1000, // Animation duration in milliseconds
                    useNativeDriver: true, // Optimize animation performance
                }),
                Animated.timing(logoOp, {
                    toValue: 1, // Return to fully opaque
                    duration: 1000, // Animation duration in milliseconds
                    useNativeDriver: true, // Optimize animation performance
                }),
            ]),
            { iterations: -1 } // Loop infinitely
        ).start();
    };


    return (
        <>
            <Modal
                visible={loading}
                transparent
                animationType='slide'
            >
                <View style={styles.loaderBackdrop}>
                    <Animated.View style={[{ opacity: logoOp }]}>
                        <Logo />
                    </Animated.View>

                    <MyView mt={12} bg={colors.white} alignItems='center'>
                        <MyView w={150} alignItems='center'
                            pt={contentPadding} pb={contentPadding}
                            pl={contentPadding} pr={contentPadding} >
                            <>
                                {/* <HStack gap={8}>
                                    <ActivityIndicator size='small' style={{ margin: 0, padding: 0, marginLeft: 16 }}
                                        color={colors.primary} />
                                    <Text style={{ color: colors.primary }} >Please wait...</Text>
                                </HStack> */}
                                <Text status='basic' category='p1' style={{ color: colors.primary }} >Please wait...</Text>
                            </>
                        </MyView>
                    </MyView>
                </View>

            </Modal>
        </>
    );
}