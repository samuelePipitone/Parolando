import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import styles from '../Styles/Style_PlayingField';
import  { comunicationService } from '../Comunication';

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
};  

export default function PlayingField(){

	const [keyList, setKeyList] = useState([
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 1
		},
		{
			'letter': "",
			'state': "Indovinato",
			'id': 2
		},
		{
			'letter': "",
			'state': "Indovinato",
			'id': 3
		},
		{
			'letter': "",
			'state': "Indovinato",
			'id': 4
		},
		{
			'letter': "",
			'state': "Indovinato",
			'id': 5
		}
	]);

	useEffect(() => {
		const subscription = comunicationService.onMessage().subscribe(key => {
			if(key) {
				updateData(key);
			} else{
				setKeyList([]);
			}
		});

		return subscription.unsubscribe;
	}, []);

	const updateData = (key) => {
		const index = keyList.findIndex(item => item.id === key.id);

		if(index === -1) return;

		const item = keyList[index];

		const updatedItem = {...item, letter: key.letter};

		const updatedArray = keyList;

		updatedArray[index] = updatedItem;
		console.log(updatedArray)

		setKeyList(updatedArray);
	};

	return(
		<View style={styles.container}>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {mockup}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {mockup}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {mockup}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {mockup}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {mockup}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey}
				/>
			</View>

		</View>
	);
}