import React from 'react';
// import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import QRCodeScan from './src/QRCodeScan';
import QRCodeGen from './src/QRCodeGen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="QRScan"
          component={QRCodeScan}
          options={{title: 'QRScan'}}
        />
        <Tab.Screen
          name="QRGen"
          component={QRCodeGen}
          options={{title: 'QRGen'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
  // }
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // })
}
