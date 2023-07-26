import React, { useRef } from 'react';
import { View, ActivityIndicator, Animated, Modal } from 'react-native';
import { Text } from '@ui-kitten/components';

import { styles } from '../../theme/styles';
import { colors } from '../../theme/vars';
import { useSelector, useDispatch } from "../../redux/store";

import { MyView } from './layouts';
import { closeModel } from '../../redux/actions/commonActions';


export const GlobalLoader = () => {
    const { loading } = useSelector(state => state.global);
    const dispatch = useDispatch();
    const closeModelPopup = () => dispatch(closeModel());
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

    return (
        <>
            <Modal
                visible={loading}
                transparent
                animationType='slide'
            >
                <View style={styles.loaderBackdrop}>
                    <MyView w={150} pd={24} alignItems='center' bg={colors.primary} borderRadius={3}
                        pt={contentPadding} pb={contentPadding} pl={contentPadding} pr={contentPadding} >
                        <>
                            <ActivityIndicator size='large' style={{ margin: 0, padding: 0 }} color={colors.white} />
                            <Text style={{ color: colors.white }} >Please wait...</Text>
                        </>
                    </MyView>
                </View>

            </Modal>
        </>
    );
}