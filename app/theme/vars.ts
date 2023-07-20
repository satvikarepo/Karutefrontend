import { default as theme } from '../theme/eva-1.json';
export const colors={
    primary:theme['color-primary-500'],
    success:theme['color-success-500'],
    error:theme['color-danger-500'],
    warning:theme['color-warning-500'],
    info:theme['color-info-500'],
    secondary:"grey",
    black:"#000",
    white:"#fff",
    grey:"grey",
    lightGrey:'#d1d1d1',
    bg:'#e4e9f2',
    ...theme
} 
export const spacing={
    pd: { sm: 16, md: 24, lg: 32, xl: 40 },
    m: { sm: 16, md: 24, lg: 32, xl: 40 },
    bottomTab:{h:70}
}