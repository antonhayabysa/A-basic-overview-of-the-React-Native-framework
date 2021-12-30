import React from 'react';
import {StyleSheet} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Todo from './screens/Todo';
import Films from  './screens/Films'


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarAllowFontScaling: true,
                    tabBarLabelStyle: {
                        fontSize: 22
                    },
                    tabBarIcon: () => {
                        return
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Заметки" component={Todo} />
                <Tab.Screen name="Фильмотека" component={Films} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
