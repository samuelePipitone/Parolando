import React, {useState} from "react";
import { TouchableOpacity, Dimensions, View, ScrollView, Modal, Text } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from '../Styles/Style_Options'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Options(){

	const [modalVisible, setModalVisible] = useState(false);

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

					<View style={styles.titlesContainer}>
						<View>
							<Text style={styles.titlesText}>Account</Text>
						</View>
					</View>

					<View style={styles.titlesContainer}>
						<Text style={styles.titlesText}>Profilo</Text>
					</View>

					<View style={styles.titlesContainer}>
						<Text style={styles.titlesText}>Regole</Text>
					</View>

					<View style={styles.titlesContainer}>
						<Text style={styles.titlesText}>Modalità scura</Text>
					</View>

					<View style={styles.titlesContainerLast}>
						<Text style={styles.titlesText}>Crediti</Text>
					</View>

				</ScrollView>
			</Modal>

			<TouchableOpacity style={styles.container} 
			onPress = {() => {setModalVisible(true)}}
			>

            	<Ionicons name={'options'} size={width/8}/>

        	</TouchableOpacity>

		</View>
    );
}