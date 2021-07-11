import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Info from '../screens/info/Info';
import TravelList from '../components/Info/TravelList';
import TravelListDetails from '../components/Info/TravelListDetails';

// const Stack = createStackNavigator();

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function InfoStack() {
    return (
        <Stack.Navigator initialRouteName="info" headerMode="none">
            <Stack.Screen name="info" component={Info} />
            <Stack.Screen name="list" component={TravelList} />
            <Stack.Screen name="details" component={TravelListDetails} />
        </Stack.Navigator>
    )
}