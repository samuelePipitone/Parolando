import React, { useState, useEffect } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

import styles from '../Styles/Style_Keyboard';
import { data1, data2, data3 } from '../data/KeyboardData';
import { comunicationService } from "../Comunication";


export default function Keyboard(){

	function sendMessage(key){
		comunicationService.sendMessage(key);
	};

	const myKey = (item) => {
		return item.id;
	};

	const Item = ( {stylez, letter, state} ) => (
		<TouchableOpacity onPress={() => sendMessage(letter)} style={
			[stylez === 'singleLetter' ? styles.singleLetter : styles.doubleLetter,
				myStyle(state)
			]}>

			<Text style={styles.letterText}>{letter}</Text>
		</TouchableOpacity>
	);

	const renderItem = ( {item} ) => (
		<Item stylez={item.style} letter={item.letter} state={item.state}/>
	);

	const myStyle = ( state ) => {

		if(state === "inizio"){
			return styles.letteraStart;
		} else if (state === "presente"){
			return styles.letterFind;
		} else if(state === "almost"){
			return styles.letterAlmost;
		} else if(state === "nonPresente"){
			return styles.letteraNonPresente;
		}
	};

    return(
        <View style={styles.container}>

          <View style={styles.row1}>

			<FlatList
			horizontal = {true}
			data = {data1}
			keyExtractor = {myKey}
			renderItem = {renderItem}
			contentContainerStyle = {styles.stileFlat}
			/>

		  </View>

          <View style={styles.row2}>

			<FlatList
			horizontal = {true}
			data = {data2}
			keyExtractor = {myKey}
			renderItem = {renderItem}
			contentContainerStyle = {styles.stileFlat}
			/>

		  </View>

          <View style={styles.row3}>

			<FlatList
			horizontal = {true}
			data = {data3}
			keyExtractor = {myKey}
			renderItem = {renderItem}
			contentContainerStyle = {styles.stileFlat}
			/>

		  </View>
        </View>
    );
}