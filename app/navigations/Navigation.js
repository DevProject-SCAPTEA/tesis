import React from 'react'
import {NavigationContainer} from'@react-navigation/native'
import {createBottomTabNavigator}from'@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import AccountStack from './AccountStack'
import TestStack from './TestStack'
import GraphicStack from './GraphicStack'
import InfoStack from './InfoStack'

const Tab=createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='info'
            tabBarOptions={{
                inactiveTintColor:'#646464',
                activeTintColor:'#0e9594'
            }}
            screenOptions={({route})=>({
                tabBarIcon:({color})=>screenOptions(route,color),
            })}
            >
                <Tab.Screen
                name='info'
                component={InfoStack}
                options={{title:'Información'}}
                />
                <Tab.Screen
                name='graphics'
                component={GraphicStack}
                options={{title:'Análisis'}}
                /> 
                <Tab.Screen
                name='test'
                component={TestStack}
                options={{title:'Pruebas'}}
                />               
                <Tab.Screen
                name='account'
                component={AccountStack}
                options={{title:'Cuentas'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
function screenOptions(route,color) {
    let iconName;

    switch (route.name) {
        case 'account':
            iconName='account'
            break;
        case'test':
            iconName='clipboard-pulse-outline'
            break;
        case'graphics':
            iconName='chart-bar'
            break;
        case'info':
        iconName='message-plus'
            break;
        default:
            break;
    }
    return(
        <Icon 
        type='material-community' 
        name={iconName} 
        size={22}
        color={color}
        />
    )
}