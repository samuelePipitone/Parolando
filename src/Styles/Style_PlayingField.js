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
        backgroundColor: 'black',
        margin: 1,
        alignItems: 'center'
    },
    singleBlock: {
        backgroundColor: 'grey',
        width: width/6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        marginTop: '10%',
        marginBottom: '10%'
    },
    textBlock: {
        color: 'white',
        fontSize: width/10
    }
});