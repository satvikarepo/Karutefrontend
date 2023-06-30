import React from 'react';
import {
    TouchableWithoutFeedback,
    NativeSyntheticEvent, TextInputChangeEventData
} from 'react-native';
import { Input, InputProps, Button } from '@ui-kitten/components';
import { IconEyeClosed, IconEyeOpen } from "../../assets/icons/Eye";
import { colors } from '../../theme/vars';


interface IMyInput extends InputProps {
    placeholder?: string,
    prefix?: React.ReactElement,
    postfix?: React.ReactElement,
    onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void),
    ref?: React.LegacyRef<Input>
}
export const MyInput = (props: IMyInput) => {

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
                    borderRadius: 10
                }}
                {...props}
                onChange={props.onChange}
                accessoryRight={props.postfix}
                accessoryLeft={props.prefix}
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

    return (
        <>
            <Input size='large' textStyle={{
                paddingTop: 2,
                paddingBottom: 2,
            }} style={{
                backgroundColor: 'white',
                borderRadius: 10,
            }}
                secureTextEntry={secureTextEntry}
                onChange={onChange}
                accessoryRight={renderIcon}
                accessoryLeft={prefix}
                placeholder={placeholder} />
        </>
    );
}

