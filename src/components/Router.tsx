import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RootStack from '../screens/RootStack';
import Colors from '../constants/Colors';
import RootStackParamList from '../screens/RootStackParamList';

const StackNavigator = createStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: Colors.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
        }}>
        <StackNavigator.Screen
          name={'PotionsScreen'}
          component={RootStack.PotionsScreen.component}
          options={{title: 'Kata'}}
        />
        <StackNavigator.Screen
          name={'ResultScreen'}
          component={RootStack.ResultScreen.component}
          options={{title: 'Resultado'}}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Router;
