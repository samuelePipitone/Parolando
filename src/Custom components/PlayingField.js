import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Modal,
	 Dimensions, TouchableOpacity } from "react-native";

import styles from '../Styles/Style_PlayingField';
import  { comunicationService } from '../Comunication';
import { field, field2, field3, field4, field5, field6 } from '../data/PlayingFieldData';

import Feather from 'react-native-vector-icons/Feather';

var width = Dimensions.get('window').width; //full width

let row = 1;
let offset = 0;
let wordle = "PALLE";
let currentLength = 0;

const myKey = (item) => {
	return item.id;
};  

/*
	TODO: riguarda la combo canc e invio -> da capire bene l'offset
	TODO: riguarda i colori, a volte non prende alcuni gialli (allep)(marea)
*/
export default function PlayingField(myNavigation){

	const [keyList, setKeyList] = useState(field);

	const [keyList2, setKeyList2] = useState(field2);

	const [keyList3, setKeyList3] = useState(field3);

	const [keyList4, setKeyList4] = useState(field4);

	const [keyList5, setKeyList5] = useState(field5);

	const [keyList6, setKeyList6] = useState(field6);

	const [modalVisible, setModalVisible] = useState(false);

	//aggiorna dinamicamente la pagina in base al tasto cliccato
	useEffect(() => {

		const subscription = comunicationService.onMessage().subscribe(key => {

			if(key) {

				//CODICE QUANDO UTENTE CLICCA INVIO
				if(key.letter === "INVIO"){

					currentLength = numberLetterRow();
					offset++;
					let right = isRight(currentLength);

					switch(right){
						case 1: {
							setModalVisible(true);
							break;
						}
						case 0: {
							checkWord(currentLength);
							row++;
							break;
						}
						case -1: {
							console.log("Lunghezza stringa errata");
							offset++;
							break;
						}
					}
				} 
				//CODICE QUANDO UTENTE CLICCA CANC
				else if(key.letter === "CANC"){
					cancelRow();
					offset++;
				} 
				//CODICE QUANDO UTENTE CLICCA UN'ALTRA KEY
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
				const previousItem = keyList[index - 1];
				const updatedItem = {...item, letter: key.letter, selected: true};
				const updatedPreviousItem = {...previousItem, selected: false};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
				updatedArray[index - 1] = updatedPreviousItem;
		
				setKeyList([...updatedArray]);
				break;
			};
			case 2: {
				const index = keyList2.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList2[index];
				const previousItem = keyList2[index - 1];
				const updatedItem = {...item, letter: key.letter, selected: true};
				const updatedPreviousItem = {...previousItem, selected: false};
				const updatedArray = keyList2;
				updatedArray[index] = updatedItem;
				updatedArray[index - 1] = updatedPreviousItem;
		
				setKeyList2([...updatedArray]);
				break;
			};
			case 3: {
				const index = keyList3.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList3[index];
				const previousItem = keyList3[index - 1];
				const updatedItem = {...item, letter: key.letter, selected: true};
				const updatedPreviousItem = {...previousItem, selected: false};
				const updatedArray = keyList3;
				updatedArray[index] = updatedItem;
				updatedArray[index - 1] = updatedPreviousItem;
		
				setKeyList3([...updatedArray]);
				break;
			};
			case 4: {
				const index = keyList4.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList4[index];
				const previousItem = keyList4[index - 1];
				const updatedItem = {...item, letter: key.letter, selected: true};
				const updatedPreviousItem = {...previousItem, selected: false};
				const updatedArray = keyList4;
				updatedArray[index] = updatedItem;
				updatedArray[index - 1] = updatedPreviousItem;
		
				setKeyList4([...updatedArray]);
				break;
			};
			case 5: {
				const index = keyList5.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList5[index];
				const previousItem = keyList5[index - 1];
				const updatedItem = {...item, letter: key.letter, selected: true};
				const updatedPreviousItem = {...previousItem, selected: false};
				const updatedArray = keyList5;
				updatedArray[index] = updatedItem;
				updatedArray[index - 1] = updatedPreviousItem;
		
				setKeyList5([...updatedArray]);
				break;
			};
			case 6: {
				const index = keyList6.findIndex(item => item.id === key.pos - offset);

				if(index === -1) return;
		
				const item = keyList6[index];
				const previousItem = keyList6[index - 1];
				const updatedItem = {...item, letter: key.letter, selected: true};
				const updatedPreviousItem = {...previousItem, selected: false};
				const updatedArray = keyList6;
				updatedArray[index] = updatedItem;
				updatedArray[index - 1] = updatedPreviousItem;
		
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
	function rightLength(i) {
		if(i === 5){
			return true;
		} else return false;
	};
	
	//ritorna 1 se parola corretta, 0 se parola non corretta, -1 se lunghezza sbagliata
	function isRight(i) {

		if(rightLength(i)){

			let trial = buildString();
			if(trial === wordle){
				return 1;
			} else return 0;

		} else return -1; 
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

	//Cancella completamente una riga
	function cancelRow(){
			offset--;
			switch(row){
				case 1: {
					for(let i = 0; i < 5; i++){
						const item = keyList[i];
						const updatedItem = {...item, letter: ""};
						const updatedArray = keyList;
						updatedArray[i] = updatedItem;
				
						setKeyList([...updatedArray]);
					}
				}
				case 2: {
					for(let i = 0; i < 5; i++){
						const item = keyList2[i];
						const updatedItem = {...item, letter: ""};
						const updatedArray = keyList2;
						updatedArray[i] = updatedItem;
				
						setKeyList2([...updatedArray]);
					}
				}
				case 3: {
					for(let i = 0; i < 5; i++){
						const item = keyList3[i];
						const updatedItem = {...item, letter: ""};
						const updatedArray = keyList3;
						updatedArray[i] = updatedItem;
				
						setKeyList3([...updatedArray]);
					}
				}
				case 4: {
					for(let i = 0; i < 5; i++){
						const item = keyList4[i];
						const updatedItem = {...item, letter: ""};
						const updatedArray = keyList4;
						updatedArray[i] = updatedItem;
				
						setKeyList4([...updatedArray]);
					}
				}
				case 5: {
					for(let i = 0; i < 5; i++){
						const item = keyList5[i];
						const updatedItem = {...item, letter: ""};
						const updatedArray = keyList5;
						updatedArray[i] = updatedItem;
				
						setKeyList5([...updatedArray]);
					}
				}
				case 6: {
					for(let i = 0; i < 5; i++){
						const item = keyList6[i];
						const updatedItem = {...item, letter: ""};
						const updatedArray = keyList6;
						updatedArray[i] = updatedItem;
				
						setKeyList6([...updatedArray]);
					}
				}
			}
			comunicationService.resetI(row);
	};
	
	//Singolo blocco nella Flatlist
	const Item = ({ letter, state, selected }) => (
		<View style={myStyle(state, selected)}>
			<Text style={styles.textBlock}>{letter}</Text>
		</View>
	);

	//funzione che renderizza l'item con parametri dall'oggetto
	const renderItem = ({ item }) => (
		<Item letter={item.letter} state={item.state} selected={item.selected}/>
	);

	//prende lo stato e ritorna lo stile del singolo blocco
	function myStyle( state, selected ){
		if(selected){
			if(state === "indovinato") {
				return styles.singleBlockRightSelected;
			} else if (state === "presente") {
				return styles.singleBlockAlmostSelected;
			} else return styles.singleBlockSelected;
		} else {
			if(state === "indovinato") {
				return styles.singleBlockRight;
			} else if (state === "presente") {
				return styles.singleBlockAlmost;
			} else return styles.singleBlock;
		}
	}; 

	//controlla le lettere della parola inserita dall'utente
	function checkWord(i){

		if(rightLength(i)){

			switch(row){
				case 1: {
					for(let j = 0; j < 5; j++){

						if(keyList[j].letter === wordle.charAt(j)){

							const item = keyList[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList;
							updatedArray[j] = updatedItem;
					
							setKeyList([...updatedArray]);
		
						} else if(checkLetter(keyList[j].letter) !== -1){

							let k = checkLetter2(keyList[j].letter,
								keyList[j].visited);

							if(k === 0){
								const item = keyList[k];
								const updatedItem = {...item, state: "presente", visited: true};
								const updatedArray = keyList;
								updatedArray[k] = updatedItem;
						
								setKeyList([...updatedArray]);
							}
						} 
					}
					break;
				}
				case 2: {
					for(let j = 0; j < 5; j++){
						if(keyList2[j].letter === wordle.charAt(j)){
							const item = keyList2[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList2;
							updatedArray[j] = updatedItem;

							setKeyList2([...updatedArray]);
		
						} else if(checkLetter(keyList2[j].letter) !== -1){
							let k = checkLetter(keyList2[j].letter);
							const item = keyList2[k];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList2;
							updatedArray[k] = updatedItem;
					
							setKeyList2([...updatedArray]);
						} 
					} 
					break;
				}
				case 3: {
					for(let j = 0; j < 5; j++){
						if(keyList3[j].letter === wordle.charAt(j)){
							const item = keyList3[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList3;
							updatedArray[j] = updatedItem;
					
							setKeyList3([...updatedArray]);3
		
						} else if(checkLetter(keyList3[j].letter) !== -1){
							let k = checkLetter(keyList3[j].letter);
							const item = keyList3[k];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList3;
							updatedArray[k] = updatedItem;
					
							setKeyList3([...updatedArray]);
						} 
					}
					break;
				}
				case 4: {
					for(let j = 0; j < 5; j++){
						if(keyList4[j].letter === wordle.charAt(j)){
							const item = keyList4[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList4;
							updatedArray[j] = updatedItem;
					
							setKeyList4([...updatedArray]);
		
						} else if(checkLetter(keyList4[j].letter) !== -1){
							let k = checkLetter(keyList4[j].letter);
							const item = keyList4[k];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList4;
							updatedArray[k] = updatedItem;
					
							setKeyList4([...updatedArray]);
						} 
					}
					break;
				}
				case 5: {
					for(let j = 0; j < 5; j++){
						if(keyList5[j].letter === wordle.charAt(j)){
							const item = keyList5[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList5;
							updatedArray[j] = updatedItem;
					
							setKeyList5([...updatedArray]);
		
						} else if(checkLetter(keyList5[j].letter) !== -1){
							let k = checkLetter(keyList5[j].letter);
							const item = keyList5[k];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList5;
							updatedArray[k] = updatedItem;
					
							setKeyList5([...updatedArray]);
						} 
					}
					break;
				}
				case 6: {
					for(let j = 0; j < 5; j++){
						if(keyList6[j].letter === wordle.charAt(j)){
							const item = keyList6[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList6;
							updatedArray[j] = updatedItem;
					
							setKeyList6([...updatedArray]);
		
						} else if(checkLetter(keyList6[j].letter) !== -1){
							let k = checkLetter(keyList6[j].letter);
							const item = keyList6[k];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList6;
							updatedArray[k] = updatedItem;
					
							setKeyList6([...updatedArray]);
						} 
					}
					break;
				}
			}
		} 
	};

	//ritorna 1 se presente, -1 se non presente
	function checkLetter(l) {
		for(let i = 0; i < 5; i++){
			if(l === wordle.charAt(i)){ //QUESTA E LA POSIZIONE DELLA LETTERA NELLA TUA PAROLA RINCOGLIONITO
				return 0;
			}
		}
		return -1;
	}

	function checkLetter2(l, visited) {
		for(let i = 0; i < 5; i++){
			if(!visited){
				if(l === wordle.charAt(i)){ 
					return 0;
				}
			}
		}
		return -1;
	}

	//render grafico
	return(
		<View style={styles.container}>

			<Modal
			animationType = "none"
			transparent = {true}
			visible = {modalVisible}>

				<View style={styles.modalContainer}>

					<View style={styles.modalHeader}>
						<TouchableOpacity style={styles.modalClickHeader} onPress={() => setModalVisible(false)}>
							<Feather name='x' size={width/10}/>
						</TouchableOpacity>
					</View>

					<View style={styles.modalBody}>

						<View style={styles.modalBodyUp}>

							<View style={styles.modalBodyUpHeader}>
								<Text>Statistiche</Text>
							</View>
							<View style={styles.modalBodyUpBody}>

								<View style={styles.modalBodyUpBodyLeft}>

									<View style={styles.modalText}>
										<Text>Partite giocate: </Text>
									</View>

									<View style={styles.modalText}>
										<Text>% Parole indovinate:</Text>
									</View>

									<View style={styles.modalText}>
										<Text>Serie di vittorie:</Text>
									</View>

									<View style={styles.modalText}>
										<Text>Serie di vittorie massima:</Text>
									</View>

								</View>

								<View style={styles.modalBodyUpBodyRight}>

									<View style={styles.modalValue}>
										<Text>0</Text>
									</View>

									<View style={styles.modalValue}>
										<Text>0</Text>
									</View>

									<View style={styles.modalValue}>
										<Text>0</Text>
									</View>

									<View style={styles.modalValue}>
										<Text>0</Text>
									</View>
								</View>
							</View>
						</View>

						<View style={styles.modalBodyDown}>

							<View style={styles.modalBodyDownUp}>
								<Text>Titolo</Text>
							</View>

							<View style={styles.modalBodyDownDown}>
								<Text>GRAFICO</Text>
							</View>
						</View>
					</View>

					<View style={styles.modalFooter}>

						<View style={styles.modalFooterLeft}>
							
							<View style={styles.modalFooterLeftTop}>
								<Text>Prossima parola in:</Text>
							</View>

							<View style={styles.modalFooterLeftBottom}>
								<Text>1 giorno</Text>
							</View>
						</View>

						<View style={styles.modalFooterRight}>
							<TouchableOpacity style={styles.button}>
								<Text>Condividi</Text>
							</TouchableOpacity>
						</View>
					</View>

				</View>
			</Modal>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList}
				renderItem = {renderItem}
				keyExtractor = {myKey}
				extraData={keyList}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList2}
				renderItem = {renderItem}
				keyExtractor = {myKey}
				extraData={keyList2}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList3}
				renderItem = {renderItem}
				keyExtractor = {myKey}
				extraData={keyList3}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList4}
				renderItem = {renderItem}
				keyExtractor = {myKey}
				extraData={keyList4}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList5}
				renderItem = {renderItem}
				keyExtractor = {myKey}
				extraData={keyList5}
				/>
			</View>

			<View style={styles.blocks}>
				<FlatList
				horizontal={true}
				data = {keyList6}
				renderItem = {renderItem}
				keyExtractor = {myKey}
				extraData={keyList6}
				/>
			</View>

		</View>
	);
}