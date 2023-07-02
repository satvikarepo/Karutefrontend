import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { IconHome } from '../../../assets/icons/Home';
import { IconMessage } from '../../../assets/icons/Message';
import { IconProfile } from '../../../assets/icons/Profile';
import { IconCalendar } from '../../../assets/icons/Calendar';
import { colors, spacing } from '../../../theme/vars';

const CustomBottomTabBar: React.FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    return (
        <View style={tabStyles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableHighlight
                        key={route.key}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={tabStyles.tabButton}
                        underlayColor="transparent"
                    >
                        <View style={isFocused ? {} : {}}>
                            {route.name === 'Home' && <IconHome w={30} h={30} color={isFocused ? colors.primary : colors.lightGrey} />}
                            {route.name === 'Messages' && <IconMessage w={30} h={30} color={isFocused ? colors.primary : colors.lightGrey} />}
                            {route.name === 'Profile' && <IconProfile w={30} h={30} color={isFocused ? colors.primary : colors.lightGrey} />}
                            {route.name === 'Calendar' && <IconCalendar w={30} h={30} color={isFocused ? colors.primary : colors.lightGrey} />}
                        </View>
                    </TouchableHighlight>
                );
            })}
        </View>
    );
};

const tabStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 0, // Add border width if needed
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 15,
        shadowOffset: {
            width: 15, height: 15 // for iOS
        },
        backgroundColor: colors.white,
        height: spacing.bottomTab.h,
    },
    roundContainer: {
        overflow:'hidden',
        flexDirection: 'row',
        borderTopWidth: 0, // Add border width if needed
        display: 'flex',
        position: 'absolute',
        bottom: 20,
        left: 25,
        right: 25,
        elevation: 5,
        shadowOffset: {
            width: 5, height: 5 // for iOS
        },
        backgroundColor: colors.white,
        borderRadius: 30,
        height: spacing.bottomTab.h,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:40, height:40,
        borderRadius:40,
        backgroundColor:colors.bg
    }
});

export default CustomBottomTabBar;
