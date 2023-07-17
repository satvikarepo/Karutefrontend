import React from 'react';
import {
    NativeSyntheticEvent, TextInputChangeEventData
} from 'react-native';
import { Input, InputProps, Button } from '@ui-kitten/components';
import { Controller, RegisterOptions, FieldValues } from "react-hook-form"
import { IconEyeClosed, IconEyeOpen } from "../../../assets/icons/Eye";
import { colors } from '../../../theme/vars';
import { MyView } from '../layouts';


interface IFormInput extends InputProps {
    name: string,
    defaultVal?: string,
    placeholder?: string,
    prefix?: React.ReactElement,
    postfix?: React.ReactElement,
    onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void),
    ref?: React.LegacyRef<Input>,
    control: any,
    error?: string,
    rules?: Omit<RegisterOptions<FieldValues, "name">, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined
}
export const FormInput = (props: IFormInput) => {
    const Prefix = props.prefix ? <MyView pl={6}>{props.prefix}</MyView> : undefined;
    return (
        <>
            <Controller
                control={props.control}
                rules={props.rules}
                render={({ field }) => (
                    <Input size='large'
                        {...field}
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
                        value={field.value}
                        onBlur={field.onBlur}
                        onChangeText={field.onChange}
                        accessoryRight={props.postfix}
                        accessoryLeft={Prefix}
                        placeholder={props.placeholder}
                        status={props.error ? 'danger' : 'basic'}
                        caption={props.error}
                    />
                )}
                name={props.name}
                defaultValue={props.defaultVal}
            />
        </>
    );
}


interface IFormInputPassword {
    name:string,
    defaultVal?: string,
    placeholder?: string,
    ref?: React.LegacyRef<Input>,
    prefix?: React.ReactElement,
    onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void),
    control: any,
    error?: string,
    rules?: Omit<RegisterOptions<FieldValues, "name">, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined
}
export const FormInputPassword = (props: IFormInputPassword) => {
    const [value, setValue] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
    };
    const renderIcon = (iconprops: any): React.ReactElement => (
        <Button appearance='ghost' size='small' style={{ width: 10, height: 10, borderRadius: 30 }} onPress={toggleSecureEntry}>
            {secureTextEntry ? <IconEyeClosed w={20} h={20} color={colors.grey} />
                : <IconEyeOpen w={20} h={20} color={colors.grey} />}
        </Button>
    );
    const Prefix = props.prefix ? <MyView pl={6}>{props.prefix}</MyView> : undefined;
    return (
        <>
            <Controller
                control={props.control}
                rules={props.rules}
                render={({ field }) => (
                    <Input size='large'
                        {...field}
                        secureTextEntry={secureTextEntry}
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
                        value={field.value}
                        onBlur={field.onBlur}
                        onChangeText={field.onChange}
                        accessoryRight={renderIcon}
                        accessoryLeft={Prefix}
                        placeholder={props.placeholder}
                        status={props.error ? 'danger' : 'basic'}
                        caption={props.error}
                    />
                )}
                name={props.name}
                defaultValue={props.defaultVal}
            />
        </>
    );
}