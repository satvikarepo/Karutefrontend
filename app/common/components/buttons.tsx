import React from 'react';
import {
    TouchableWithoutFeedback, StyleSheet, View,
    GestureResponderEvent, TouchableOpacity
} from 'react-native';
import { Layout, Text, Button, Input, ButtonProps } from '@ui-kitten/components';
import { styles } from '../../theme/styles';

interface IMyButton extends ButtonProps {

}
export const MyButton = (props: IMyButton) => {
    return (
        <>
            <Button size={props.size || "medium"} style={{ borderRadius: 10, width: '100%' }} 
            onPress={() => { }}>
                {props.children}
            </Button>
        </>
    );
}

interface IMyLinkButton {
    onPress?: ((event: GestureResponderEvent) => void),
    children: string,
    textAlign?:'left'|'right',
    ml?:number
}
export const MyLinkButton = (props: IMyLinkButton) => {
    return (
        <>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[styles.link, {textAlign:props.textAlign || 'left', marginLeft:props.ml||0}]}>{props.children}</Text>
            </TouchableOpacity>
        </>
    );
};

