import React from "react";
import { View, Text, SafeAreaView, Image,
	 TouchableOpacity, Dimensions, ScrollView } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from '../Styles/Style_Classifica';

var width = Dimensions.get('window').width; //full width

export default function Classifica({ navigation }){
	return(
		<SafeAreaView style={styles.androidSafeArea}>
			
			<View style={styles.header}>

				<TouchableOpacity 
				style={styles.headerLeft}
				onPress={() => navigation.goBack()}
				>

					<AntDesign name="left" size={width/10}/>
					<Text style={styles.home}>HOME</Text>

				</TouchableOpacity>

				<View style={styles.headerRight}>

				</View>

			</View>			

			<View style={styles.body}>

				<View style={styles.bodyHeader}>

					<Text style={styles.parolando}>PAROLANDO</Text>

				</View>

				<View style={styles.bodyBody}>
					<ScrollView style={{flex: 1}}>

						<Text style={styles.classifica}>Classifica:</Text>

						<View style={styles.eloDiamante}>
							<Text style={styles.eloText}>Diamante:</Text>
						</View>

						<View style={styles.bloccoClassifica}>

							<View style={styles.trofeo}>
								<Image 
								source={require('../images/trofeo.png')}
								style={styles.immagine}
								/>
							</View>

							<View style={styles.centro}>

								<View style={styles.top}>
									<Text style={styles.nomeUtente}>Nome_Utente</Text>
								</View>

								<View style={styles.bottom}>
									<Text style={styles.soprannome}>"u trimon"</Text>
								</View>
								
							</View>

							<View style={styles.kda}>
								<Text style={styles.kdaText}>3.60</Text>
							</View>

						</View>

						<View style={styles.eloPlatino}>
							<Text style={styles.eloText}>Platino:</Text>
						</View>

						<View style={styles.bloccoClassifica}>

							<View style={styles.trofeo}>
								<Image 
								source={require('../images/trofeo.png')}
								style={styles.immagine}
								/>
							</View>

							<View style={styles.centro}>

								<View style={styles.top}>
									<Text style={styles.nomeUtente}>Nome_Utente</Text>
								</View>

								<View style={styles.bottom}>
									<Text style={styles.soprannome}>"u trimon"</Text>
								</View>
								
							</View>

							<View style={styles.kda}>
								<Text style={styles.kdaText}>3.60</Text>
							</View>

						</View>

						<View style={styles.eloOro}>
							<Text style={styles.eloText}>Oro:</Text>
						</View>

						<View style={styles.bloccoClassifica}>

							<View style={styles.trofeo}>
								<Image 
								source={require('../images/trofeo.png')}
								style={styles.immagine}
								/>
							</View>

							<View style={styles.centro}>

								<View style={styles.top}>
									<Text style={styles.nomeUtente}>Nome_Utente</Text>
								</View>

								<View style={styles.bottom}>
									<Text style={styles.soprannome}>"u trimon"</Text>
								</View>
								
							</View>

							<View style={styles.kda}>
								<Text style={styles.kdaText}>3.60</Text>
							</View>

						</View>

						<View style={styles.eloArgento}>
							<Text style={styles.eloText}>Argento:</Text>
						</View>

						<View style={styles.bloccoClassifica}>

							<View style={styles.trofeo}>
								<Image 
								source={require('../images/trofeo.png')}
								style={styles.immagine}
								/>
							</View>

							<View style={styles.centro}>

								<View style={styles.top}>
									<Text style={styles.nomeUtente}>Nome_Utente</Text>
								</View>

								<View style={styles.bottom}>
									<Text style={styles.soprannome}>"u trimon"</Text>
								</View>
								
							</View>

							<View style={styles.kda}>
								<Text style={styles.kdaText}>3.60</Text>
							</View>

						</View>

						<View style={styles.eloBronzo}>
							<Text style={styles.eloText}>Bronzo:</Text>
						</View>

						<View style={styles.bloccoClassifica}>

							<View style={styles.trofeo}>
								<Image 
								source={require('../images/trofeo.png')}
								style={styles.immagine}
								/>
							</View>

							<View style={styles.centro}>

								<View style={styles.top}>
									<Text style={styles.nomeUtente}>Nome_Utente</Text>
								</View>

								<View style={styles.bottom}>
									<Text style={styles.soprannome}>"u trimon"</Text>
								</View>
								
							</View>

							<View style={styles.kda}>
								<Text style={styles.kdaText}>3.60</Text>
							</View>

						</View>

					</ScrollView>
				</View>
				
			</View>

			<View style={styles.footer}>
				<Text style={styles.credits}>SSM Team</Text>
				<Text style={styles.donate}>Donate!</Text>
			</View>

		</SafeAreaView>
	);
}