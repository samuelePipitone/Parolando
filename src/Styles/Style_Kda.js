import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: 'white',
        margin: width/80,
        justifyContent: 'center',
        alignItems: 'center'
	},
    text: {
        fontWeight: 'bold',
        fontSize: width/25
    },
    value: {
        fontWeight: 'bold',
        fontSize: width/20
    }
});