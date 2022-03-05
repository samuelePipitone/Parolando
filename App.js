import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from './src/Screens/Home';
import Test from './src/Screens/Test';
import ErrorPage from './src/Screens/ErrorPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
	  <NavigationContainer>
		    <Stack.Navigator>
				<Stack.Screen 
					name="Home" 
					component={Home} 
					options={{ 
						headerShown: false }}
				/>
				<Stack.Screen name="Test" component={Test}/>
				<Stack.Screen name="Error" component={ErrorPage}/>
			</Stack.Navigator>
	  </NavigationContainer>
	  
  );
}

