import React, {useState} from "react";
import { TouchableOpacity, Dimensions, View, ScrollView, Modal, Text } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from '../Styles/Style_Options'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Options(){

	const [modalVisible, setModalVisible] = useState(false);

	const [modalStatistiche, setModalStatistiche] = useState(false);

    return(
		<View style={styles.container}>

			<Modal
			animationType = "slide"
			transparent = {true}
			visible = {modalVisible}
			>
				<ScrollView contentContainerStyle ={styles.modalContainer}>

					<View style={styles.headerOptions}>
						<View style={styles.titlesContainerHeader}>
							<Text style={styles.titlesTextHeader}>Parolando</Text>
						</View>

						<TouchableOpacity style={styles.imageContainer} onPress={() => {setModalVisible(false)}}>
							<Feather name='x' size={width/10}/>
						</TouchableOpacity>
					</View>

					<View style={styles.inner}>
						<View style={styles.titlesContainer}>
							<View>
								<Text style={styles.titlesText}>Account</Text>

								<Text style={styles.text}>Login/Logout</Text>
							</View>
						</View>

						<View style={styles.titlesContainer}>

								<Text style={styles.titlesText}>Profilo</Text>

							<TouchableOpacity onPress={() => {
								setModalVisible(false);
								setModalStatistiche(true);}}>

								<Text style={styles.text}>Statistiche</Text>
								
							</TouchableOpacity>

								<Text style={styles.text}>Sala dei trofei</Text>
								<Text style={styles.text}>Classifica</Text>
						</View>

						<View style={styles.titlesContainer}>
							<Text style={styles.titlesText}>Regole</Text>

							<Text style={styles.text}>Come giocare?</Text>
							<Text style={styles.text}>Come ottenere medaglie?</Text>
							<Text style={styles.text}>Come funzionano i trofei?</Text>
						</View>

						<View style={styles.titlesContainer}>
							<Text style={styles.titlesText}>Modalità scura</Text>

							<Text style={styles.text}>Attiva/Disattiva</Text>
						</View>

						<View style={styles.titlesContainerLast}>
							<Text style={styles.titlesText}>Crediti</Text>

							<Text style={styles.text}>SSM TEAMS OFFICIAL</Text>
						</View>

					</View>
				</ScrollView>
			</Modal>

			<Modal
			animationType = "none"
			transparent = {true}
			visible = {modalStatistiche}
			>

					<View style={styles.modalContainer2}>

						<View style={styles.modalHeader}>
							<TouchableOpacity style={styles.modalClickHeader} onPress={() => setModalStatistiche(false)}>
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

			<TouchableOpacity style={styles.container} 
			onPress = {() => {setModalVisible(true)}}
			>

            	<Ionicons name={'options'} size={width/8}/>

        	</TouchableOpacity>

		</View>
    );
}