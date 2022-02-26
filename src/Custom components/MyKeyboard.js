import React from "react";
import { FlatList, View, Text } from "react-native";

import styles from '../Styles/Style_Keyboard';

const data1 = [
	{
		'letter': 'Q',
		'style': 'singleLetter',
		'id': 1
	},
	{
		'letter': 'W',
		'style': 'singleLetter',
		'id': 2
	},
	{
		'letter': 'E',
		'style': 'singleLetter',
		'id': 3
	},
	{
		'letter': 'R',
		'style': 'singleLetter',
		'id': 4
	},
	{
		'letter': 'T',
		'style': 'singleLetter',
		'id': 5
	},
	{
		'letter': 'Y',
		'style': 'singleLetter',
		'id': 6
	},
	{
		'letter': 'U',
		'style': 'singleLetter',
		'id': 7
	},
	{
		'letter': 'I',
		'style': 'singleLetter',
		'id': 8
	},
	{
		'letter': 'O',
		'style': 'singleLetter',
		'id': 9
	},
	{
		'letter': 'P',
		'style': 'singleLetter',
		'id': 10
	}
];

const data2 = [
	{
		'letter': 'A',
		'style': 'singleLetter',
		'id': 11
	},
	{
		'letter': 'S',
		'style': 'singleLetter',
		'id': 12
	},
	{
		'letter': 'D',
		'style': 'singleLetter',
		'id': 13
	},
	{
		'letter': 'F',
		'style': 'singleLetter',
		'id': 14
	},
	{
		'letter': 'G',
		'style': 'singleLetter',
		'id': 15
	},
	{
		'letter': 'H',
		'style': 'singleLetter',
		'id': 16
	},
	{
		'letter': 'J',
		'style': 'singleLetter',
		'id': 17
	},
	{
		'letter': 'K',
		'style': 'singleLetter',
		'id': 18
	},
	{
		'letter': 'L',
		'style': 'singleLetter',
		'id': 19
	}
];

const data3 = [
	{
		'letter': 'ENTER',
		'style': 'doubleLetter',
		'id': 20
	},
	{
		'letter': 'Z',
		'style': 'singleLetter',
		'id': 21
	},
	{
		'letter': 'X',
		'style': 'singleLetter',
		'id': 22
	},
	{
		'letter': 'C',
		'style': 'singleLetter',
		'id': 23
	},
	{
		'letter': 'V',
		'style': 'singleLetter',
		'id': 24
	},
	{
		'letter': 'B',
		'style': 'singleLetter',
		'id': 25
	},
	{
		'letter': 'N',
		'style': 'singleLetter',
		'id': 26
	},
	{
		'letter': 'M',
		'style': 'singleLetter',
		'id': 27
	},
	{
		'letter': 'BACK',
		'style': 'doubleLetter',
		'id': 28
	}
];

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