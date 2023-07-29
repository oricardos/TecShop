import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Services} from './screens/Services';
import {Cart} from './screens/Cart';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Services" component={Services} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    </NavigationContainer>
}