import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: 'white',
        margin: width/80,
        justifyContent: 'center',
        alignItems: 'center',
		flexDirection: 'row'
	},
    value: {
        fontWeight: 'bold',
        fontSize: width/16,
		letterSpacing: 2
    },
	modalContainer: {
		height: height/3,
		width: width/1.7,
		backgroundColor: 'white',
		alignSelf: 'flex-end',
		marginTop: '20%',
		marginRight: '2%',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10
	},
	modalHeader:{
		height: '20%',
	},
	modalBody: {
		height: '80%',
	},
	modalClickHeader: {
		alignSelf: 'flex-end'
	},
	modalText: {
		fontWeight: '600',
		fontSize: width/24,
		marginTop: '10%',
		textAlign: 'center'
	},
	super: {
		flex: 1,
		backgroundColor: 'rgba(59, 59, 59, 0.8)'
	}
});