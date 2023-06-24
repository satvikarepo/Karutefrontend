import React from 'react';
import {
    GestureResponderEvent, TouchableOpacity
} from 'react-native';
import { Text, Button, ButtonProps } from '@ui-kitten/components';

import { styles } from '../../theme/styles';



interface IMyButton extends ButtonProps {
    secondary?:boolean
}
export const MyButton = (props: IMyButton) => {
    return (
        <>
            <Button appearance={props.secondary ? 'outline' :'filled'}
                size={props.size || "medium"}
                style={[{},{ 
                    paddingTop:16,
                    paddingBottom:16,
                    borderRadius: 10, width: '100%',
                    }]}
                onPress={props.onPress}>
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
    mb?: number
}
export const MyLinkButton = (props: IMyLinkButton) => {
    return (
        <>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[styles.link,
                {
                    textAlign: props.textAlign || 'left',
                    marginLeft: props.ml || 0,
                    marginRight: props.mr || 0,
                    marginTop: props.mt || 0,
                    marginBottom: props.mr || 0,
                }]}>{props.children}</Text>
            </TouchableOpacity>
        </>
    );
};

