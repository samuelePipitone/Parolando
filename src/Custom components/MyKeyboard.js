import React from "react";
import { FlatList, View, Text } from "react-native";

import styles from '../Styles/Style_Keyboard';
import { data1, data2, data3 } from '../data/KeyboardData';

const myKey = (item) => {
	return item.id;
};

export default function Keyboard(){

    return(
        <View style={styles.container}>

          <View style={styles.row1}>

			<FlatList
			horizontal = {true}
			data = {data1}
			keyExtractor = {myKey}
			renderItem = {({item}) => 
					<View style={item.style === 'singleLetter' ? styles.singleLetter : styles.doubleLetter}>
						<Text style={styles.letterText}>{item.letter}</Text>
					</View>
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
					<View style={item.style === 'singleLetter' ? styles.singleLetter : styles.doubleLetter}>
						<Text style={styles.letterText}>{item.letter}</Text>
					</View>
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
					<View style={item.style === 'singleLetter' ? styles.singleLetter : styles.doubleLetter}>
						<Text style={styles.letterText}>{item.letter}</Text>
					</View>
				}
			contentContainerStyle = {styles.stileFlat}
			/>

		  </View>
        </View>
    );
}