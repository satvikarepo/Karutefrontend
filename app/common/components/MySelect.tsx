import React, { useRef, useState } from 'react';
import { Animated, View, ScrollView, TouchableHighlight } from 'react-native';
import { Text, Modal, Input } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

import { styles } from '../../theme/styles';
import { colors, spacing } from '../../theme/vars';
import { IconArrowDown } from '../../assets/icons/ArrowDown';
import { HStack, MyView } from './layouts';

import { Option } from '../types';
import { IconTick } from '../../assets/icons/Tick';
import { IconSearch } from '../../assets/icons/Search';


interface IMySelect {
    label?: React.ReactElement,
    data?: Option[],
    value?: Option,
    error?: string,
    onChange?: (value: Option) => void
    placeHolder?: string,
    prefix?: React.ReactElement,
    postfix?: React.ReactElement,
}
export const MySelect = (props: IMySelect) => {
    const [open, setOpen] = useState(false);
    //const ref=useRef<MultiSelect>(null);
    const opacityValue = useRef(new Animated.Value(0)).current;
    const list = props.data || [];
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
                <MyView pd={16} bg={colors.white} borderRadius={8} minW={300}>
                    <>
                        {/* <MyView mb={8}>
                           <Input accessoryLeft={<IconSearch color={colors.border}/>}
                           style={{borderRadius:spacing.radious.inputs}} />
                        </MyView> */}
                        <ScrollView style={{
                            width: '100%', overflow: 'scroll',
                            maxHeight: '100%'
                        }}>
                            <>
                                {list.map((item, index) => {
                                    return <MyView key={item.id} fullW style={{
                                        borderBottomColor: colors.border,
                                        borderBottomWidth: 1,
                                    }}>
                                        <TouchableHighlight style={{
                                            width: '100%',
                                        }} activeOpacity={0.9}
                                            onPress={() => {
                                                props.onChange && props.onChange(item);
                                                setOpen(false);
                                            }} >
                                            <HStack gap={4}>
                                                <MyView
                                                    style={{ opacity: props.value?.id === item.id ? 1 : 0 }}
                                                ><IconTick w={18} h={18} color={colors.primary} /></MyView>
                                                <MyView pd={12}><Text>{item.name}</Text></MyView>
                                            </HStack>
                                        </TouchableHighlight>
                                    </MyView>
                                })}
                            </>
                        </ScrollView>
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
                        {!props.value?.name && <Text appearance='hint'>
                            {props.placeHolder ? props.placeHolder : '- Select -'}
                        </Text>}
                        {props.value?.name && <Text>
                            {props.value?.name}
                        </Text>}
                    </View>

                    <View style={{
                        width: 50,
                        alignItems: 'center',
                    }}>
                        {props.postfix ? props.postfix :
                            <IconArrowDown color={colors.border} />}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {props.error && <Text status='danger' style={{ fontSize: 12 }} appearance='hint' >{props.error}</Text>}
        </>
    </MyView>
}