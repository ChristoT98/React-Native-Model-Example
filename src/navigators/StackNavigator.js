import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DefaultModalScreen from '../screens/DefaultModalScreen';
import SlideInLeftModalScreen from '../screens/SlideInLeftModalScreen';
import SlowerModalScreen from '../screens/SlowerModalScreen';
import AnimatedModalScreen from '../screens/AnimatedModalScreen';
import BottomHalfModalScreen from '../screens/BottomHalfModalScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="React Native modals" component={HomeScreen} />
            <Stack.Screen name="Default modal" component={DefaultModalScreen} />
            <Stack.Screen name="Slide in left modal" component={SlideInLeftModalScreen} />
            <Stack.Screen name="Slower modal" component={SlowerModalScreen} />
            <Stack.Screen name="Animated modal" component={AnimatedModalScreen} />
            <Stack.Screen name="Bottom half modal" component={BottomHalfModalScreen} />
        </Stack.Navigator>
    );
}