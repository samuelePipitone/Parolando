import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
	},
	modalSuperContainer: {
		flex: 1,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: 'rgba(59, 59, 59, 0.8)'
	},
	modalContainer: {
		flex: 1,
		width: width/1.5,
		backgroundColor: 'white',
		alignSelf: 'flex-end',
		borderLeftWidth: 1,
		borderLeftColor: 'black',
	},
	titlesContainer: {
		borderBottomColor: '#171717',
		borderBottomWidth: 0.8,
	},
	titlesContainerLast: {
		
	},
	icons: {
		flexDirection: 'row',
	},
	titlesText: {
		fontWeight: 'bold',
		color: 'black',
		fontSize: 16,
		marginBottom: '20%',
		alignSelf: 'center',
		marginTop: '5%',
		letterSpacing: 1
	},
	titlesTextDark: {
		fontWeight: 'bold',
		color: 'black',
		fontSize: 16,
		marginBottom: '10%',
		alignSelf: 'center',
		marginTop: '5%',
		letterSpacing: 1
	},
	headerOptions: {
		flexDirection: 'row',
		height: height/2,
		justifyContent: 'center',
		alignItems: 'center',
		height: height/10,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
	},
	titlesTextHeader: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: width/16,
		letterSpacing: 2
	},
	titlesContainerHeader: {
		flex: 3,
		marginLeft: '10%'
	},
	imageContainer: {
		flex: 1
	},
	text:{
		marginBottom: '15%',
	},
	textDark:{
		marginBottom: '15%',
		marginTop: height/29,
		marginLeft: '3%',
		marginRight: '15%'
	},
	modalTitolo: {
		fontWeight: 'bold',
		fontSize: width/18
	},
	modalStatText: {
		fontSize: width/28,
		fontWeight: '400'
	},
	modalStatNumbers: {
		marginRight: '70%',
		fontWeight: '600',
		fontSize: width/25
	},
	modalTitoletto: {
		alignSelf: 'center',
		fontWeight: '600',
		fontSize: width/26
	},
	modalButtonText: {
		fontWeight: '600',
		fontSize: width/28,
	},
	modalContainer2: {	
		backgroundColor: 'white',
		flex: 1,
		marginRight: width/35,
		marginLeft: width/35,
		marginTop: height/10,
		marginBottom: height/(2,6),
		borderColor: '#3d3d3d',
		borderWidth: 1,
		borderRadius: 4
	},
	modalHeader:{
		//backgroundColor: 'red',
		flex: 1.5,
		alignItems: 'flex-end'
	},
	modalClickHeader:{
		width: width/10,
		marginRight: '1%',
		marginTop: '1%'
		//backgroundColor: 'yellow'
	},
	modalBody:{
		//backgroundColor: 'green',
		flex: 10,
		flexDirection: 'row'
	},
	modalBodyUp:{
		flex: 1,
		//backgroundColor: 'pink'
	},
	modalBodyUpHeader:{
		flex: 1,
		//backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalBodyUpBody:{
		flex: 6,
		//backgroundColor: 'yellow',
		flexDirection: 'row'
	},
	modalBodyUpBodyLeft:{
		flex: 6,
		//backgroundColor: 'pink',
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalBodyUpBodyRight:{
		flex: 1.8,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalText:{
		height: height/15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalValue:{
		height: height/15,		
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalBodyDown:{
		flex: 1,
		//backgroundColor: 'brown'
	},
	modalBodyDownUp:{
		flex: 1,
		//backgroundColor: 'grey',
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalBodyDownDown:{
		flex: 6,
		//backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
		borderLeftColor: 'black',
		borderLeftWidth: 1,
	},
	modalFooter:{
		//backgroundColor: 'grey',
		flex: 8,
		flexDirection: 'row',
		marginTop: '5%',
		alignSelf: 'center',
	},
	modalFooterLeft:{
		//backgroundColor: 'orange',
		flex: 1,
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		marginTop:'3%',
		marginBottom: '3%'
	},
	modalFooterLeftTop:{
		flex: 2,
		//backgroundColor: 'yellow',
		marginTop: '6%'
	},
	modalFooterLeftBottom:{
		flex: 6,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalFooterRight:{
		//backgroundColor: 'brown',
		flex: 1,
		marginTop:'4%',
		marginBottom: '4%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inner: {
		width: '80%',
		marginLeft: width/14
	},
	button:{
		borderRadius: 5,
		backgroundColor: 'green',
		width: width/3,
		height: height/14,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	containerSfondo: {
		backgroundColor: 'rgba(59, 59, 59, 0.8)',
		flex: 1
	},
	modalBody2:{
		flex: 7,
		marginLeft: '5%',
		marginRight: '5%'
	},
	modalBody3:{
		flex: 5,
		marginLeft: '5%',
		marginRight: '5%'
	},
	modalContainer3: {	
		backgroundColor: 'white',
		flex: 1,
		marginRight: width/35,
		marginLeft: width/35,
		marginTop: height/8,
		marginBottom: height/2.6,
		borderColor: '#3d3d3d',
		borderWidth: 1,
		borderRadius: 4
	},
	textComeGiocare: {
		fontSize: width/24,
		fontWeight: '900'
	},
	modalContainer4: {	
		backgroundColor: 'white',
		flex: 1,
		marginRight: width/35,
		marginLeft: width/35,
		marginTop: height/8,
		marginBottom: height/2,
		borderColor: '#3d3d3d',
		borderWidth: 1,
		borderRadius: 4
	},
	modalContainer5: {	
		backgroundColor: 'white',
		flex: 1,
		marginRight: width/35,
		marginLeft: width/35,
		marginTop: height/8,
		marginBottom: height/2.6,
		borderColor: '#3d3d3d',
		borderWidth: 1,
		borderRadius: 4
	},
	data: {
		fontWeight: 'bold',
		letterSpacing: 1,
		fontSize: width/16
	},
	graphStyle: {
		
	}
});