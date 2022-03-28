import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: 'black',
		margin: '2%'
	},
	image_holder: {
		flex: 8,
		//backgroundColor: 'red',
		flexDirection: 'row'
	},
	title_holder: {
		flex: 3,
		//backgroundColor: 'orange',
		flexDirection: 'row'
	},
	blockOne:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	blockTwo: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	blockThree: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titles: {
		marginLeft: '5%',
		alignSelf: 'center',
		fontSize: width/25,
		fontWeight: 'bold'
	},
	images: {
		marginLeft: '5%',
		width: 45,
		height: 45
	}
});