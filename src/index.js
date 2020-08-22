import React, { Component } from 'react';
import { ScrollView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Apex from './components/apex/index.js';
import LoL from './components/lol/index.js';
import Home from './components/home/index.js'

const Stack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Apex"
                    component={Apex}
                />
                <Stack.Screen
                    name="LoL"
                    component={LoL}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const GamesStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Apex"
                    component={Apex}
                />
                <Stack.Screen
                    name="LoL"
                    component={LoL}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

class Routes extends Component {

    render() {
        return (
            HomeStackNavigator()
        );
    }
}
export default Routes;