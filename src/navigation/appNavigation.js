import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/homeScreen';
import ItemsScreen from '../screens/Home/itemsScreen';
import DetailsScreen from '../screens/Home/detailsScreen'
import {connect} from 'react-redux'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AppNavigator= ({activeProvider})=> {


  return (

  <Stack.Navigator >
   
    
    <Stack.Screen name="Home" component={HomeScreen}
     options={{
       headerTitleAlign:'center',
       title: 'Categories',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
   }}
    />

<Stack.Screen name="items" component={ItemsScreen}
     options={({ route }) => (
       { 
        headerTitleAlign:'center',
         title: route.params.itemName,
         headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
      
       }
       
       )}
    />

<Stack.Screen name="Details" component={DetailsScreen}
     options={({ route }) => (
       { 
        headerTitleAlign:'center',
         title: 'Details',
         headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
      
       }
       
       )}
    />
  </Stack.Navigator>
  );
}




export default AppNavigator;

