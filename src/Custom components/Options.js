//import
import React, { useState } from "react";
import {
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  Modal,
  Text,
  Switch,
  TouchableWithoutFeedback
} from "react-native";
import { BarChart } from "react-native-chart-kit";

//icone
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

//stile
import styles from "../Styles/Style_Options";

//dimensione schermo
var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

//graph data
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [1, 3, 2, 5, 7, 5],
    },
  ],
};

//FIXA LO STILE DI QUESTO FILE, in particolare il modal statistiche

export default function Options({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [modalStatistiche, setModalStatistiche] = useState(false);

  const [modalComeGiocare, setModalComeGiocare] = useState(false);

  const [modalMedaglie, setModalMedaglie] = useState(false);

  const [modalTrofei, setModalTrofei] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {setIsEnabled(!isEnabled)};

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        propagateSwipe
      >
        <TouchableOpacity 
		style={styles.modalSuperContainer}
		onPress={() => setModalVisible(false)}
		>
			
          <ScrollView style={styles.modalContainer}>
            <View style={styles.headerOptions}>
              <View style={styles.titlesContainerHeader}>
                <Text style={styles.titlesTextHeader}>Parolando</Text>
              </View>

              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Feather name="x" size={width / 10} />
              </TouchableOpacity>
            </View>

            <View style={styles.inner}>
              <View style={styles.titlesContainer}>
                <View>
                  <Text style={styles.titlesText}>Account</Text>

                  <Text style={styles.text}>Login/Logout</Text>
                </View>
              </View>

              <View style={styles.titlesContainer}>
                <Text style={styles.titlesText}>Profilo</Text>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setModalStatistiche(true);
                  }}
                  style={styles.icons}
                >
					<FontAwesome
                    name="bar-chart"
                    size={width / 18}
                    style={{ marginRight: width / 40 }}
                  />
                  <Text style={styles.text}>Statistiche</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.push("SalaTrofei");
                  }}
                  style={styles.icons}
                >
					<Entypo
                    name="trophy"
                    size={width / 18}
                    style={{ marginRight: width / 27 }}
                  />
                  <Text style={styles.text}>Sala dei trofei</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.push("Classifica");
                  }}
                  style={styles.icons}
                >
					<Fontisto
                    name="list-1"
                    size={width / 18}
                    style={{ marginRight: width / 40 }}
                  />
                  <Text style={styles.text}>Classifica</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.titlesContainer}>
                <Text style={styles.titlesText}>Regole</Text>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setModalComeGiocare(true);
                  }}
                  style={styles.icons}
                >
                  <Text style={styles.text}>Come giocare?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setModalMedaglie(true);
                  }}
                  style={styles.icons}
                >
                  <Text style={styles.text}>Come ottenere medaglie?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setModalTrofei(true);
                  }}
                  style={styles.icons}
                >
                  <Text style={styles.text}>Come funzionano i trofei?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.titlesContainer}>
                <Text style={styles.titlesTextDark}>Modalità scura</Text>

                <View style={styles.icons}>
                  <Text style={styles.textDark}>Attiva/Disattiva</Text>
				  	<Switch
					trackColor={{ false: "#767577", true: "#40b860"}}
					thumbColor={isEnabled ? "#5c5c5c" : "#f4f3f4"}
					onValueChange={toggleSwitch}
					value={isEnabled}
					/>
                </View>
              </View>

              <View style={styles.titlesContainerLast}>
                <Text style={styles.titlesText}>Crediti</Text>

                <Text style={styles.text}>SSM TEAMS OFFICIAL</Text>
              </View>
            </View>
          </ScrollView>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalStatistiche}
        statusBarTranslucent={true}
      >
        <TouchableOpacity style={styles.containerSfondo} onPress={() => setModalStatistiche(false)}>
          <View style={styles.modalContainer2}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.modalClickHeader}
                onPress={() => setModalStatistiche(false)}
              >
                <Feather name="x" size={width / 10} />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <View style={styles.modalBodyUp}>
                <View style={styles.modalBodyUpHeader}>
                  <Text style={styles.modalTitolo}>Statistiche:</Text>
                </View>
                <View style={styles.modalBodyUpBody}>
                  <View style={styles.modalBodyUpBodyLeft}>
                    <View style={styles.modalText}>
                      <Text style={styles.modalStatText}>
                        Partite giocate:{" "}
                      </Text>
                    </View>

                    <View style={styles.modalText}>
                      <Text style={styles.modalStatText}>
                        % Parole indovinate:
                      </Text>
                    </View>

                    <View style={styles.modalText}>
                      <Text style={styles.modalStatText}>
                        Serie di vittorie:
                      </Text>
                    </View>

                    <View style={styles.modalText}>
                      <Text style={styles.modalStatText}>
                        Serie vitt. massima:
                      </Text>
                    </View>
                  </View>

                  <View style={styles.modalBodyUpBodyRight}>
                    <View style={styles.modalValue}>
                      <Text style={styles.modalStatNumbers}>0</Text>
                    </View>

                    <View style={styles.modalValue}>
                      <Text style={styles.modalStatNumbers}>0</Text>
                    </View>

                    <View style={styles.modalValue}>
                      <Text style={styles.modalStatNumbers}>0</Text>
                    </View>

                    <View style={styles.modalValue}>
                      <Text style={styles.modalStatNumbers}>0</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.modalBodyDown}>

                <View style={styles.modalBodyDownDown}>
                  <View style={styles.modalFooterLeft}>
                    <View style={styles.modalFooterLeftTop}>
                      <Text style={styles.modalTitoletto}>
                        Prossima parola in:
                      </Text>
                    </View>

                    <View style={styles.modalFooterLeftBottom}>
                      <Text style={styles.data}>24:00:00</Text>
                    </View>
                  </View>

                  <View style={styles.modalFooterRight}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.modalButtonText}>Condividi</Text>
                      <Entypo name="share" size={width / 18} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.modalFooter}>
              <BarChart
                data={data}
                width={width / 1.15}
                height={height / 4}
                chartConfig={{
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(0, 0, 0, ${opacity})`,
					barPercentage: 0.6,
					backgroundGradientFrom: "white",
					backgroundGradientTo: "white",
					fromZero: true
                }}
                verticalLabelRotation={0}		
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalComeGiocare}
        statusBarTranslucent={true}
      >
        <TouchableOpacity style={styles.containerSfondo} onPress={() => setModalComeGiocare(false)}>
          <View style={styles.modalContainer3}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.modalClickHeader}
                onPress={() => setModalComeGiocare(false)}
              >
                <Feather name="x" size={width / 10} />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody2}>
              <Text style={styles.textComeGiocare}>
                Il gioco prevede di indovinare una parola di 5 lettere in 6
                tentativi. {"\n"} {"\n"}Il primo tentativo non avrà alcun suggerimento, dopo
                aver tentato di indovinare una parola le lettere si coloriranno
                con questo schema: {"\n"} {"\n"}
                -<Text style={{color: '#189e00'}}>Verde</Text>: se la lettera è indovinata nella posizione giusta {
                  "\n"
                }{" "}
                {"\n"}
                -<Text style={{color: "#c2ab00"}}>Giallo</Text>: se la lettera è presente nella parola ma nella
                posizione sbagliata {"\n"} {"\n"}
                -<Text style={{color: '#696969'}}>Grigio scuro</Text>: se la lettera non è presente
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalMedaglie}
        statusBarTranslucent={true}
      >
        <TouchableOpacity style={styles.containerSfondo} onPress={() => setModalMedaglie(false)}>
          <View style={styles.modalContainer4}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.modalClickHeader}
                onPress={() => setModalMedaglie(false)}
              >
                <Feather name="x" size={width / 10} />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody3}>
              <Text style={styles.textComeGiocare}>
                Per vincere le medaglie è necessario indovinare la parola in
                pochissimi tentativi, in particolare: {"\n"} {"\n"}
                -1 tentativo: medaglia di smeraldo {"\n"} {"\n"}
                -2 tentativi: medaglia di rubino {"\n"} {"\n"}
                -3 tentativi: medaglia di zaffiro
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalTrofei}
        statusBarTranslucent={true}
      >
        <TouchableOpacity style={styles.containerSfondo} onPress={() => setModalTrofei(false)}>
          <View style={styles.modalContainer5}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                style={styles.modalClickHeader}
                onPress={() => setModalTrofei(false)}
              >
                <Feather name="x" size={width / 10} />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody2}>
              <Text style={styles.textComeGiocare}>
                Per vincere i trofei è necessario avere un buon KDA a fine della
                stagione, le stagioni durano 3 mesi!{"\n"} {"\n"}I trofei presenti sono:{" "}
                {"\n"} {"\n"}
                -<Text style={{color: '#2871de', fontWeight: 'bold'}}>Diamante</Text>: KDA minore di 3,4 {"\n"} {"\n"}
                -<Text style={{color: '#008540', fontWeight: 'bold'}}>Platino</Text>: KDA compreso tra 4 e 3,5 {"\n"} {"\n"}
                -<Text style={{color: '#e8c400', fontWeight: 'bold'}}>Oro</Text>: KDA compreso tra 5 e 4 {"\n"} {"\n"}
                -<Text style={{color: '#a3a3a3', fontWeight: 'bold'}}>Argento</Text>: KDA compreso tra 6 e 5 {"\n"} {"\n"}
                -<Text style={{color: '#b36e2b', fontWeight: 'bold'}}>Bronzo</Text>: KDA maggiore di 6
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Ionicons name={"options"} size={width / 8} />
      </TouchableOpacity>
    </View>
  );
}
