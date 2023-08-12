import { StyleSheet } from 'react-native';
import { spacing, colors } from "./vars";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.pd.lg,
        backgroundColor: colors.white
    },
    tabContainer: {
        flex: 1,
        padding: spacing.pd.md,
        paddingTop:0,
        marginBottom:spacing.bottomTab.h
    },
    scrollView: { width: '100%', flex: 1, overflow:'scroll', backgroundColor: colors.white },
    card: {
        elevation: 10,
        borderColor: colors.border, // if you need 
        backgroundColor: 'white',
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    row: {
        width: '100%',
        marginBottom: spacing.m.xm
    },
    link: {
        color: colors.primary
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    loaderBackdrop: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    }

});
