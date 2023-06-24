import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, 
    NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Layout, Text, Button, Input } from '@ui-kitten/components';
import { styles } from '../../theme/styles';

interface IMyInput{
    placeholder?:string,
    prefix?:React.ReactElement,
    postfix?:React.ReactElement,
    onChange?:((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
}
export const MyInput = ({ placeholder,prefix,postfix,onChange }:IMyInput) => {
    
    return (
        <>
            <Input size='large' style={{ 
                backgroundColor: 'white',
                borderRadius:10
            }}
            onChange={onChange}
            accessoryRight={postfix}
            accessoryLeft={prefix}
            placeholder={placeholder} />
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
            <Input size='large' style={{ 
                backgroundColor: 'white',
                borderRadius:10
            }}
            onChange={onChange}
            accessoryRight={renderIcon}
            accessoryLeft={prefix}
            placeholder={placeholder} />
        </>
    );
}

