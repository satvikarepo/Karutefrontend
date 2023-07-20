import React from 'react';
import { Modal, Text } from '@ui-kitten/components';

import { styles } from '../../theme/styles';
import { colors } from '../../theme/vars';
import { useSelector, useDispatch } from "../../redux/store";

import { MyView } from './layouts';
import { MyButton } from './buttons';
import { IconErrorWarn } from '../../assets/icons/ErrorWarning';


export const AppModel = () => {
    const { modelContent, messages, type } = useSelector(state => state.global.model);
    const dispatch=useDispatch();

    const contentPadding = 8;

    if (type && messages.length > 0) {
        return <AppErrorWarning type={type} data={messages} />
    }

    return (
        <>
            <Modal
                visible={modelContent !== undefined}
                backdropStyle={styles.backdrop}
            // onBackdropPress={() => setVisible(false)}
            >
                <MyView bg={colors.white} borderRadius={20}
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
    data: string[]
}

export const AppErrorWarning = (props: IAppErrorWarning) => {
    const contentPadding = 16;
    const color = colors[props.type || 'error'];

    let textbg=colors['color-danger-100'];
    let status="danger";
    if(props.type==='success'){
        textbg=colors['color-success-100'];
        status='basic';
    }
    if(props.type==='warning'){
        textbg=colors['color-warning-100'];
        status='basic';
    }
    if(props.type==='info'){
        textbg=colors.white;
        status='basic';
    }

    


    return (
        <Modal
            visible={true}
            backdropStyle={styles.backdrop}
        // onBackdropPress={() => setVisible(false)}
        >
            <MyView bg={colors.white} borderRadius={20} w={300}
                pt={contentPadding} pb={contentPadding} pl={contentPadding} pr={contentPadding} >
                <>
                    <MyView fullW alignItems='center'>
                        <IconErrorWarn color={color} w={70} h={70} />
                    </MyView>
                    <MyView fullW bg={textbg} borderRadius={10} pd={8} mb={16} >
                        <>
                            {props.data.map(text => <Text status={status} key={text}>
                                {text}
                            </Text>)}
                        </>
                    </MyView>
                    <MyView fullW alignItems='center'>
                        {/* <MyLinkButton>Ok</MyLinkButton> */}
                        <MyButton secondary>Ok</MyButton>
                    </MyView>
                </>
            </MyView>
        </Modal>
    );
}
