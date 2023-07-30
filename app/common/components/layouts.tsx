import React from 'react';
import { View, ViewProps, ViewStyle, Text, StyleSheet, FlexAlignType } from 'react-native';
import Svg, { Image } from 'react-native-svg';

import { colors } from '../../theme/vars';

interface IMyView extends ViewProps {
  mb?: number,
  mt?: number,
  ml?: number,
  mr?: number,
  pb?: number,
  pt?: number
  pl?: number
  pr?: number,
  pd?:number,
  fullW?: boolean,
  w?: number | string,
  minW?:number | string,
  h?: number | string,
  minH?:number | string,
  bg?: string,
  borderColor?: string,
  borderW?: number,
  alignItems?: 'left' | 'right' | 'center' | 'baseLine' | 'stretch',
  direction?: "row" | "column" | "row-reverse" | "column-reverse" | undefined
  children: React.ReactElement,
  borderRadius?: number,
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
  const st=props.style

  return (
    <View {...props} style={{
      width: props.fullW ? '100%' : props.w,
      minWidth:props.minW,
      height: props.h,
      minHeight:props.minH,
      marginBottom: props.mb,
      marginTop: props.mt,
      marginLeft: props.ml,
      marginRight: props.mr,
      paddingBottom: props.pb,
      paddingTop: props.pt,
      paddingRight: props.pr,
      paddingLeft: props.pl,
      padding:props.pd,
      alignItems: align,
      flexDirection: props.direction || 'column',
      backgroundColor: props.bg,
      borderRadius: props.borderRadius,
      borderColor: props.borderColor,
      borderWidth: props.borderW,
    }}>
      {props.children}
    </View>
  );
};


interface IMyCircle extends ViewProps {
  m?: number,
  pd?: number,
  w?: number | string,
  h?: number | string,
  bg?: string,
  borderColor?: string,
  borderW?: number,
  children: React.ReactElement,
}

export const MyCircle = (props: IMyCircle) => {
  return (
    <View style={{
      width: props.w,
      height: props.h || props.w,
      margin: props.m || 0,
      padding: props.pd || 0,
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'column',
      backgroundColor: props.bg,
      borderRadius: (props.w as number) / 2,
      borderColor: props.borderColor || colors.lightGrey,
      borderWidth: props.borderW || 0,
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
      <View style={[styles.divider, { backgroundColor: props.color || colors.bg }]} />
      <Text style={[styles.label, { color: props.color || colors.grey }]}>{props.label}</Text>
      <View style={[styles.divider, { backgroundColor: props.color || colors.bg }]} />
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
  return <Svg width={props.w || 100} height={props.h || 100}>
    <Image
      href={require('../../assets/logo.png')}
      width={props.w || 100}
      height={props.h || 100}
    />
  </Svg>
}


interface IMyCard {
  children: React.ReactElement[] | React.ReactElement,
  style?: ViewStyle,
  w?:string|number
}

export const MyCard = (props: IMyCard) => {
  return <View
      style={{
          elevation: 10,
          shadowColor: colors.grey,
          backgroundColor: colors.white,
          borderColor: colors.border, borderWidth: 1,
          //ios shadow
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowOffset: {
            width: 0,
            height: 2,
          },


          padding: 16,
          borderRadius: 20,
          width: props.w || '100%', 
          height: 100, 
          ...props.style
      }}
  >
      {props.children}
  </View>
}