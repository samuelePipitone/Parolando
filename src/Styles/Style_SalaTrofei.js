import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	androidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: 'white'
	},
	container: {
		flex: 1,
	},
	//---------------header-------------------------
	header: {
		flex: 1,
		flexDirection: 'row'
	}, 
	headerLeft:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerRight:{
		flex: 1,
	},
	home: {
		fontSize: width/22,
		fontWeight: 'bold',
		marginBottom: '2%',
		marginLeft: '1%'
	},
	//-----------------body-------------------------
	body: {
		flex: 12
	}, 
	bodyProfile:{
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bodyName:{
		flex: 0.1,
		backgroundColor: '#dbdbdb', //grigio
		justifyContent: 'center',
		width: '50%',
		alignSelf: 'center',
		marginBottom: '10%',
	},
	bodyStatisticheContainer:{
		flex: 1,
		borderTopColor: '#a8a8a8', //grigio
		borderTopWidth: 0.6
	},
	bodyStatTitolo:{
		flex: 1,
		justifyContent: 'center',
		marginLeft: '4%'
	},
	bodyStatBody:{
		flex: 5,
	},
	immagine: {
		height: height/4,
		width: width/1.9,
		backgroundColor: 'black',
		borderRadius: 110
	},
	nomeUtente: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: width/18,
		letterSpacing: 1
	},
	statistiche: {
		fontSize: width/18,
		fontWeight: 'bold',
		letterSpacing: 0.5,
		color: '#171717'
	},
	//---------------footer-------------------------
	footer: {
		flex: 1,
		flexDirection: 'row'
	},
	credits: {
		marginTop: '5%',
		marginLeft: '2%',
		letterSpacing: 0.5,
		fontSize: width/26
	},
	donate: {
		marginTop: '5%',
		marginLeft: '2%',
		letterSpacing: 0.5,
		fontSize: width/26,
		marginLeft: '60%'
	}
});