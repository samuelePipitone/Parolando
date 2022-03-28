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

	const [modalComeGiocare, setModalComeGiocare] = useState(false);

	const [modalMedaglie, setModalMedaglie] = useState(false);

	const [modalTrofei, setModalTrofei] = useState(false);

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
							
							<TouchableOpacity onPress={() => {
								setModalVisible(false);
								setModalComeGiocare(true);}}>
								<Text style={styles.text}>Come giocare?</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => {
								setModalVisible(false);
								setModalMedaglie(true);}}>
								<Text style={styles.text}>Come ottenere medaglie?</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => {
								setModalVisible(false);
								setModalTrofei(true);}}>
								<Text style={styles.text}>Come funzionano i trofei?</Text>
							</TouchableOpacity>
							
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
				<View style={styles.containerSfondo}>

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
				</View>
			</Modal>

			<Modal
			animationType = "none"
			transparent = {true}
			visible = {modalComeGiocare}
			>
				<View style={styles.containerSfondo}>

					<View style={styles.modalContainer3}>
						<View style={styles.modalHeader}>
							<TouchableOpacity style={styles.modalClickHeader} onPress={() => setModalComeGiocare(false)}>
								<Feather name='x' size={width/10}/>
							</TouchableOpacity>
						</View>

						<View style={styles.modalBody2}>
							<Text style={styles.textComeGiocare}>
								Il gioco prevede di indovinare una parola di 5 lettere
								in 6 tentativi. Il primo tentativo non avrà alcun suggerimento,
								dopo aver tentato di indovinare una parola le lettere si coloriranno 
								con questo schema: {"\n"} {"\n"}
									-Verde: se la lettera è indovinata nella posizione giusta {"\n"} {"\n"}
									-Giallo: se la lettera è presente nella parola ma nella posizione sbagliata {"\n"} {"\n"}
									-Grigio scuro: se la lettera non è presente
							</Text>
						</View>
					</View>
				</View>

			</Modal>

			<Modal
			animationType = "none"
			transparent = {true}
			visible = {modalMedaglie}
			>
				<View style={styles.containerSfondo}>

					<View style={styles.modalContainer4}>
						<View style={styles.modalHeader}>
							<TouchableOpacity style={styles.modalClickHeader} onPress={() => setModalMedaglie(false)}>
								<Feather name='x' size={width/10}/>
							</TouchableOpacity>
						</View>

						<View style={styles.modalBody2}>
							<Text style={styles.textComeGiocare}>
								Per vincere le medaglie è necessario indovinare 
								la parola in pochissimi tentativi, in particolare: {"\n"} {"\n"}
								-1 tentativo: medaglia di smeraldo {"\n"} {"\n"}
								-2 tentativi: medaglia di rubino {"\n"} {"\n"}
								-3 tentativi: medaglia di zaffiro
							</Text>
						</View>
					</View>
				</View>

			</Modal>

			<Modal
			animationType = "none"
			transparent = {true}
			visible = {modalTrofei}
			>
				<View style={styles.containerSfondo}>

					<View style={styles.modalContainer5}>
						<View style={styles.modalHeader}>
							<TouchableOpacity style={styles.modalClickHeader} onPress={() => setModalTrofei(false)}>
								<Feather name='x' size={width/10}/>
							</TouchableOpacity>
						</View>

						<View style={styles.modalBody2}>
							<Text style={styles.textComeGiocare}>
								Per vincere i trofei è necessario avere un buon KDA
								a fine della stagione, le stagioni durano 3 mesi!
								I trofei presenti sono: {"\n"} {"\n"}
								-Diamante: KDA minore di 3,4 {"\n"} {"\n"}
								-Platino: KDA compreso tra 4 e 3,5 {"\n"} {"\n"} 
								-Oro: KDA compreso tra 5 e 4 {"\n"} {"\n"}
								-Argento: KDA compreso tra 6 e 5 {"\n"} {"\n"}
								-Bronzo: KDA maggiore di 6
							</Text>
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