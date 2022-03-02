import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import styles from '../Styles/Style_PlayingField';
import  { comunicationService } from '../Comunication';

let row = 1;

let parola = "palle";

const myKey = (item) => {
	return item.id;
};  

export default function PlayingField(){

	const [keyList, setKeyList] = useState([
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 1,
			'row': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 2,
			'row': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 3,
			'row': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 4,
			'row': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 5,
			'row': 1
		}
	]);

	const [keyList2, setKeyList2] = useState([
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 2
		},
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 3
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 4
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 5
		}
	]);

	const [keyList3, setKeyList3] = useState([
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 2
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 3
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 4
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 5
		}
	]);

	const [keyList4, setKeyList4] = useState([
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 2
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 3
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 4
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 5
		}
	]);

	const [keyList5, setKeyList5] = useState([
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 2
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 3
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 4
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 5
		}
	]);

	const [keyList6, setKeyList6] = useState([
		{
			'letter': "",
			'state': "nonIndovinato",
			'id': 1
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 2
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 3
		},
		{
			'letter': "",
			'state': "NonIndovinato",
			'id': 4
		},
		{
			'letter': "",
			'state': "NonIndovinato",
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
		switch(row){
			case 1: {
				const index = keyList.findIndex(item => item.id === key.id);

				if(index === -1) return;
		
				const item = keyList[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
		
				setKeyList([...updatedArray]);
				break;
			};
			case 2: {
				const index = keyList2.findIndex(item => item.id === key.id);

				if(index === -1) return;
		
				const item = keyList2[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList2;
				updatedArray[index] = updatedItem;
		
				setKeyList2([...updatedArray]);
				break;
			};
			case 3: {
				const index = keyList3.findIndex(item => item.id === key.id);

				if(index === -1) return;
		
				const item = keyList3[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
		
				setKeyList3([...updatedArray]);
				break;
			};
			case 4: {
				const index = keyList4.findIndex(item => item.id === key.id);

				if(index === -1) return;
		
				const item = keyList4[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
		
				setKeyList4([...updatedArray]);
				break;
			};
			case 5: {
				const index = keyList5.findIndex(item => item.id === key.id);

				if(index === -1) return;
		
				const item = keyList5[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
		
				setKeyList5([...updatedArray]);
				break;
			};
			case 6: {
				const index = keyList6.findIndex(item => item.id === key.id);

				if(index === -1) return;
		
				const item = keyList6[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
		
				setKeyList6([...updatedArray]);
				break;
			};
			default: {
				//errorpage
				break;
			}
		}
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
				data = {keyList2}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey+5}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList3}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey+10}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList4}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey+15}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList5}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey+20}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList6}
				renderItem = {({item}) => 
					<View style={styles.singleBlock}>
						<Text style={styles.textBlock}>{item.letter}</Text>
					</View>
				}
				keyExtractor = {myKey+25}
				/>
			</View>

		</View>
	);
}