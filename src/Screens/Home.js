import React from "react";
import { View, SafeAreaView } from "react-native"; 

//Style
import styles from '../Styles/Style_Home';

//My imports
import Kda from '../Custom components/Kda';
import Badges from '../Custom components/Badges';
import Options from '../Custom components/Options';
import PlayingField from '../Custom components/PlayingField';
import MyKeyboard from '../Custom components/MyKeyboard';

/* 
	NOTE:
		-margine da togliere fisso e mettere variabile
*/

export default function SecondScreen({ navigation }){

	return(
		<SafeAreaView style={styles.androidSafeArea}>

			<View style={styles.container}>

				<View style={styles.header}>

					<View style={styles.header_badges}>
						<Badges/>
					</View>

					<View style={styles.header_kda}>
						<Kda/>
					</View>

					<View style={styles.header_options}>
						<Options/>
					</View>

				</View>

				<View style={styles.body}>

					<PlayingField/>

				</View>

				<View style={styles.footer}>

					<MyKeyboard/>

				</View>

			</View>
			
		</SafeAreaView>
	);
}
