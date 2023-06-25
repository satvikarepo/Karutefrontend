import React from 'react';
import { View, Text, StyleSheet, FlexAlignType } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import { colors } from '../../theme/vars';

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
  alignItems?: 'left' | 'right' | 'center' | 'baseLine' | 'stretch',
  direction?: "row" | "column" | "row-reverse" | "column-reverse" | undefined
  children: React.ReactElement,

}
export const MyView = (props: IMyView) => {

  const positionMap = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    baseLine: 'baseline',
    stretch: 'stretch'
  }

  const align = (props.alignItems ? positionMap[props.alignItems] : 'flex-start') as FlexAlignType;

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
      alignItems: align,
      flexDirection: props.direction || 'column'
    }}>
      {props.children}
    </View>
  );
};


interface IDividerWithLabel {
  label: string,
  color?: string
}

export const DividerWithLabel = (props: IDividerWithLabel) => {
  return (
    <View style={styles.lblContainer}>
      <View style={[styles.divider, { backgroundColor: props.color || colors.lightGrey }]} />
      <Text style={[styles.label, { color: props.color || colors.grey }]}>{props.label}</Text>
      <View style={[styles.divider, { backgroundColor: props.color || colors.lightGrey }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lblContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  divider: {
    flex: 1,
    height: 1.5,
  },
  label: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});

interface ILogo {
  w?: number,
  h?: number
}
export const Logo = (props: ILogo) => {
  return <Svg width={props.w||100} height={props.h||100}>
  <Image
    href={require('../../assets/logo.png')}
    width={props.w||100} 
    height={props.h||100}
  />
</Svg>
}


