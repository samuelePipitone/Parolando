import React from "react";
import { View, SafeAreaView } from "react-native"; 

//Style
import styles from '../Styles/Style_Home';

//My imports
import Kda from '../Custom components/Kda';
import Badges from '../Custom components/Badges';
import Options from '../Custom components/Options';
import PlayingField from '../Custom components/PlayingField';

/* 
	NOTE:
		-margine da togliere fisso e mettere variabile
		-fontsize da mettere in percentuale e non fissi
		-ottimizzare spazio e tempo
*/

export default function Home({ navigation }){

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
						<Options navigation={navigation}/>
					</View>

				</View>

				<View style={styles.body}>

					<PlayingField myNavigation={navigation}/>

				</View>

			</View>
			
		</SafeAreaView>
	);
}
