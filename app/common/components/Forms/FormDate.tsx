import React from 'react';
import {
    NativeSyntheticEvent, TextInputChangeEventData,
} from 'react-native';
import { Input, InputProps} from '@ui-kitten/components';
import { Controller, RegisterOptions, FieldValues, UseFormSetValue } from "react-hook-form"
import { MyView } from '../layouts';
import { MyDate } from '../MyDate';


interface IFormDate extends InputProps {
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
    max?: Date,
    min?: Date,
}
export const FormDate = (props: IFormDate) => {
    return (
        <>
            {props.label && <MyView ml={2} mb={6}>{props.label}</MyView>}
            <Controller
                control={props.control}
                rules={props.rules}
                render={({ field }) => (
                        <MyDate
                            max={props.max}
                            min={props.min}
                            value={field.value} onChange={(val) => {
                                props.setValue(field.name, val, { shouldTouch: true, shouldValidate: true });
                            }}
                            error={props.error}
                        />
                )}
                name={props.name}
                defaultValue={props.defaultVal}
            />
        </>
    );
}