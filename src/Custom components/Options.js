import React from "react";
import { View, Dimensions } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../Styles/Style_Options'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Options(){
    return(
        <View style={styles.container}>
            <Ionicons name={'options'} size={width/8}/>
        </View>
    );
}