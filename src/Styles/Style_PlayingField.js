import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
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
        backgroundColor: 'grey',
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 1
    },
	singleBlockAlmost: {
        backgroundColor: 'yellow',
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 1
    },
	singleBlockRight: {
        backgroundColor: 'green',
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '5%',
        marginBottom: '5%',
		marginRight: 2,
		borderRadius: 1
    },
    textBlock: {
        color: 'white',
        fontSize: width/10,
		fontWeight: 'bold'
    },
	modalContainer: {	
		backgroundColor: 'yellow',
		flex: 1,
		marginRight: width/15,
		marginLeft: width/15,
		marginTop: height/8,
		marginBottom: height/(2,5),
		borderColor: 'black',
		borderWidth: 1
	},
	modalHeader:{
		backgroundColor: 'red',
		flex: 1.5,
		alignItems: 'flex-end'
	},
	modalClickHeader:{
		width: width/10,
		backgroundColor: 'yellow'
	},
	modalBody:{
		backgroundColor: 'green',
		flex: 10,
		flexDirection: 'row'
	},
	modalBodyUp:{
		flex: 1,
		backgroundColor: 'pink'
	},
	modalBodyUpHeader:{
		flex: 1,
		backgroundColor: 'green'
	},
	modalBodyUpBody:{
		flex: 6,
		backgroundColor: 'yellow',
		flexDirection: 'row'
	},
	modalBodyUpBodyLeft:{
		flex: 6,
		backgroundColor: 'pink',
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
		backgroundColor: 'brown'
	},
	modalFooter:{
		backgroundColor: 'black',
		flex: 4
	}
});