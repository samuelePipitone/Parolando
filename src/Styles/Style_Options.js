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
		flex: 1,
		width: width/1.5,
		backgroundColor: 'white',
		alignSelf: 'flex-end',
		borderLeftWidth: 1,
		borderLeftColor: 'black',
		alignItems: 'center',
		marginTop: '4%',
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
		marginTop: height/8,
		marginBottom: height/(2,5),
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
		height: height/12,
		alignItems: 'center',
		justifyContent: 'center'
	},
	modalValue:{
		height: height/12,		
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
		flex: 4,
		flexDirection: 'row'
	},
	modalFooterLeft:{
		//backgroundColor: 'orange',
		flex: 1,
		borderRightColor: 'black',
		borderRightWidth: 1,
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
		width: '80%'
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
		flex: 6,
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
		marginBottom: height/2.2,
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
});