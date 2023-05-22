import React, { useEffect } from 'react';

import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}

export default App;
