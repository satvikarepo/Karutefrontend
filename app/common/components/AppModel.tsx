import React from 'react';
import { Modal, Text } from '@ui-kitten/components';

import { styles } from '../../theme/styles';
import { colors } from '../../theme/vars';
import { useSelector } from "../../redux/store";
import { MyView } from './layouts';
import { MyButton } from './buttons';


interface IAppModel {
    secondary?: boolean
}
export const AppModel = (props: IAppModel) => {
    const { modelContent, errors } = useSelector(state => state.global.model);
    const contentPadding = 8;
    return (
        <Modal
            visible={modelContent == undefined}
            backdropStyle={styles.backdrop}
        // onBackdropPress={() => setVisible(false)}
        >
            <MyView bg={colors.white} borderRadius={3}
            pt={contentPadding} pb={contentPadding} pl={contentPadding} pr={contentPadding} >
                <>
                     <Text>
                        Welcome to UI Kitten 😻
                    </Text>
                    <MyButton secondary>OK</MyButton>
                </>
            </MyView>
        </Modal>
    );
}
