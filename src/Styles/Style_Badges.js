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
	},
	modalView: {
		flex: 1,
		backgroundColor: 'rgba(59, 59, 59, 0.8)'
	},
	modalImage: {
		flex: 1,
		marginRight: width/20,
		marginLeft: width/20,
		marginTop: height/4,
		marginBottom: height/3
	},
	close: {
		height: height/12,
		width: width/6,
		position: 'absolute',
		backgroundColor: 'white',
		alignSelf: 'center',
		justifyContent: 'flex-end',
		marginTop: height/1.45,
		borderRadius: 50,
		backgroundColor: 'white',
		justifyContent: 'center'
	},
});