import React from 'react';
import {
    GestureResponderEvent, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Text, Button, ButtonProps } from '@ui-kitten/components';

import { styles } from '../../theme/styles';
import { colors } from '../../theme/vars';


interface IMyButton extends ButtonProps {
    secondary?: boolean,
    fullW?: boolean,
    ref?: React.MutableRefObject<Button | null>
}
export const MyButton = (props: IMyButton) => {
    const bg = {
        backgroundColor: props.secondary ? "white" : colors.primary,
        borderColor: props.secondary ? colors.lightGrey : colors.primary
    }
    return (
        <>
            <Button appearance={props.secondary ? 'outline' : 'filled'}
                ref={props.ref}
                size={props.size || "medium"}
                {...props}
                status={props.status || 'primary'}
                style={[{}, {
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderRadius: 10, width: props.fullW ? '100%' : undefined,
                    // ...bg
                }]}
                onPress={props.onPress}>
                {props.children}
            </Button>
        </>
    );
}


interface IMyIconButton extends ButtonProps {
    w?: number,
    h?: number,
    showborder?: boolean,
    bg?: string,
    borderColor?: string,
    borderWidth?: number,
    square?: boolean
}
export const MyIconButton = (props: IMyIconButton) => {
    const defaultWidth = 40;
    return (
        <>
            <Button {...props} appearance='outline' size='small'
                style={{
                    width: props.w || defaultWidth,
                    height: props.square ? props.h : props.w,
                    borderRadius: props.square ? 5 : (props.w || defaultWidth) / 2,
                    borderWidth: props.borderWidth || 0
                }}>
                {props.children}
            </Button>
        </>
    );
}

interface IMyLinkButton {
    onPress?: ((event: GestureResponderEvent) => void),
    children: string,
    textAlign?: 'left' | 'right',
    ml?: number,
    mr?: number,
    mt?: number,
    mb?: number,
    textSize?: number
}
export const MyLinkButton = (props: IMyLinkButton) => {
    return (
        <>
                <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
                    <Text style={[styles.link,
                    {
                        textAlign: props.textAlign || 'left',
                        marginLeft: props.ml || 0,
                        marginRight: props.mr || 0,
                        marginTop: props.mt || 0,
                        marginBottom: props.mr || 0,
                        fontSize: props.textSize
                    }]}>{props.children}</Text>
                </TouchableOpacity>
        </>
    );
};


const customStyles = StyleSheet.create({
    disabledButton: {
        opacity: 0.5,
        backgroundColor: colors.primary,
        borderWidth: 1,
        // ... other custom styles for the disabled button
    },
    text: {
        color: colors.white
    }
});