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

	const [keyList, setKeyList] = useState([]);

	useEffect(() => {
		const subscription = comunicationService.onMessage().subscribe(key => {
			if(key) {
				setKeyList(keyList => [...keyList, key]);
			} else{
				setKeyList([]);
			}
		});

		return subscription.unsubscribe;
	}, []);

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