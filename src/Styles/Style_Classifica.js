import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	androidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: 'white'
	},
	//---------------------header-----------------------
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
	//---------------------body-------------------------
	body: {
		flex: 12,
	},
	bodyHeader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	bodyBody: {
		flex: 6,
	},
	parolando:{
		fontSize: width/10,
		letterSpacing: 5,
		fontWeight: 'bold',
		color: '#2e2e2e' //grigio scuro
	},
	classifica:{
		marginTop: '3%',
		marginLeft: '3%',
		fontSize: width/15
	},
	eloDiamante: {
		width: width/3.2,
		height: height/20,
		backgroundColor: '#2871de', //light blue
		marginLeft: '3%',
		marginTop: '6%',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	eloPlatino: {
		width: width/3.2,
		height: height/20,
		backgroundColor: '#008540', //paltino
		marginLeft: '3%',
		marginTop: '6%',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	eloOro: {
		width: width/3.2,
		height: height/20,
		backgroundColor: '#ffd700', //oro
		marginLeft: '3%',
		marginTop: '6%',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	eloArgento: {
		width: width/3.2,
		height: height/20,
		backgroundColor: '#C0C0C0', //silver
		marginLeft: '3%',
		marginTop: '6%',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	eloBronzo: {
		width: width/3.2,
		height: height/20,
		backgroundColor: '#cd7f32', //bronzo
		marginLeft: '3%',
		marginTop: '6%',
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center'
	},
	eloText: {
		fontWeight: 'bold',
		fontSize: width/21,
		letterSpacing: 0.3
	},
	bloccoClassifica:{
		height: height/10,
		backgroundColor: 'grey',
		marginTop: '3%',
		width: '90%',
		marginLeft: '3%',
		borderRadius: 7,
		flexDirection: 'row'
	},
	trofeo:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	centro: {
		flex: 2.5,
	},
	kda:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	immagine: {
		width: width/7,
		resizeMode: 'contain',
	},
	top: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: '10%'
	},
	bottom: {
		flex: 1,
		justifyContent: 'center',
		marginLeft: '10%'
	},
	nomeUtente: {
		fontSize: width/19,
		fontWeight: 'bold'
	},
	soprannome: {
		fontSize: width/23
	},
	kdaText:{
		fontSize: width/15,
		fontWeight: 'bold'
	},
	//---------------------footer-----------------------
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