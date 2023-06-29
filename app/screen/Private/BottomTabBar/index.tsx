import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '../../../common/types';
import Home from '../Home';
import Profile from '../Profile';
import Messages from '../Messages';
import { IconHome } from '../../../assets/icons/Home';
import { IconMessage } from '../../../assets/icons/Message';
import { IconProfile } from '../../../assets/icons/Profile';
import { IconCalendar } from '../../../assets/icons/Calendar';

const Tab = createBottomTabNavigator<BottomTabParamList>();
//https://reactnativeforyou.com/how-to-add-bottom-tab-navigator-in-react-native/?expand_article=1
interface IBottomTabBar{
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}
function BottomTabBar(props:IBottomTabBar) {

    const ProfileWithProps=()=><Profile setLogin={props.setLogin} />

    return (
        <NavigationContainer>
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') return <IconHome w={30} h={30} color={color} />
                    if (route.name === 'Messages') return <IconMessage  w={30} h={30} color={color} />
                    if (route.name === 'Profile') return <IconProfile  w={25} h={25} color={color} />
                    if (route.name === 'Calendar') return <IconCalendar  w={30} h={30} color={color} />
                },
                tabBarActiveTintColor: 'skyblue',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel:"",
                tabBarStyle:{
                    justifyContent: 'center', 
                    minHeight:70,
                paddingTop:10, alignItems:'center'
            }
            })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Messages" options={{ }} component={Messages} />
                <Tab.Screen name="Calendar" component={Messages} />
                <Tab.Screen name="Profile" component={ProfileWithProps} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabBar;