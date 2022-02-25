import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
	androidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
	  },
	  header: {
		  width: width,
		  height: '10%',
		  flexDirection: 'row'
	  },
	  body: {
		width: '100%',
		height: '60%',
		backgroundColor: 'blue'
	  },
	  footer: {
		width: '100%',
		height: '30%',
		backgroundColor: 'red'
	  },
	  header_badges: {
		backgroundColor: 'pink',
		flex: 3
	  },
	  header_kda: {
		backgroundColor: 'yellow',
		flex: 2
	  },
	  header_options: {
		backgroundColor: 'green',
		flex: 1
	  }
});