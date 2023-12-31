import React from 'react';
import {
    NativeSyntheticEvent, TextInputChangeEventData
} from 'react-native';
import { Input, InputProps, Button } from '@ui-kitten/components';
import { IconEyeClosed, IconEyeOpen } from "../../assets/icons/Eye";
import { colors,spacing } from '../../theme/vars';
import { MyView } from './layouts';


interface IMyInput extends InputProps {
    placeholder?: string,
    prefix?: React.ReactElement,
    postfix?: React.ReactElement,
    onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void),
    ref?: React.LegacyRef<Input>
}
export const MyInput = (props: IMyInput) => {
    const Prefix= props.prefix ? <MyView pl={0}>{props.prefix}</MyView> : undefined;
    return (
        <>
            <Input size='large'
                ref={props.ref}
                textStyle={{
                    paddingTop: 4,
                    paddingBottom: 4,
                }}
                style={{
                    backgroundColor: 'white',
                    borderRadius: spacing.radious.inputs
                }}
                {...props}
                value={props.value}
                onChange={props.onChange}
                accessoryRight={props.postfix}
                accessoryLeft={Prefix}
                placeholder={props.placeholder} />
        </>
    );
}

interface IMyPassword {
    placeholder?: string,
    prefix?: React.ReactElement,
    onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
}
export const MyPassword = ({ placeholder, prefix, onChange }: IMyPassword) => {
    const [value, setValue] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
    };

    // const renderIcon = (props:any): React.ReactElement => (
    //     <TouchableWithoutFeedback onPress={toggleSecureEntry}>
    //      {secureTextEntry ? <IconEyeClosed w={20} h={20} color={colors.grey} />
    //      : <IconEyeOpen w={20} h={20} color={colors.grey} />}
    //     </TouchableWithoutFeedback>
    //   );

    const renderIcon = (props: any): React.ReactElement => (
        <Button appearance='ghost' size='small' style={{ width:10, height:10, borderRadius:30}} onPress={toggleSecureEntry}>
            {secureTextEntry ? <IconEyeClosed w={20} h={20} color={colors.grey} />
                : <IconEyeOpen w={20} h={20} color={colors.grey} />}
        </Button>
    );
    const Prefix= prefix ? <MyView pl={6}>{prefix}</MyView> : undefined;
    return (
        <>
            <Input size='large' textStyle={{
                paddingTop: 2,
                paddingBottom: 2,
            }} style={{
                backgroundColor: 'white',
                borderRadius: spacing.radious.inputs,
            }}
                secureTextEntry={secureTextEntry}
                onChange={onChange}
                accessoryRight={renderIcon}
                accessoryLeft={Prefix}
                placeholder={placeholder} />
        </>
    );
}

