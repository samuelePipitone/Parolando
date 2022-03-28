import React from "react";
import { View, SafeAreaView, Dimensions, Text,
TouchableOpacity, Image } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from '../Styles/Style_SalaTrofei';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function SalaTrofei({ navigation }){
	return(
		<SafeAreaView style={styles.androidSafeArea}>

			<View style={styles.container}>

				<View style={styles.header}>

					<TouchableOpacity 
					style={styles.headerLeft}
					onPress={() => navigation.navigate('Home')}
					>

						<AntDesign name="left" size={width/10}/>
						<Text style={styles.home}>HOME</Text>

					</TouchableOpacity>

					<View style={styles.headerRight}>

					</View>

				</View>

				<View style={styles.body}>

					<View style={styles.bodyProfile}>

						<View style={styles.circular}>
							<Image 
							source={require('../images/immagine.png')}
							style={styles.immagine}
							/>
						</View>

					</View>

					<View style={styles.bodyName}>

						<Text style={styles.nomeUtente}>Nome_utente</Text>

					</View>

					<View style={styles.bodyStatisticheContainer}>

						<View style={styles.bodyStatTitolo}>
							<Text style={styles.statistiche}>Statistiche:</Text>
						</View>

						<View style={styles.bodyStatBody}>
							<Text style={{alignSelf: 'center'}}>GRAFICO</Text>
						</View>

					</View>

				</View>

				<View style={styles.footer}>
					<Text style={styles.credits}>SSM Team</Text>
					<Text style={styles.donate}>Donate!</Text>
				</View>

			</View>

		</SafeAreaView>
	);
}