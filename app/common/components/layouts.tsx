import React from 'react';
import { View, Text, StyleSheet,FlexAlignType } from 'react-native';

interface IMyView {
  mb?: number,
  mt?: number,
  ml?: number,
  mr?: number,
  pb?: number,
  pt?: number
  pl?: number
  pr?: number
  fullW?: boolean,
  w?: number | string,
  alignItems?:'left'|'right'|'center'|'baseLine'|'stretch',
  direction?:"row" | "column" | "row-reverse" | "column-reverse" | undefined
  children: React.ReactElement,

}
export const MyView = (props: IMyView) => {
  
  const positionMap={
    left:'flex-start',
    right:'flex-end',
    center:'center',
    baseLine:'baseline',
    stretch:'stretch'
  }

  const align=(props.alignItems ? positionMap[props.alignItems] : 'flex-start') as FlexAlignType;

  return (
    <View style={{
      width: props.fullW ? '100%' : props.w,
      marginBottom: props.mb || 0,
      marginTop: props.mt || 0,
      marginLeft: props.ml || 0,
      marginRight: props.mr || 0,
      paddingBottom: props.pb || 0,
      paddingTop: props.pt || 0,
      paddingRight: props.pr || 0,
      paddingLeft: props.pl || 0,
      alignItems:align,
      flexDirection:props.direction || 'column-reverse'
    }}>
      {props.children}
    </View>
  );
};





