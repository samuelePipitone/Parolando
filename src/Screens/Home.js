import React from "react";
import { View, Button } from "react-native"; 

import styles from '../Styles/Style_Home';

export default function SecondScreen({ navigation }){
	return(
		<View style={styles.container}>
			<Button title='secondo' onPress={() => navigation.navigate('Home')}></Button>
		</View>
	);
}
