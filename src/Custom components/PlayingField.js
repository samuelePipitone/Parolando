import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Modal,
	 Dimensions, TouchableOpacity } from "react-native";

import styles from '../Styles/Style_PlayingField';
import  { comunicationService } from '../Comunication';
import { field, field2, field3, field4, field5, field6 } from '../data/PlayingFieldData';

import Feather from 'react-native-vector-icons/Feather';

var width = Dimensions.get('window').width; //full width

let row = 1;
let wordle = "PALLE";
let currentLength = 0;
let puntatore = 0;

const myKey = (item) => {
	return item.id;
};  

/*
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
					let right = isRight(currentLength);

					switch(right){
						case 1: {
							setModalVisible(true);
							break;
						}
						case 0: {
							checkWord(currentLength);
							updateRow();
							row++;
							puntatore = 0;
							break;
						}
						case -1: {
							console.log("Lunghezza stringa errata");
							break;
						}
					}
				} 
				//CODICE QUANDO UTENTE CLICCA CANC
				else if(key.letter === "CANC"){
					cancelKey();
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

	//serve a eliminare il selected nell'ultima riga
	const updateRow = () => {
		switch(row){
			case 1: {
				const index = 4;

				const item = keyList[index];
				const updatedItem = {...item, selected: false};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
				setKeyList([...updatedArray]);

				const nextRowIndex = 0;

				const nextItemRow = keyList2[nextRowIndex];
				const updatedNextItemRow = {...nextItemRow, selected: true};
				const nextUpdatedArray = keyList2;
				nextUpdatedArray[nextRowIndex] = updatedNextItemRow;
				setKeyList2([...nextUpdatedArray]);
				break;
			}
			case 2: {
				const index = 4;

				const item = keyList2[index];
				const updatedItem = {...item, selected: false};
				const updatedArray = keyList2;
				updatedArray[index] = updatedItem;
				setKeyList2([...updatedArray]);

				const nextRowIndex = 0;

				const nextItemRow = keyList3[nextRowIndex];
				const updatedNextItemRow = {...nextItemRow, selected: true};
				const nextUpdatedArray = keyList3;
				nextUpdatedArray[nextRowIndex] = updatedNextItemRow;
				setKeyList3([...nextUpdatedArray]);
				break;
			}
			case 3: {
				const index = 4;

				const item = keyList3[index];
				const updatedItem = {...item, selected: false};
				const updatedArray = keyList3;
				updatedArray[index] = updatedItem;
				setKeyList3([...updatedArray]);

				const nextRowIndex = 0;

				const nextItemRow = keyList4[nextRowIndex];
				const updatedNextItemRow = {...nextItemRow, selected: true};
				const nextUpdatedArray = keyList4;
				nextUpdatedArray[nextRowIndex] = updatedNextItemRow;
				setKeyList4([...nextUpdatedArray]);
				break;
			}
			case 4: {
				const index = 4;

				const item = keyList4[index];
				const updatedItem = {...item, selected: false};
				const updatedArray = keyList4;
				updatedArray[index] = updatedItem;
				setKeyList4([...updatedArray]);

				const nextRowIndex = 0;

				const nextItemRow = keyList5[nextRowIndex];
				const updatedNextItemRow = {...nextItemRow, selected: true};
				const nextUpdatedArray = keyList5;
				nextUpdatedArray[nextRowIndex] = updatedNextItemRow;
				setKeyList5([...nextUpdatedArray]);
				break;
			}
			case 5: {
				const index = 4;

				const item = keyList5[index];
				const updatedItem = {...item, selected: false};
				const updatedArray = keyList5;
				updatedArray[index] = updatedItem;
				setKeyList5([...updatedArray]);

				const nextRowIndex = 0;

				const nextItemRow = keyList6[nextRowIndex];
				const updatedNextItemRow = {...nextItemRow, selected: true};
				const nextUpdatedArray = keyList6;
				nextUpdatedArray[nextRowIndex] = updatedNextItemRow;
				setKeyList6([...nextUpdatedArray]);
				break;
			}
			case 6: {
				const index = 4;
		
				const item = keyList6[index];
				const updatedItem = {...item, selected: false};
				const updatedArray = keyList6;
				updatedArray[index] = updatedItem;
		
				setKeyList6([...updatedArray]);
				break;
			}
		}
	};

	//aggiorna la lettera nella giusta riga
	const updateData = (key) => {
		switch(row){
			case 1: {
				if(puntatore < 5){
				const index = puntatore;
		
				const item = keyList[index];
				const previousItem = keyList[index - 1];
				const updatedItem = {...item, letter: key.letter, selected: true};
				const updatedPreviousItem = {...previousItem, selected: false};
				const updatedArray = keyList;
				updatedArray[index] = updatedItem;
				updatedArray[index - 1] = updatedPreviousItem;
		
				setKeyList([...updatedArray]);
				puntatore++;
				break;
				} else {
					return;
				}

			};
			case 2: {
				if(puntatore < 5){
					const index = puntatore;
			
					const item = keyList2[index];
					const previousItem = keyList2[index - 1];
					const updatedItem = {...item, letter: key.letter, selected: true};
					const updatedPreviousItem = {...previousItem, selected: false};
					const updatedArray = keyList2;
					updatedArray[index] = updatedItem;
					updatedArray[index - 1] = updatedPreviousItem;
			
					setKeyList2([...updatedArray]);
					puntatore++;
					break;
					} else {
						return;
					}
	
				};
			case 3: {
				if(puntatore < 5){
					const index = puntatore;
			
					const item = keyList3[index];
					const previousItem = keyList3[index - 1];
					const updatedItem = {...item, letter: key.letter, selected: true};
					const updatedPreviousItem = {...previousItem, selected: false};
					const updatedArray = keyList3;
					updatedArray[index] = updatedItem;
					updatedArray[index - 1] = updatedPreviousItem;
			
					setKeyList3([...updatedArray]);
					puntatore++;
					break;
					} else {
						return;
					}
	
				};
			case 4: {
				if(puntatore < 5){
					const index = puntatore;
			
					const item = keyList4[index];
					const previousItem = keyList4[index - 1];
					const updatedItem = {...item, letter: key.letter, selected: true};
					const updatedPreviousItem = {...previousItem, selected: false};
					const updatedArray = keyList4;
					updatedArray[index] = updatedItem;
					updatedArray[index - 1] = updatedPreviousItem;
			
					setKeyList4([...updatedArray]);
					puntatore++;
					break;
					} else {
						return;
					}
	
				};
			case 5: {
				if(puntatore < 5){
					const index = puntatore;
			
					const item = keyList5[index];
					const previousItem = keyList5[index - 1];
					const updatedItem = {...item, letter: key.letter, selected: true};
					const updatedPreviousItem = {...previousItem, selected: false};
					const updatedArray = keyList5;
					updatedArray[index] = updatedItem;
					updatedArray[index - 1] = updatedPreviousItem;
			
					setKeyList5([...updatedArray]);
					puntatore++;
					break;
					} else {
						return;
					}
	
				};
			case 6: {
				if(puntatore < 5){
					const index = puntatore;
			
					const item = keyList6[index];
					const previousItem = keyList6[index - 1];
					const updatedItem = {...item, letter: key.letter, selected: true};
					const updatedPreviousItem = {...previousItem, selected: false};
					const updatedArray = keyList6;
					updatedArray[index] = updatedItem;
					updatedArray[index - 1] = updatedPreviousItem;
			
					setKeyList6([...updatedArray]);
					puntatore++;
					break;
					} else {
						return;
					}
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

	//Cancella una lettera
	function cancelKey(){

		switch(row){
			case 1: {
				if(puntatore > 0){
					const index = puntatore;
					const updatedArray = keyList;

					let nextItem = keyList[index];

					if(nextItem !== undefined  && nextItem.selected){
						nextItem = {...nextItem, selected: false}
						updatedArray[index] = nextItem;
					}

					const previousItem = keyList[index - 1];
					const updatedPreviousItem = {...previousItem, selected: true, letter: ""};
					updatedArray[index - 1] = updatedPreviousItem;
					
					setKeyList([...updatedArray]);
					puntatore--;
					break;
				} else {
					break;
				}
			}
			case 2: {
				if(puntatore > 0){
					const index = puntatore;
					const updatedArray = keyList2;

					let nextItem = keyList2[index];

					if(nextItem !== undefined  && nextItem.selected){
						nextItem = {...nextItem, selected: false}
						updatedArray[index] = nextItem;
					}

					const previousItem = keyList2[index - 1];
					const updatedPreviousItem = {...previousItem, selected: true, letter: ""};
					updatedArray[index - 1] = updatedPreviousItem;
					
					setKeyList2([...updatedArray]);
					puntatore--;
					break;
				} else {
					break;
				}
			}
			case 3: {
				if(puntatore > 0){
					const index = puntatore;
					const updatedArray = keyList3;

					let nextItem = keyList3[index];

					if(nextItem !== undefined  && nextItem.selected){
						nextItem = {...nextItem, selected: false}
						updatedArray[index] = nextItem;
					}

					const previousItem = keyList3[index - 1];
					const updatedPreviousItem = {...previousItem, selected: true, letter: ""};
					updatedArray[index - 1] = updatedPreviousItem;
					
					setKeyList3([...updatedArray]);
					puntatore--;
					break;
				} else {
					break;
				}
			}
			case 4: {
				if(puntatore > 0){
					const index = puntatore;
					const updatedArray = keyList4;

					let nextItem = keyList4[index];

					if(nextItem !== undefined  && nextItem.selected){
						nextItem = {...nextItem, selected: false}
						updatedArray[index] = nextItem;
					}

					const previousItem = keyList4[index - 1];
					const updatedPreviousItem = {...previousItem, selected: true, letter: ""};
					updatedArray[index - 1] = updatedPreviousItem;
					
					setKeyList4([...updatedArray]);
					puntatore--;
					break;
				} else {
					break;
				}
			}
			case 5: {
				if(puntatore > 0){
					const index = puntatore;
					const updatedArray = keyList5;

					let nextItem = keyList5[index];

					if(nextItem !== undefined  && nextItem.selected){
						nextItem = {...nextItem, selected: false}
						updatedArray[index] = nextItem;
					}

					const previousItem = keyList5[index - 1];
					const updatedPreviousItem = {...previousItem, selected: true, letter: ""};
					updatedArray[index - 1] = updatedPreviousItem;
					
					setKeyList5([...updatedArray]);
					puntatore--;
					break;
				} else {
					break;
				}
			}
			case 6: {
				if(puntatore > 0){
					const index = puntatore;
					const updatedArray = keyList6;

					let nextItem = keyList6[index];

					if(nextItem !== undefined  && nextItem.selected){
						nextItem = {...nextItem, selected: false}
						updatedArray[index] = nextItem;
					}

					const previousItem = keyList6[index - 1];
					const updatedPreviousItem = {...previousItem, selected: true, letter: ""};
					updatedArray[index - 1] = updatedPreviousItem;
					
					setKeyList6([...updatedArray]);
					puntatore--;
					break;
				} else {
					break;
				}
			}
		}
	}
	
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