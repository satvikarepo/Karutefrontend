import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView } from 'react-native';
import { Text, Modal } from '@ui-kitten/components';

import { styles } from '../../theme/styles';
import { colors } from '../../theme/vars';
import { useSelector, useDispatch } from "../../redux/store";

import { MyView } from './layouts';
import { MyLinkButton } from './buttons';
import { IconErrorWarn } from '../../assets/icons/ErrorWarning';
import { closeModel } from '../../redux/actions/commonActions';



export const AppModal = () => {
    const { modelContent, messages, type } = useSelector(state => state.global.model);
    const dispatch = useDispatch();
    const closeModelPopup = () => dispatch(closeModel());
    const contentPadding = 8;
    const windowHeight = Dimensions.get('window').height;
    const showAlert = (type && messages.length > 0) || false;

    return (
        <>
            <AppErrorWarning visible={showAlert} closeModel={closeModelPopup} type={type} data={messages} />
            <Modal
                visible={(!showAlert && modelContent !== undefined)}
                backdropStyle={styles.backdrop}
                onBackdropPress={closeModelPopup}
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                    elevation: 4,
                }}
            >
                <MyView bg={colors.white} borderRadius={20} maxH={windowHeight}
                    pt={contentPadding} pb={contentPadding} pl={contentPadding} pr={contentPadding} >
                    <>
                        {modelContent}
                    </>
                </MyView>
            </Modal>
        </>
    );
}

interface IAppErrorWarning {
    type?: 'error' | 'warning' | 'success' | 'info',
    data: string[],
    closeModel: () => {},
    visible: boolean
}

export const AppErrorWarning = (props: IAppErrorWarning) => {
    const contentPadding = 16;
    const color = colors[props.type || 'error'];
    const windowHeight = Dimensions.get('window').height - 200;

    const opacityValue = useRef(new Animated.Value(0)).current;

    const animateModalExit = () => {
        Animated.timing(opacityValue, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
        }).start();
    };

    let textbg = colors['color-danger-100'];
    let status = "danger";
    if (props.type === 'success') {
        textbg = colors['color-success-100'];
        status = 'basic';
    }
    if (props.type === 'warning') {
        textbg = colors['color-warning-100'];
        status = 'basic';
    }
    if (props.type === 'info') {
        textbg = colors.white;
        status = 'basic';
    }
    if (!props.visible) {
        animateModalExit();
    }

    return <>
        <Modal
            visible={props.visible}
            backdropStyle={styles.backdrop}
        >
            <MyView bg={colors.white} borderRadius={8} w={300}
                pt={6} pb={contentPadding} pl={contentPadding} pr={contentPadding}>
                <>
                    <MyView fullW alignItems='center'>
                        <IconErrorWarn color={color} w={30} h={30} />
                    </MyView>
                    <MyView fullW alignItems='center' borderRadius={5} pd={16} mb={16} maxH={windowHeight} >
                        <ScrollView>

                            {props.data.map(text => <Text category='h6' status={'basic'} key={text}>
                                {text}
                            </Text>)}
                        </ScrollView>
                    </MyView>
                    <MyView fullW alignItems='center' pb={8}>
                        <MyLinkButton textSize={18} onPress={props.closeModel}>Dismiss</MyLinkButton>
                    </MyView>
                </>
            </MyView>
        </Modal>
    </>

}
