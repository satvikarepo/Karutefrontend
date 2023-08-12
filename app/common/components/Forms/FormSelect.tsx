import React from 'react';
import {
    NativeSyntheticEvent, TextInputChangeEventData,
} from 'react-native';
import {
    Input, InputProps,
} from '@ui-kitten/components';
import { Controller, RegisterOptions, FieldValues, UseFormSetValue } from "react-hook-form"
import { MyView } from '../layouts';
import { MySelect } from '../MySelect';
import { Option } from '../../types';


interface IFormSelect extends InputProps {
    data: Option[],
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
export const FormSelect = (props: IFormSelect) => {
    const [selected, setSelected] = React.useState<Option>();
    return (
        <>
            {props.label && <MyView ml={2} mb={6}>{props.label}</MyView>}
            <Controller
                control={props.control}
                rules={props.rules}
                render={({ field }) => {
                    return <MySelect
                        label={props.label}
                        onChange={(val) => {
                            setSelected(val);
                            props.setValue(field.name, val.id, { shouldTouch: true, shouldValidate: true });
                        }}
                        error={props.error} data={props.data} value={selected} />
                }}
                name={props.name}
                defaultValue={props.defaultVal}
            />
        </>
    );
}


