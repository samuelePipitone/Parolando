import React from "react";
import { View, Button, StyleSheet } from "react-native"; 

export default function Homepage({ navigation }){
	return(
		<View style={styles.container}>
			<Button title='home' onPress={() => navigation.navigate('prova')}></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });