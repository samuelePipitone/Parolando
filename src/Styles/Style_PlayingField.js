import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	prova: {
		flex: 1
	},
	container: {
		flex: 1,
        backgroundColor: 'white',
        margin: width/20,
	},
    blocks: {
        flex: 1,
        margin: 1,
        alignItems: 'center'
    },
    singleBlock: {
        backgroundColor: '#949494', //grey
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#696969' //dark grey
    },
	singleBlockAlmost: {
        backgroundColor: '#F7DE3A', //yellow
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 1,
		borderWidth: 1,
		borderColor: '#85771e' //dark yellow
    },
	singleBlockRight: {
        backgroundColor: '#189e00', //green
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 1,
		borderWidth: 1,
		borderColor: '#0f6600' //dark green
    },
    textBlock: {
        color: 'white',
        fontSize: width/10,
		fontWeight: 'bold'
    },
	modalContainer: {	
		backgroundColor: 'white',
		flex: 1,
		marginRight: width/35,
		marginLeft: width/35,
		marginTop: height/8,
		marginBottom: height/(2,5),
		borderColor: 'black',
		borderWidth: 1
	},
	modalHeader:{
		//backgroundColor: 'red',
		flex: 1.5,
		alignItems: 'flex-end'
	},
	modalClickHeader:{
		width: width/10,
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
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
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
	button:{
		borderRadius: 5,
		backgroundColor: 'green',
		width: width/3,
		height: height/14,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	singleBlockRightSelected:{
		backgroundColor: '#189e00', //green
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 1,
		borderWidth: 2,
		borderColor: 'orange'
	},
	singleBlockAlmostSelected:{
        backgroundColor: '#F7DE3A', //yellow
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 1,
		borderWidth: 2,
		borderColor: 'orange'
	},
	singleBlockSelected:{
		backgroundColor: '#949494', //grey
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 3,
		borderWidth: 2.5,
		borderColor: '#F99F38' //orange
	},
	//----TESTO-----
	modalTitolo: {
		fontWeight: 'bold',
		fontSize: width/18
	},
	modalStatText: {
		fontSize: width/28,
		fontWeight: '400'
	},
	modalStatNumbers: {
		marginRight: '80%',
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
	///////////////////////////////////////////////////////////////////////////////////////
	container2: {
		flex: 1,
        backgroundColor: 'white',
		bottom: height/80
	},
	singleLetter: {
		justifyContent: 'center',
        alignItems: 'center',
		width: width/12,
		marginTop: height/80,
		marginBottom: height/80,
		borderRadius: 6,
		borderWidth: 1
	},
	doubleLetter: {
		backgroundColor: 'lightgrey', 
		justifyContent: 'center',
        alignItems: 'center',
		width: width/7,
		marginTop: height/80,
		marginBottom: height/80,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#b0b0b0'
	},
	letterFind: {
		backgroundColor: '#189e00', //green
		borderColor: '#003603'
	},
	letterAlmost: {
		backgroundColor: '#F7DE3A', //yellow
		borderColor: '#635800'
	},
	letteraNonPresente: {
		backgroundColor: '#404040', //dark grey
		borderColor: '#525251'
	},
	letteraStart: {
		backgroundColor: 'lightgrey',
		borderColor: '#b0b0b0'
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
	footer: {
		height: '35%'
	}
});