import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Modal,
	 Dimensions, TouchableOpacity } from "react-native";

import styles from '../Styles/Style_PlayingField';
import  { comunicationService } from '../Comunication';

import { field, field2, field3, field4, field5, field6 } from '../data/PlayingFieldData';
import { data1, data2, data3 } from '../data/KeyboardData';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

var width = Dimensions.get('window').width;

let row = 1;
let currentLength = 0;
let puntatore = 0;

/*
	TODO: migliorare le prestazioni -- ridurre for e ridurre stati
	TODO: modal statistiche da rivedere che non si legge
	TODO: forse il comunication service?
	TODO: forse separare keyboard?
*/

export default function PlayingField(myNavigation){

	const [keyBoard, setKeyboard] = useState(data1);

	const [keyBoard2, setKeyboard2] = useState(data2);

	const [keyBoard3, setKeyboard3] = useState(data3);

	const [keyList, setKeyList] = useState(field);

	const [keyList2, setKeyList2] = useState(field2);

	const [keyList3, setKeyList3] = useState(field3);

	const [keyList4, setKeyList4] = useState(field4);

	const [keyList5, setKeyList5] = useState(field5);

	const [keyList6, setKeyList6] = useState(field6);

	const [modalVisible, setModalVisible] = useState(false);

	const [wordle, setWordle] = useState([
		{
			letter: "P",
			visited: false
		},
		{
			letter: "A",
			visited: false
		},
		{
			letter: "L",
			visited: false
		},
		{
			letter: "L",
			visited: false
		},
		{
			letter: "E",
			visited: false
		}
	]);

	//ritorna l'id della key, usato come chiave
	const myKey = (item) => {
		return item.id;
	};  

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
							checkWord(currentLength);
							setModalVisible(true);
							break;
						}
						case 0: {
							if(row < 6){
								checkWord(currentLength);
								updateRow();
								row++;
								puntatore = 0;
								break;
							} else {
								checkWord(currentLength);
								setModalVisible(true);
								break;
							}
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
			let word = buildWordle();
			if(trial === word){
				return 1;
			} else return 0;

		} else return -1; 
	};

	//costruisce la wordle
	const buildWordle = () => {
		let word = "";
		for(let i = 0; i < 5; i++){
			word = word.concat(wordle[i].letter);
		}
		return word;
	}

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

	//colora una lettera di verde
	const colorKeyGreen =  l  => {
		for(let i = 0; i < 10; i++){
			if(l === keyBoard[i].letter && keyBoard[i].state !== "nonPresente"){
				const word = keyBoard[i];
				const updatedWord = {...word, state: "indovinato"};
				const updatedWordle = keyBoard;
				updatedWordle[i] = updatedWord; 
				setKeyboard([...updatedWordle]);
			}
		};
		for(let i = 0; i < 9; i++){
			if(l === keyBoard2[i].letter && keyBoard2[i].state !== "nonPresente"){
				const word = keyBoard2[i];
				const updatedWord = {...word, state: "indovinato"};
				const updatedWordle = keyBoard2;
				updatedWordle[i] = updatedWord; 
				setKeyboard2([...updatedWordle]);
			}
		};
		for(let i = 0; i < 9; i++){
			if(l === keyBoard3[i].letter && keyBoard3[i].state !== "nonPresente"){
				const word = keyBoard3[i];
				const updatedWord = {...word, state: "indovinato"};
				const updatedWordle = keyBoard3;
				updatedWordle[i] = updatedWord; 
				setKeyboard3([...updatedWordle]);
			}
		};
	};

	//colora una lettera di giallo
	const colorKeyYellow = l => {
		for(let i = 0; i < 10; i++){
			if(l === keyBoard[i].letter && keyBoard[i].state !== "presente"){
				const word = keyBoard[i];
				const updatedWord = {...word, state: "presente"};
				const updatedWordle = keyBoard;
				updatedWordle[i] = updatedWord; 
				setKeyboard([...updatedWordle]);
			}
		};
		for(let i = 0; i < 9; i++){
			if(l === keyBoard2[i].letter && keyBoard2[i].state !== "presente"){
				const word = keyBoard2[i];
				const updatedWord = {...word, state: "presente"};
				const updatedWordle = keyBoard2;
				updatedWordle[i] = updatedWord; 
				setKeyboard2([...updatedWordle]);
			}
		};
		for(let i = 0; i < 9; i++){
			if(l === keyBoard3[i].letter && keyBoard3[i].state !== "presente"){
				const word = keyBoard3[i];
				const updatedWord = {...word, state: "presente"};
				const updatedWordle = keyBoard3;
				updatedWordle[i] = updatedWord; 
				setKeyboard3([...updatedWordle]);
			}
		};
	};

	//colora una lettera di nero
	const colorKeyBlack = l => {
		for(let i = 0; i < 10; i++){
			if(l === keyBoard[i].letter 
				&& keyBoard[i].state !== "indovinato"
				&& keyBoard[i].state !== "presente"){
				const word = keyBoard[i];
				const updatedWord = {...word, state: "nonPresente"};
				const updatedWordle = keyBoard;
				updatedWordle[i] = updatedWord; 
				setKeyboard([...updatedWordle]);
			}
		};
		for(let i = 0; i < 9; i++){
			if(l === keyBoard2[i].letter 
				&& keyBoard2[i].state !== "indovinato"
				&& keyBoard2[i].state !== "presente"){
				const word = keyBoard2[i];
				const updatedWord = {...word, state: "nonPresente"};
				const updatedWordle = keyBoard2;
				updatedWordle[i] = updatedWord; 
				setKeyboard2([...updatedWordle]);
			}
		};
		for(let i = 0; i < 9; i++){
			if(l === keyBoard3[i].letter 
				&& keyBoard3[i].state !== "indovinato"
				&& keyBoard3[i].state !== "presente"){
				const word = keyBoard3[i];
				const updatedWord = {...word, state: "nonPresente"};
				const updatedWordle = keyBoard3;
				updatedWordle[i] = updatedWord; 
				setKeyboard3([...updatedWordle]);
			}
		};
	};

	//controlla le lettere della parola inserita dall'utente
	function checkWord(i){
		if(rightLength(i)){
			switch(row){
				case 1: {
					//check for green
					for(let j = 0; j < 5; j++){

						if(keyList[j].letter === wordle[j].letter){

							const word = wordle[j];
							const updatedWord = {...word, visited: true};
							const updatedWordle = wordle;
							updatedWordle[j] = updatedWord; 
							setWordle([...updatedWordle]);

							const item = keyList[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList;
							updatedArray[j] = updatedItem;
							setKeyList([...updatedArray]);

							colorKeyGreen(wordle[j].letter);
						} 
					}
					//check for yellow
					for(let j = 0; j < 5; j++){
						if(!wordle[j].visited){
							checkForYellow(wordle[j].letter);
						}
					}
					resetWordle();
					break;
				}
				case 2: {
					//check for green
					for(let j = 0; j < 5; j++){

						if(keyList2[j].letter === wordle[j].letter){

							const word = wordle[j];
							const updatedWord = {...word, visited: true};
							const updatedWordle = wordle;
							updatedWordle[j] = updatedWord; 
							setWordle([...updatedWordle]);

							const item = keyList2[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList2;
							updatedArray[j] = updatedItem;
							setKeyList2([...updatedArray]);

							colorKeyGreen(wordle[j].letter);
						} 
					}
					//check for yellow
					for(let j = 0; j < 5; j++){
						if(!wordle[j].visited){
							checkForYellow(wordle[j].letter);
						}
					}
					break;
				}
				case 3: {
					//check for green
					for(let j = 0; j < 5; j++){

						if(keyList3[j].letter === wordle[j].letter){

							const word = wordle[j];
							const updatedWord = {...word, visited: true};
							const updatedWordle = wordle;
							updatedWordle[j] = updatedWord; 
							setWordle([...updatedWordle]);

							const item = keyList3[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList3;
							updatedArray[j] = updatedItem;
							setKeyList3([...updatedArray]);

							colorKeyGreen(wordle[j].letter);
						} 
					}
					//check for yellow
					for(let j = 0; j < 5; j++){
						if(!wordle[j].visited){
							checkForYellow(wordle[j].letter);
						}
					}
					break;
				}
				case 4: {
					//check for green
					for(let j = 0; j < 5; j++){

						if(keyList4[j].letter === wordle[j].letter){

							const word = wordle[j];
							const updatedWord = {...word, visited: true};
							const updatedWordle = wordle;
							updatedWordle[j] = updatedWord; 
							setWordle([...updatedWordle]);

							const item = keyList4[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList4;
							updatedArray[j] = updatedItem;
							setKeyList4([...updatedArray]);

							colorKeyGreen(wordle[j].letter);
						} 
					}
					//check for yellow
					for(let j = 0; j < 5; j++){
						if(!wordle[j].visited){
							checkForYellow(wordle[j].letter);
						}
					}
					break;
				}
				case 5: {
					//check for green
					for(let j = 0; j < 5; j++){

						if(keyList5[j].letter === wordle[j].letter){

							const word = wordle[j];
							const updatedWord = {...word, visited: true};
							const updatedWordle = wordle;
							updatedWordle[j] = updatedWord; 
							setWordle([...updatedWordle]);

							const item = keyList5[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList5;
							updatedArray[j] = updatedItem;
							setKeyList5([...updatedArray]);

							colorKeyGreen(wordle[j].letter);
						} 
					}
					//check for yellow
					for(let j = 0; j < 5; j++){
						if(!wordle[j].visited){
							checkForYellow(wordle[j].letter);
						}
					}
					break;
				}
				case 6: {
					//check for green
					for(let j = 0; j < 5; j++){

						if(keyList6[j].letter === wordle[j].letter){

							const word = wordle[j];
							const updatedWord = {...word, visited: true};
							const updatedWordle = wordle;
							updatedWordle[j] = updatedWord; 
							setWordle([...updatedWordle]);

							const item = keyList6[j];
							const updatedItem = {...item, state: "indovinato"};
							const updatedArray = keyList6;
							updatedArray[j] = updatedItem;
							setKeyList6([...updatedArray]);

							colorKeyGreen(wordle[j].letter);
						} 
					}
					//check for yellow
					for(let j = 0; j < 5; j++){
						if(!wordle[j].visited){
							checkForYellow(wordle[j].letter);
						}
					}
					break;
				}
			}		
		} 
	};

	//cerca se le lettere sono gialle
	const checkForYellow = (key) => {
		switch(row){
			case 1:  {
				for(let i = 0; i < 5; i++){
					if(keyList[i].state !== "indovinato"){
						if(key === keyList[i].letter){
							const item = keyList[i];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList;
							updatedArray[i] = updatedItem;
							setKeyList([...updatedArray]);

							colorKeyYellow(key);
						}
					} 
				}
				for(let i = 0; i < 5; i++){
					if(keyList[i].state !== "indovinato" &&
						keyList[i].state !== "presente"){
							colorKeyBlack(keyList[i].letter);
					} 
				}
				break;
			}
			case 2:  {
				for(let i = 0; i < 5; i++){
					if(keyList2[i].state !== "indovinato"){
						if(key === keyList2[i].letter){
							const item = keyList2[i];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList2;
							updatedArray[i] = updatedItem;
							setKeyList2([...updatedArray]);

							colorKeyYellow(key);
						}
					} 
				}
				for(let i = 0; i < 5; i++){
					if(keyList2[i].state !== "indovinato" &&
						keyList2[i].state !== "presente"){
							colorKeyBlack(keyList2[i].letter);
					} 
				}
				break;
			}
			case 3:  {
				for(let i = 0; i < 5; i++){
					if(keyList3[i].state !== "indovinato"){
						if(key === keyList3[i].letter){
							const item = keyList3[i];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList3;
							updatedArray[i] = updatedItem;
							setKeyList3([...updatedArray]);

							colorKeyYellow(key);
						}
					} 
				}
				for(let i = 0; i < 5; i++){
					if(keyList3[i].state !== "indovinato" &&
						keyList3[i].state !== "presente"){
							colorKeyBlack(keyList3[i].letter);
					} 
				}
				break;
			}
			case 4:  {
				for(let i = 0; i < 5; i++){
					if(keyList4[i].state !== "indovinato"){
						if(key === keyList4[i].letter){
							const item = keyList4[i];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList4;
							updatedArray[i] = updatedItem;
							setKeyList4([...updatedArray]);

							colorKeyYellow(key);
						}
					} 
				}
				for(let i = 0; i < 5; i++){
					if(keyList4[i].state !== "indovinato" &&
						keyList4[i].state !== "presente"){
							colorKeyBlack(keyList4[i].letter);
					} 
				}
				break;
			}
			case 5:  {
				for(let i = 0; i < 5; i++){
					if(keyList5[i].state !== "indovinato"){
						if(key === keyList5[i].letter){
							const item = keyList5[i];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList5;
							updatedArray[i] = updatedItem;
							setKeyList5([...updatedArray]);

							colorKeyYellow(key);
						}
					} 
				}
				for(let i = 0; i < 5; i++){
					if(keyList5[i].state !== "indovinato" &&
						keyList5[i].state !== "presente"){
							colorKeyBlack(keyList5[i].letter);
					} 
				}
				break;
			}
			case 6:  {
				for(let i = 0; i < 5; i++){
					if(keyList6[i].state !== "indovinato"){
						if(key === keyList6[i].letter){
							const item = keyList6[i];
							const updatedItem = {...item, state: "presente"};
							const updatedArray = keyList6;
							updatedArray[i] = updatedItem;
							setKeyList6([...updatedArray]);

							colorKeyYellow(key);
						}
					} 
				}
				for(let i = 0; i < 5; i++){
					if(keyList6[i].state !== "indovinato" &&
						keyList6[i].state !== "presente"){
							colorKeyBlack(keyList6[i].letter);
					} 
				}
				break;
			}
		}
	};

	//riporta la wordle a inesplorata -- per questioni di performance si potrebbe aggiornare in un colpo solo invece che fare rerender 5 volte
	const resetWordle = () => {
		for(let i = 0; i < 5 ; i++){
			const word = wordle[i];
			const updatedWord = {...word, visited: false};
			const updatedWordle = wordle;
			updatedWordle[i] = updatedWord; 
			setWordle([...updatedWordle]);
		}
	};

	//stile della keyBoard
	const myStyle2 = ( state ) => {

		if(state === "inizio"){
			return styles.letteraStart;
		} else if (state === "indovinato"){
			return styles.letterFind;
		} else if(state === "presente"){
			return styles.letterAlmost;
		} else if(state === "nonPresente"){
			return styles.letteraNonPresente;
		}
	};

	//item della keyBoard
	const Item2 = ( {stylez, letter, state} ) => (
		<TouchableOpacity onPress={() => sendMessage(letter)} style={
			[stylez === 'singleLetter' ? styles.singleLetter : styles.doubleLetter,
				myStyle2(state)
			]}>

			<Text style={styles.letterText}>{letter}</Text>
		</TouchableOpacity>
	);

	//render della keyBoard
	const renderItem2 = ( {item} ) => (
		<Item2 stylez={item.style} letter={item.letter} state={item.state}/>
	);

	//send message della keyBoard
	function sendMessage(key){
		comunicationService.sendMessage(key);
	};

	//render grafico
	return(
		<View style={styles.prova}>
			<View style={styles.container}>

				<Modal
				animationType = "none"
				transparent = {true}
				visible = {modalVisible}
				>

					<View style={styles.modalContainer}>

						<View style={styles.modalHeader}>
							<TouchableOpacity style={styles.modalClickHeader} onPress={() => setModalVisible(false)}>
								<Feather name='x' size={width/10}/>
							</TouchableOpacity>
						</View>

						<View style={styles.modalBody}>

							<View style={styles.modalBodyUp}>

								<View style={styles.modalBodyUpHeader}>
									<Text style={styles.modalTitolo}>Statistiche:</Text>
								</View>
								<View style={styles.modalBodyUpBody}>

									<View style={styles.modalBodyUpBodyLeft}>

										<View style={styles.modalText}>
											<Text style={styles.modalStatText}>Partite giocate: </Text>
										</View>

										<View style={styles.modalText}>
											<Text style={styles.modalStatText}>% Parole indovinate:</Text>
										</View>

										<View style={styles.modalText}>
											<Text style={styles.modalStatText}>Serie di vittorie:</Text>
										</View>

										<View style={styles.modalText}>
											<Text style={styles.modalStatText}>Serie vitt. massima:</Text>
										</View>

									</View>

									<View style={styles.modalBodyUpBodyRight}>

										<View style={styles.modalValue}>
											<Text style={styles.modalStatNumbers}>0</Text>
										</View>

										<View style={styles.modalValue}>
											<Text style={styles.modalStatNumbers}>0</Text>
										</View>

										<View style={styles.modalValue}>
											<Text style={styles.modalStatNumbers}>0</Text>
										</View>

										<View style={styles.modalValue}>
											<Text style={styles.modalStatNumbers}>0</Text>
										</View>
									</View>
								</View>
							</View>

							<View style={styles.modalBodyDown}>

								<View style={styles.modalBodyDownUp}>
									<Text style={styles.modalTitolo}>Titolo</Text>
								</View>

								<View style={styles.modalBodyDownDown}>
									<Text>GRAFICO</Text>
								</View>
							</View>
						</View>

						<View style={styles.modalFooter}>

							<View style={styles.modalFooterLeft}>
								
								<View style={styles.modalFooterLeftTop}>
									<Text style={styles.modalTitoletto}>Prossima parola in:</Text>
								</View>

								<View style={styles.modalFooterLeftBottom}>
									<Text>1 giorno</Text>
								</View>
							</View>

							<View style={styles.modalFooterRight}>
								<TouchableOpacity style={styles.button}>
									<Text style={styles.modalButtonText}>Condividi</Text>
									<Entypo name="share" size={width/18}/>
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

			<View style={styles.footer}>
				
				<View style={styles.row1}>

					<FlatList
					horizontal = {true}
					data = {keyBoard}
					keyExtractor = {myKey}
					renderItem = {renderItem2}
					contentContainerStyle = {styles.stileFlat}
					/>

					</View>

					<View style={styles.row2}>

					<FlatList
					horizontal = {true}
					data = {keyBoard2}
					keyExtractor = {myKey}
					renderItem = {renderItem2}
					contentContainerStyle = {styles.stileFlat}
					/>

					</View>

					<View style={styles.row3}>

					<FlatList
					horizontal = {true}
					data = {keyBoard3}
					keyExtractor = {myKey}
					renderItem = {renderItem2}
					contentContainerStyle = {styles.stileFlat}
					/>

				</View>
			</View>
		</View>
	);
}