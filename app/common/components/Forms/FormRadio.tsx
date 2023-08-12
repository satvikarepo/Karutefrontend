import React from 'react';
import {
    NativeSyntheticEvent, TextInputChangeEventData,
} from 'react-native';
import { Input, InputProps, RadioGroup, Radio } from '@ui-kitten/components';
import { Controller, RegisterOptions, FieldValues, UseFormSetValue } from "react-hook-form"
import { HStack, MyView } from '../layouts';
import { Option } from '../../types';
import { colors } from '../../../theme/vars';


interface IFormRadio extends InputProps {
    data: Option[]
    name: string,
    defaultVal?: string,
    placeholder?: string,
    prefix?: React.ReactElement,
    postfix?: React.ReactElement,
    onChange?: ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void),
    ref?: React.LegacyRef<Input>,
    control: any,
    error?: string,
    label?: React.ReactElement,
    setValue: UseFormSetValue<any>
    rules?: Omit<RegisterOptions<FieldValues, "name">, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined
}
export const FormRadio = (props: IFormRadio) => {

    return (
        <>
            {props.label && <MyView ml={2} mb={6}>{props.label}</MyView>}
            <Controller
                control={props.control}
                rules={props.rules}
                render={({ field }) => (
                    <HStack>
                        {props.data.map(x => {
                            return <Radio  id={`${x.id}`} key={x.id}
                            checked={field.value ? field.value=== x.id : props.defaultVal===x.id}
                             status='danger'
                            onChange={(checked: boolean) => {
                                props.setValue(field.name, x.id, { shouldTouch: true, shouldValidate: true });
                            }}>
                                {x.name}
                            </Radio>
                        })}
                    </HStack>
                )}
                name={props.name}
                defaultValue={props.defaultVal}
            />
        </>
    );
}