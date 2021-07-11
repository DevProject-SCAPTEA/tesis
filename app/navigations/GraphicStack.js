import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Graphics from '../screens/Graph/Graphics'
import TestList from '../screens/Graph/TestList'
import GraphData from '../screens/Graph/GraphData'

const Stack = createStackNavigator();

export default function GraphicStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='graphics'
                component={Graphics}
                options={{ title: 'Análasis y Gráficos' }}
            />
            <Stack.Screen
                name='testlist'
                component={TestList}
                options={{ title: 'Lista de pruebas' }}
            />
            <Stack.Screen
                name='graphlist'
                component={GraphData}
                options={{ title: 'Gráficos' }}
            />

        </Stack.Navigator>
    )
}