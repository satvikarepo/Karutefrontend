import React from 'react';
import { TouchableWithoutFeedback, 
    NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import {  Text, Input, InputProps } from '@ui-kitten/components';
import { styles } from '../../theme/styles';

interface IMyInput extends InputProps{
    placeholder?:string,
    prefix?:React.ReactElement,
    postfix?:React.ReactElement,
    onChange?:((e: NativeSyntheticEvent<TextInputChangeEventData>) => void),
    ref?: React.LegacyRef<Input>
}
export const MyInput = (props:IMyInput) => {
    
    return (
        <>
            <Input size='large' 
            ref={props.ref}
            textStyle={{
                paddingTop:2,
                paddingBottom:2,
            }}
            style={{ 
                backgroundColor: 'white',
                borderRadius:10
            }}
            {...props}
            onChange={props.onChange}
            accessoryRight={props.postfix}
            accessoryLeft={props.prefix}
            placeholder={props.placeholder} />
        </>
    );
}

interface IMyPassword{
    placeholder?:string,
    prefix?:React.ReactElement,
    onChange?:((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
}
export const MyPassword = ({ placeholder, prefix,onChange }:IMyPassword) => {
    const [value, setValue] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  
    const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
    };
      
    const renderIcon = (props:any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Text>S</Text>
        </TouchableWithoutFeedback>
      );

    return (
        <>
            <Input size='large' textStyle={{
                paddingTop:2,
                paddingBottom:2,
            }} style={{ 
                backgroundColor: 'white',
                borderRadius:10,
            }}
            secureTextEntry={secureTextEntry}
            onChange={onChange}
            accessoryRight={renderIcon}
            accessoryLeft={prefix}
            placeholder={placeholder} />
        </>
    );
}

