import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Dimensions } from "react-native";

import styles from '../Styles/Style_Kda';
import Feather from 'react-native-vector-icons/Feather';

var width = Dimensions.get('window').width;

export default function Kda(){

	const [modal, setModal] = useState(false);

    return(
		<View style={styles.container}>

			<TouchableOpacity onPress={() => setModal(true)}>
				<Text style={styles.value}>3.14</Text>
			</TouchableOpacity>

			<Modal
			animationType = "none"
			transparent = {true}
			visible = {modal}
			>
				<View style={styles.modalContainer}>

					<View style={styles.modalHeader}>
						<TouchableOpacity style={styles.modalClickHeader} onPress={() => setModal(false)}>
							<Feather name='x' size={width/10}/>
						</TouchableOpacity>
					</View>

					<View style={styles.modalBody}>
						<Text style={styles.modalText}>Questa è la media dei tuoi tentativi...ecc..</Text>
					</View>

				</View>
			</Modal>
		</View>
    );
}