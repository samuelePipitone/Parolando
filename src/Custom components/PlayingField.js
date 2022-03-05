import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import styles from '../Styles/Style_PlayingField';
import  { comunicationService } from '../Comunication';
import { field, field2, field3, field4, field5, field6 } from '../data/PlayingFieldData';

let row = 1;
let offset = 0;
let wordle = "PALLE";

const myKey = (item) => {
	return item.id;
};  

export default function PlayingField(myNavigation){

	const [keyList, setKeyList] = useState(field);

	const [keyList2, setKeyList2] = useState(field2);

	const [keyList3, setKeyList3] = useState(field3);

	const [keyList4, setKeyList4] = useState(field4);

	const [keyList5, setKeyList5] = useState(field5);

	const [keyList6, setKeyList6] = useState(field6);

	useEffect(() => {

		const subscription = comunicationService.onMessage().subscribe(key => {

			if(key) {

				if(key.letter === "INVIO"){

					offset++;
					if(isRight()){
						console.log("IS RIGHT");
					} else{
						row++;
					}
				} 
				else if(key.letter === "CANC"){
					offset++;
				} 
				else{
					updateData(key);
				}
			} 
			else{
				setKeyList([]);
			}
		});

		return subscription.unsubscribe;
	}, []);

	//aggiorna la lettera nella giusta riga
	const updateData = (key) => {
		switch(row){
			case 1: {
				const index = keyList.findIndex(item => item.id === key.pos);

				if(index === -1) return;
		
				const item = keyList[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
		
				setKeyList([...updatedArray]);
				break;
			};
			case 2: {
				const index = keyList2.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList2[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList2;
				updatedArray[index] = updatedItem;
		
				setKeyList2([...updatedArray]);
				break;
			};
			case 3: {
				const index = keyList3.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList3[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList3;
				updatedArray[index] = updatedItem;
		
				setKeyList3([...updatedArray]);
				break;
			};
			case 4: {
				const index = keyList4.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList4[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList4;
				updatedArray[index] = updatedItem;
		
				setKeyList4([...updatedArray]);
				break;
			};
			case 5: {
				const index = keyList5.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList5[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList5;
				updatedArray[index] = updatedItem;
		
				setKeyList5([...updatedArray]);
				break;
			};
			case 6: {
				const index = keyList6.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList6[index];
				const updatedItem = {...item, letter: key.letter};
				const updatedArray = keyList6;
				updatedArray[index] = updatedItem;
		
				setKeyList6([...updatedArray]);
				break;
			};
			default: {
				myNavigation.navigate('Error');
				break;
			}
		}
	};

	//ritorna true se la lunghezza della riga è corretta
	function rightLength() {

		let i = numberLetterRow();
		if(i === 5){
			return true;
		} else return false;
	};
	
	//ritorna true se la parola è azzeccata
	function isRight() {

		if(rightLength()){

			let trial = buildString();
			if(trial === wordle){
				return true;
			} else return false;

		} else return false; 
	};

	// Capisce se la riga è tutta piena
	function numberLetterRow() {
		let i = 0;
		switch(row){
			case 1: {
				for(let j = 0; j < 5; j++){
					if(keyList[j].letter.length === 1){
						i++
					}
				}
				return i;
			}
			case 2: {
				for(let j = 0; j < 5; j++){
					if(keyList2[j].letter.length === 1){
						i++
					}
				}
				return i;
			}
			case 3: {
				for(let j = 0; j < 5; j++){
					if(keyList3[j].letter.length === 1){
						i++
					}
				}
				return i;
			}
			case 4: {
				for(let j = 0; j < 5; j++){
					if(keyList4[j].letter.length === 1){
						i++
					}
				}
				return i;
			}
			case 5: {
				for(let j = 0; j < 5; j++){
					if(keyList5[j].letter.length === 1){
						i++
					}
				}
				return i;
			}
			case 6: {
				for(let j = 0; j < 5; j++){
					if(keyList6[j].letter.length === 1){
						i++
					}
				}
				return i;
			}
		}
	};

	//costruisce la stringa in base a quale riga appartiene
	function buildString(){
		let trial = "";
		switch(row){
			case 1: {
				for(let j = 0; j<5; j++){
					trial = trial.concat(keyList[j].letter);
				}
				return trial;
			}
			case 2: {
				for(let j = 0; j<5; j++){
					trial = trial.concat(keyList2[j].letter);
				}
				return trial;
			}
			case 3: {
				for(let j = 0; j<5; j++){
					trial = trial.concat(keyList3[j].letter);
				}
				return trial;
			}
			case 4: {
				for(let j = 0; j<5; j++){
					trial = trial.concat(keyList4[j].letter);
				}
				return trial;
			}
			case 5: {
				for(let j = 0; j<5; j++){
					trial = trial.concat(keyList5[j].letter);
				}
				return trial;
			}
			case 6: {
				for(let j = 0; j<5; j++){
					trial = trial.concat(keyList6[j].letter);
				}
				return trial;
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
				keyExtractor = {myKey}
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
				keyExtractor = {myKey}
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
				keyExtractor = {myKey}
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
				keyExtractor = {myKey}
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
				keyExtractor = {myKey}
				/>
			</View>

		</View>
	);
}