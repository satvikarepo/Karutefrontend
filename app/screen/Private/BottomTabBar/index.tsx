import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '../../../common/types';
import Home from '../Home';
import Profile from '../Profile';
import Messages from '../Messages';
import CustomBottomTabBar from './custom';

const Tab = createBottomTabNavigator<BottomTabParamList>();
interface IBottomTabBar {
}
function BottomTabBar(props: IBottomTabBar) {

    return (
        <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, border: 'transparent' } }}>

            <Tab.Navigator
                tabBar={(props) => <CustomBottomTabBar {...props} />}
                screenOptions={({ route }) => ({
                    // tabBarIcon: ({ color, size }) => {
                    //     if (route.name === 'Home') return <TouchableWithoutFeedback><IconHome w={30} h={30} color={color} /></TouchableWithoutFeedback>
                    //     if (route.name === 'Messages') return <IconMessage w={30} h={30} color={color} />
                    //     if (route.name === 'Profile') return <IconProfile w={25} h={25} color={color} />
                    //     if (route.name === 'Calendar') return <IconCalendar w={30} h={30} color={color} />
                    // },
                    tabBarActiveTintColor: 'skyblue',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabel: "",
                    // style: {
                    //     elevation: 0,   // for Android
                    //     shadowOffset: {
                    //         width: 0, height: 0 // for iOS
                    //     },
                    // },
                    // tabBarStyle: {
                    //     display: 'flex',
                    //     position: 'absolute',
                    //     bottom: 20,
                    //     left: 25,
                    //     right: 25,
                    //     elevation: 5,
                    //     backgroundColor: '#5856D6',
                    //     borderRadius: 30,
                    //     height: 60,
                    // }
                })}
            >

                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Messages" options={{}} component={Messages} />
                <Tab.Screen name="Calendar" component={Messages} />
                <Tab.Screen name="Profile" component={Profile} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabBar;