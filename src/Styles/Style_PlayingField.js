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
    }
});