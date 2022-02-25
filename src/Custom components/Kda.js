import React from "react";
import { View, Text } from "react-native";

import styles from '../Styles/Style_Kda';

export default function Kda(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>il tuo score è: </Text>
            <Text style={styles.value}>3.14</Text>
        </View>
    );
}