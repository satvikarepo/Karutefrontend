import React, { useRef, useState } from 'react';
import { Animated, View, ScrollView, TouchableHighlight } from 'react-native';
import { Text, Modal, Calendar } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

import { styles } from '../../theme/styles';
import { colors, spacing } from '../../theme/vars';
import { IconArrowDown } from '../../assets/icons/ArrowDown';
import { HStack, MyView } from './layouts';

import { Option } from '../types';
import { IconTick } from '../../assets/icons/Tick';
import { IconSearch } from '../../assets/icons/Search';
import { IconCalendar } from '../../assets/icons/Calendar';
import { formatDate } from '../helpers/utils';


interface IMyDate {
    value?: Date,
    name?: string,
    error?: string,
    max?: Date,
    min?: Date,
    onChange?: (value: Date) => void
    placeHolder?: string,
    prefix?: React.ReactElement,
    postfix?: React.ReactElement,
}
export const MyDate = (props: IMyDate) => {
    const [open, setOpen] = useState(false);
    const opacityValue = useRef(new Animated.Value(0)).current;
    const animateModalExit = () => {
        Animated.timing(opacityValue, {
            toValue: 1000,
            duration: 700,
            useNativeDriver: true,
        }).start();
    };

    if (!open) {
        animateModalExit();
    }
    return <MyView>
        <>
            <Modal backdropStyle={styles.backdrop}
                onBackdropPress={() => setOpen(false)} visible={open}>
                <MyView bg={colors.white} borderRadius={4} minW={300}>
                    <>
                        <Calendar
                            max={props.max}
                            min={props.min}
                            date={props.value}
                            onSelect={(date: Date) => {
                                props.onChange && props.onChange(date);
                                setOpen(false);
                            }}
                        />
                    </>
                </MyView>
            </Modal>
            <TouchableWithoutFeedback focusable
                onFocus={() => setOpen(true)}
                onPress={() => setOpen(true)}
            >
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: props.error ? colors.error : (open ? colors.primary : colors.bg),
                    borderWidth: 0.9,
                    borderRadius: spacing.radious.inputs,
                    minHeight: 45
                }}>
                    {props.prefix && <View style={{
                        width: 50,
                        alignItems: 'center',
                    }}>
                        {props.prefix}
                    </View>
                    }

                    <View style={{
                        flex: 2,
                        paddingLeft: 16
                    }}>
                        {!props.value && <Text appearance='hint'>
                            {props.placeHolder ? props.placeHolder : '- dd/mm/yyyy -'}
                        </Text>}
                        {props.value && <Text>
                            {formatDate(props.value,'DD/MM/YYYY')}
                        </Text>}
                    </View>

                    <View style={{
                        width: 50,
                        paddingRight: 5,
                        alignItems: 'center',
                    }}>
                        {props.postfix ? props.postfix :
                            <IconCalendar color={colors.border} />}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {props.error && <Text status='danger' style={{ fontSize: 12 }} appearance='hint' >{props.error}</Text>}
        </>
    </MyView>
}