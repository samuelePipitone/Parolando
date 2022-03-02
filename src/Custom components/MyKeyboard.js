import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

import styles from '../Styles/Style_Keyboard';
import { data1, data2, data3 } from '../data/KeyboardData';
import { comunicationService } from "../Comunication";

const myKey = (item) => {
	return item.id;
};

export default function Keyboard(){

	function sendMessage(key){
		comunicationService.sendMessage(key);
	}

	function clearMessages(){
		comunicationService.clearMessages();
	}

    return(
        <View style={styles.container}>

          <View style={styles.row1}>

			<FlatList
			horizontal = {true}
			data = {data1}
			keyExtractor = {myKey}
			renderItem = {({item}) => 
					<TouchableOpacity onPress={() => sendMessage(item.letter)}
					style={item.style === 'singleLetter' ? styles.singleLetter : styles.doubleLetter}>

						<Text style={styles.letterText}>{item.letter}</Text>

					</TouchableOpacity>
				}
			contentContainerStyle = {styles.stileFlat}
			/>

		  </View>

          <View style={styles.row2}>

			<FlatList
			horizontal = {true}
			data = {data2}
			keyExtractor = {myKey}
			renderItem = {({item}) => 
					<TouchableOpacity onPress={() => sendMessage(item.letter)}
					style={item.style === 'singleLetter' ? styles.singleLetter : styles.doubleLetter}>

						<Text style={styles.letterText}>{item.letter}</Text>
						
					</TouchableOpacity>
				}
			contentContainerStyle = {styles.stileFlat}
			/>

		  </View>

          <View style={styles.row3}>

			<FlatList
			horizontal = {true}
			data = {data3}
			keyExtractor = {myKey}
			renderItem = {({item}) => 
				<TouchableOpacity onPress={() => sendMessage(item.letter)}
				style={item.style === 'singleLetter' ? styles.singleLetter : styles.doubleLetter}>

					<Text style={styles.letterText}>{item.letter}</Text>
				
				</TouchableOpacity>
				}
			contentContainerStyle = {styles.stileFlat}
			/>

		  </View>
        </View>
    );
}