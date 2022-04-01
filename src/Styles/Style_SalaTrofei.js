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
		flex: 12,
	}, 
	bodyProfile:{
		flex: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bodyName:{
		flex: 0.08,
		backgroundColor: '#dbdbdb', //grigio
		justifyContent: 'center',
		width: '50%',
		alignSelf: 'center',
		marginBottom: '5%',
		marginTop: '4%'
	},
	bodyStatisticheContainer:{
		flex: 1,
		borderTopColor: '#a8a8a8', //grigio
		borderTopWidth: 0.6,
	},
	bodyStatTitolo:{
		flex: 1,
		justifyContent: 'center',
		marginLeft: '4%',
		backgroundColor: 'green',
		height: height/5
	},
	immagine: {
		height: height/6.2,
		width: width/3,
		backgroundColor: 'black',
		borderRadius: 110
	},
	nomeUtente: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: width/22,
		letterSpacing: 1
	},
	statistiche: {
		fontSize: width/18,
		fontWeight: 'bold',
		letterSpacing: 0.5,
		color: '#171717',
		marginLeft: '3%',
		marginTop: '3%'
	},
	scrolla: {
		flex: 1
	},
	headerScrolla: {
		flex: 1,
	},
	bodyScrolla:{
		flex: 1,
	},
	pies: {
		flexDirection: 'row',
		marginTop: '5%',
		height: height/6,
	},
	chart: {
		flexDirection: 'row',
		height: height/2,
	},
	testoChart: {
		position: 'absolute',
		fontSize: width/16,
		marginTop: '5%',
		marginLeft: '3%',
		fontWeight: 'bold',
		letterSpacing: 1
	},
	trofei: {
		height: height/4,
	},
	trofeiTitolo: {
		flex: 1,
	},
	trofeiText: {
		marginTop: '1%',
		marginLeft: '3%',
		fontSize: width/16,
		fontWeight: 'bold',
		letterSpacing: 1
	},
	trofeiBody: {
		flex: 4,
		flexDirection: 'row',
	},
	trofeoImage: {
		width: width/7,
		height: height/10,
		resizeMode: 'cover',
		alignSelf: 'center'
	},
	testoTrofei: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '7%'
	},
	trofeoBlocco: {
		alignSelf: 'center',
		marginRight: width/12,
		marginLeft: width/12,
		height: height/6,
		width: width/3,
		justifyContent: 'center'
	},
	elo: {
		marginRight: '5%',
	},
	quantity:{
		fontWeight: 'bold'
	},
	badges: {
		height: height/6,
		width: width/4,
		alignSelf: 'center'
	},
	badgesBody:{
		flex: 4,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	badgesImage: {
		height: '70%',
	},
	badgesFooter: {
		height: '30%',
		justifyContent: 'center',
	},
	badgeFooterText: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: width/18
	},
	//---------------footer-------------------------
	footer: {
		flex: 0.7,
		flexDirection: 'row'
	},
	credits: {
		marginTop: '3%',
		marginLeft: '2%',
		letterSpacing: 0.5,
		fontSize: width/26
	},
	donate: {
		marginTop: '3%',
		marginLeft: '2%',
		letterSpacing: 0.5,
		fontSize: width/26,
		marginLeft: '60%'
	}
});