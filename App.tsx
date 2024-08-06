import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './Components/Homescreen';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Orders from './Components/Orders';
import Profile from './Components/Profile';
import CompletedOrders from './Components/CompletedOrders';
import PendingDeliveries from './Components/PendingDeliveries';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompletedOrders"
          component={CompletedOrders}
          options={{headerShown: true}}
        />
         <Stack.Screen
          name="PendingDeliveries"
          component={PendingDeliveries}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  parentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
