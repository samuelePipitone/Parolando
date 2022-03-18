import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	container: {
		flex: 1,
        //backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
	},
	modalContainer: {
		width: width/1.5,
		backgroundColor: 'white',
		alignSelf: 'flex-end',
		borderLeftWidth: 1,
		borderLeftColor: 'black',
		alignItems: 'center',
		height: '98%',
		marginTop: '4%',
		borderBottomColor: 'black',
		borderBottomWidth: 1
	},
	titlesContainer: {
		//backgroundColor: 'pink',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	titlesContainerLast: {
		//backgroundColor: 'pink',
		
	},
	titlesText: {
		fontWeight: 'bold',
		color: 'black',
		fontSize: 16,
		marginBottom: '20%',
		alignSelf: 'center',
		marginTop: '5%'
	},
	headerOptions: {
		flexDirection: 'row',
		height: height/10,
		justifyContent: 'center',
		alignItems: 'center',
		height: height/10,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	titlesTextHeader: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 24
	},
	titlesContainerHeader: {
		flex: 3,
		marginLeft: '10%'
	},
	imageContainer: {
		flex: 1
	},
	text:{
		marginBottom: '10%'
	}
});