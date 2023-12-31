import { default as theme } from '../theme/eva-1.json';
export const colors={
    primary:theme['color-primary-500'],
    success:theme['color-success-500'],
    error: theme['color-danger-500'],
    warning:theme['color-warning-500'],
    info:theme['color-info-500'],
    secondary:"grey",
    black:"#000",
    //red
    red:"#E50E63",
    redBg:"#F5E1E9",
    redBorder:"rgba(247, 56, 89, 0.15)",
    //blue
    blue:"#1C6BA4",
    blueBg:"#DCEDF9",
    blueBorder:"rgba(28, 107, 164, 0.15)",
    //yellow
    yellow:"#E09F1F",
    yellowBg:"#FAF0DB",
    yellowBorder:"rgba(224, 159, 31, 0.15)",
    white:"#fff",
    grey:"grey",
    lightGrey:'#d1d1d1',
    bg:'#e4e9f2',
    border:'#D7DDEA',
    ...theme
} 
export const spacing={
    pd: { sm: 16, md: 24, lg: 32, xl: 40 },
    m: { xm:8, sm: 16, md: 24, lg: 32, xl: 40 },
    radious:{inputs:10},
    bottomTab:{h:70}
}