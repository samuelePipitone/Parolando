import React from "react";
import { View, Text, FlatList } from "react-native"; 

//Style
import styles from '../Styles/Style_Home';

//My imports


const mockup = [
	{
		'letter': "A",
		'state': "nonIndovinato",
		'id': 1
	},
	{
		'letter': "B",
		'state': "Indovinato",
		'id': 2
	},
	{
		'letter': "C",
		'state': "Indovinato",
		'id': 3
	},
	{
		'letter': "D",
		'state': "Indovinato",
		'id': 4
	},
	{
		'letter': "E",
		'state': "Indovinato",
		'id': 5
	}
];

const myKey = (item) => {
	return item.id;
}  

/*
			<FlatList
			data = {mockup}
			renderItem = {({item}) => 
				<View>
					<Text>{item.data}</Text>
				</View>
			}
			keyExtractor = {myKey}
			/>
*/

export default function SecondScreen({ navigation }){

	return(
		<View style={styles.container}>
			<View style={styles.header}>

			</View>

			<View style={styles.body}>
				
			</View>

			<View style={styles.footer}>
				
			</View>
		</View>
	);
}
