import { StyleSheet } from 'react-native';
import { spacing, colors } from "./vars";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.pd.lg,
        backgroundColor:colors.white
    },
    tabContainer: {
        flex: 1,
        padding: spacing.pd.lg,
        // backgroundColor:colors.bg
    },
    scrollView:{ width: '100%', flex: 1, backgroundColor: colors.white },
    row: {
        width: '100%',
        marginBottom: spacing.m.sm
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
        //backgroundColor: 'rgba(0,0,0,0.5)'
        backgroundColor:colors.primary
    }

});
