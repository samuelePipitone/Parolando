import React from "react";
import { View, Image, Text } from "react-native";

import styles from '../Styles/Style_Badges';

export default function Badges(){
	return(
		<View style={styles.container}>

			<View style={styles.image_holder}>

				<View style={styles.blockOne}>
					<Image style={styles.images} source={require('../images/platinum.png')} style={styles.images}/>
				</View>
				<View style={styles.blockTwo}>
					<Image style={styles.images} source={require('../images/gold.jpg')} style={styles.images}/>
				</View>
				<View style={styles.blockThree}>
					<Image style={styles.images} source={require('../images/silver.jpg')} style={styles.images}/>
				</View>

			</View>

			<View style={styles.title_holder}>
				<View style={styles.blockOne}>
					<Text style={styles.titles}>Plat: 0</Text>
				</View>
				<View style={styles.blockTwo}>
					<Text style={styles.titles}>Oro: 0</Text>
				</View>
				<View style={styles.blockThree}>
					<Text style={styles.titles}>Argen: 0</Text>
				</View>

			</View>

		</View>
	);
}