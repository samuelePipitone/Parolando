import React, { useState} from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal
} from "react-native";

import { PieChart, BarChart } from "react-native-chart-kit";

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

import styles from "../Styles/Style_SalaTrofei";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const dataPieWin = [
  {
    name: "Win",
    quantity: 10,
    color: "#d2eabc",
    legendFontColor: "black",
    legendFontSize: 10,
  },
  {
    name: "Lose",
    quantity: 5,
    color: "#e29ef4",
    legendFontColor: "black",
    legendFontSize: 10,
  },
];

const dataChart = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [1, 3, 2, 5, 7, 5],
    },
  ],
};

export default function SalaTrofei({ navigation }) {

	const [modalImmagine, setModalImmagine] = useState(false);

  return (
    <SafeAreaView style={styles.androidSafeArea}>

		<Modal
		animationType="slide"
		transparent={true}
		visible={modalImmagine}
		statusBarTranslucent={true}
		>
			<View style={styles.modalImmagineContainer}>
				<View style={styles.modalImmagine}>
					<Image
					source={require("../images/immagine.png")}
					style={{width: '100%', height: '100%', borderRadius: 20}}
					/>
				</View>

				<TouchableOpacity style={styles.close} onPress={() => setModalImmagine(false)}> 
					<Feather name="x" size={width / 7} style={{alignSelf: 'center'}}/>
				</TouchableOpacity>
			</View>
		</Modal>

      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerLeft}
            onPress={() => navigation.navigate("Home")}
          >
            <AntDesign name="left" size={width / 10} />
            <Text style={styles.home}>HOME</Text>
          </TouchableOpacity>

          <View style={styles.headerRight}></View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity style={styles.bodyProfile} onPress={() => setModalImmagine(true)}>
            <Image
              source={require("../images/immagine.png")}
              style={styles.immagine}
            />
          </TouchableOpacity>

          <View style={styles.bodyName}>
            <Text style={styles.nomeUtente}>Nome_utente</Text>
          </View>

          <View style={styles.bodyStatisticheContainer}>
            <ScrollView style={styles.scrolla}>
              <View style={styles.headerScrolla}>
                <Text style={styles.statistiche}>Statistiche:</Text>
              </View>

              <View style={styles.bodyScrolla}>
                <View style={styles.pies}>
                  <PieChart
                    data={dataPieWin}
                    width={width / 2}
                    height={height / 8}
                    chartConfig={{
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    }}
                    accessor={"quantity"}
                    backgroundColor={"transparent"}
                    paddingLeft={width / 100}
                    style={{ alignSelf: "center" }}
                  />

                  <PieChart
                    data={dataPieWin}
                    width={width / 2}
                    height={height / 8}
                    chartConfig={{
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,
                    }}
                    accessor={"quantity"}
                    backgroundColor={"transparent"}
                    paddingLeft={width / 100}
                    style={{ alignSelf: "center" }}
                  />
                </View>

                <View style={styles.chart}>
                  <Text style={styles.testoChart}>Tentativi:</Text>

                  <BarChart
                    data={dataChart}
                    width={width}
                    height={height / 3}
                    chartConfig={{
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      barPercentage: 0.6,
                      backgroundGradientFrom: "white",
                      backgroundGradientTo: "white",
                      fromZero: true,
                    }}
                    verticalLabelRotation={0}
                    style={{ marginTop: width / 5 }}
                  />
                </View>

                <View style={styles.trofei}>
                  <View style={styles.trofeiTitolo}>
                    <Text style={styles.trofeiText}>Trofei:</Text>
                  </View>

                  <View style={styles.trofeiBody}>
                    <ScrollView horizontal={true}>
                      <View style={styles.trofeoBlocco2}>
                        <Image
                          source={require("../images/trofeo.png")}
                          style={styles.trofeoImage}
                        />
                        <View style={styles.testoTrofei}>
                          <Text style={styles.elo}>Diamante:</Text>
                          <Text style={styles.quantity}>0</Text>
                        </View>
                      </View>
                      <View style={styles.trofeoBlocco}>
                        <Image
                          source={require("../images/trofeo.png")}
                          style={styles.trofeoImage}
                        />
                        <View style={styles.testoTrofei}>
                          <Text style={styles.elo}>Platino:</Text>
                          <Text style={styles.quantity}>0</Text>
                        </View>
                      </View>
                      <View style={styles.trofeoBlocco}>
                        <Image
                          source={require("../images/trofeo.png")}
                          style={styles.trofeoImage}
                        />
                        <View style={styles.testoTrofei}>
                          <Text style={styles.elo}>Oro:</Text>
                          <Text style={styles.quantity}>0</Text>
                        </View>
                      </View>
                      <View style={styles.trofeoBlocco}>
                        <Image
                          source={require("../images/trofeo.png")}
                          style={styles.trofeoImage}
                        />
                        <View style={styles.testoTrofei}>
                          <Text style={styles.elo}>Argento:</Text>
                          <Text style={styles.quantity}>0</Text>
                        </View>
                      </View>
                      <View style={styles.trofeoBlocco}>
                        <Image
                          source={require("../images/trofeo.png")}
                          style={styles.trofeoImage}
                        />
                        <View style={styles.testoTrofei}>
                          <Text style={styles.elo}>Bronzo:</Text>
                          <Text style={styles.quantity}>0</Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>

                <View style={styles.trofei}>
                  <View style={styles.trofeiTitolo}>
                    <Text style={styles.trofeiText}>Medaglie:</Text>
                  </View>

                  <View style={styles.badgesBody}>
                    <View style={styles.badges}>
                      <View style={styles.badgesImage}>
                        <Image
                          source={require("../images/platinum.png")}
                          style={{ width: "80%", height: "80%", alignSelf: 'center' }}
                        />
                      </View>

                      <View style={styles.badgesFooter}>
                        <Text style={styles.badgeFooterText}>0</Text>
                      </View>
                    </View>

                    <View style={styles.badges}>
                      <View style={styles.badgesImage}>
                        <Image
                          source={require("../images/gold.jpg")}
                          style={{ width: "80%", height: "80%", alignSelf: 'center' }}
                        />
                      </View>

                      <View style={styles.badgesFooter}>
                        <Text style={styles.badgeFooterText}>0</Text>
                      </View>
                    </View>

                    <View style={styles.badges}>
                      <View style={styles.badgesImage}>
                        <Image
                          source={require("../images/silver.jpg")}
                          style={{ width: "80%", height: "80%", alignSelf: 'center' }}
                        />
                      </View>

                      <View style={styles.badgesFooter}>
                        <Text style={styles.badgeFooterText}>0</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
			 	 <View style={styles.footer}>
					<Text style={styles.credits}>SSM Team</Text>
					<Text style={styles.donate}>Donate!</Text>
				</View>
            </ScrollView>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}
