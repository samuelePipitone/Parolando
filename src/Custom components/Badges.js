import React, { useState } from "react";
import { View, Image, Text, Modal, TouchableOpacity, Dimensions } from "react-native";

import Feather from "react-native-vector-icons/Feather";

import styles from '../Styles/Style_Badges';

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default function Badges(){

	const [modalSmeraldo, setModalSmeraldo] = useState(false);

	const [modalRubino, setModalRubino] = useState(false);

	const [modalZaffiro, setModalZaffiro] = useState(false);

	return(
		
		<View style={styles.container}>

			<Modal
			animationType="none"
			transparent={true}
			visible={modalSmeraldo}
			statusBarTranslucent={true}
			>
				<View style={styles.modalView}>

					<View style={styles.modalImage}>
						<Image 
						source={require('../images/platinum.png')} 
						style={{height: '100%', width:'100%'}}/>
					</View>

					<TouchableOpacity 
					style={styles.close}
					onPress={() => setModalSmeraldo(false)}
					>
						<Feather name="x" size={width / 7} style={{alignSelf: 'center'}}/>
					</TouchableOpacity>

				</View>
			</Modal>	

			<Modal
			animationType="none"
			transparent={true}
			visible={modalRubino}
			statusBarTranslucent={true}
			>
				<View style={styles.modalView}>

					<View style={styles.modalImage}>
						<Image 
						source={require('../images/gold.jpg')} 
						style={{height: '100%', width:'100%'}}/>
					</View>

					<TouchableOpacity 
					style={styles.close}
					onPress={() => setModalRubino(false)}
					>
						<Feather name="x" size={width / 7} style={{alignSelf: 'center'}}/>
					</TouchableOpacity>

				</View>
			</Modal>

			<Modal
			animationType="none"
			transparent={true}
			visible={modalZaffiro}
			statusBarTranslucent={true}
			>
				<View style={styles.modalView}>

					<View style={styles.modalImage}>
						<Image 
						source={require('../images/silver.jpg')} 
						style={{height: '100%', width:'100%'}}/>
					</View>

					<TouchableOpacity 
					style={styles.close}
					onPress={() => setModalZaffiro(false)}
					>
						<Feather name="x" size={width / 7} style={{alignSelf: 'center'}}/>
					</TouchableOpacity>

				</View>
			</Modal>

			<View style={styles.image_holder}>

				<TouchableOpacity style={styles.blockOne} onPress={() => setModalSmeraldo(true)}>
					<Image style={styles.images} source={require('../images/platinum.png')}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.blockTwo} onPress={() => setModalRubino(true)}>
					<Image style={styles.images} source={require('../images/gold.jpg')}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.blockThree} onPress={() => setModalZaffiro(true)}>
					<Image style={styles.images} source={require('../images/silver.jpg')}/>
				</TouchableOpacity>

			</View>

			<View style={styles.title_holder}>
				<View style={styles.blockOne}>
					<Text style={styles.titles}>0</Text>
				</View>
				<View style={styles.blockTwo}>
					<Text style={styles.titles}>0</Text>
				</View>
				<View style={styles.blockThree}>
					<Text style={styles.titles}>0</Text>
				</View>

			</View>

		</View>
	);
}