import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: 'white',
		bottom: height/80
	},
	singleLetter: {
		//backgroundColor: 'lightgrey', 
		justifyContent: 'center',
        alignItems: 'center',
		width: width/12,
		marginTop: height/80,
		marginBottom: height/80,
		borderRadius: 6
	},
	doubleLetter: {
		backgroundColor: 'lightgrey', 
		justifyContent: 'center',
        alignItems: 'center',
		width: width/7,
		marginTop: height/80,
		marginBottom: height/80,
		borderRadius: 4
	},
	letterFind: {
		backgroundColor: 'green'
	},
	letterAlmost: {
		backgroundColor: 'yellow'
	},
	letteraNonPresente: {
		backgroundColor: 'grey'
	},
	letteraStart: {
		backgroundColor: 'lightgrey'
	},
	letterText: {
		color: 'black',
		fontSize: width/27,
		fontWeight: 'bold'
	},
	stileFlat: {
		flex: 1,
		justifyContent: 'space-evenly'
	},
	row1: {
		flex: 1,
		//backgroundColor: 'green',
		margin: 2,
		marginTop: height/80,
		top: height/60
	},
	row2: {
		flex: 1,
		//backgroundColor: 'green',
		margin: 2,
		marginLeft: width/30,
		marginRight: width/30
	},
	row3: {
		flex: 1,
		//backgroundColor: 'green',
		margin: 2,
		bottom: height/60
	},
});