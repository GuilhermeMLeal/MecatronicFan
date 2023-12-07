import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";

const App = () => {
  const [fanData, setFanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fanRunningTime, setFanRunningTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://10.109.25.56:8000/temperature/");
        setFanData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    // Fetch initial data
    fetchData();
  }, []);

  // Mapeia os dados para extrair a temperatura
  const temperatures = fanData.map(item => item.temperature);

  // Novo useEffect para calcular o tempo de funcionamento
  useEffect(() => {
    // Verifica se há dados e se o ventilador está ligado
    if (fanData.length > 0 && fanData[0].fanStatus) {
      console.log(fanData)
      // Encontra o índice do primeiro TurnOn
      const turnOnIndex = fanData.findIndex(item => item.event === "TurnOn");

      if (turnOnIndex !== -1) {
        // Filtra os eventos após o primeiro TurnOn até o próximo TurnOff
        const eventsAfterTurnOn = fanData.slice(turnOnIndex).filter(item => item.event !== "TurnOn");

        // Encontra o índice do próximo TurnOff
        const turnOffIndex = eventsAfterTurnOn.findIndex(item => item.event === "TurnOff");

        if (turnOffIndex !== -1) {
          // Calcula o tempo decorrido entre TurnOn e TurnOff em minutos
          const elapsedTimeMinutes = (eventsAfterTurnOn[turnOffIndex].timestamp - fanData[turnOnIndex].timestamp) / (1000 * 60);
          setFanRunningTime(elapsedTimeMinutes);
        }
      }
    }
  }, [fanData]);

  console.log(fanRunningTime)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>API Fetcher</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View style={styles.bigContainer}>
          <View style={styles.blockContainer}>
            <View style={styles.timeContainer}>
              <Icon name="access-time" size={60} color="#000" style={styles.timeImg} />
              <Text style={styles.timeTitle}>Horas Ligadas</Text>
              <Text style={styles.timeText}>
                {fanRunningTime.toFixed(2)} Horas
              </Text>
            </View>
          </View>

          <View style={styles.blockContainer}>
            <View style={styles.temperatureContainer}>
              <Icon2 name="temperature-low" size={55} color="#000" style={styles.temperatureImg} />
              <Text style={styles.temperatureTitle}>Temperatura Atual</Text>
              {/* Mostra a última temperatura disponível */}
              <Text style={styles.temperatureText}>
                {temperatures.length > 0 ? temperatures[temperatures.length - 1] : "N/A"}
              </Text>
            </View>
          </View>

          <View style={styles.blockContainer}>
            <View style={styles.statusContainer}>
              <Icon style={styles.statusImg} name="power" size={60} color="#000" />
              <Text style={styles.statusTitle}>Status</Text>
              <Text style={styles.statusText}>
                {fanData.length > 0
                  ? fanData[0].fanStatus
                    ? "Ligado"
                    : "Desligado"
                  : "N/A"}
              </Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  blockContainer: {
    width: "45%", // Ajuste conforme necessário
    marginBottom: 20,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  temperatureContainer: {
    paddingTop: 20,
    flexDirection: "column",
    alignItems: "center",
    height: 200,
    backgroundColor: "#FFD700",
    borderRadius: 16,
    overflow: "hidden",
  },
  temperatureImg: {
    paddingRight: 90,
  },
  temperatureTitle: {
    fontSize: 15,
    color: "#000",
  },
  temperatureText: {
    fontSize: 20,
    marginLeft: 10,
    color: "#000",
    fontWeight: "bold",
  },
  gap: {
    marginBottom: 20,
  },
  statusContainer: {
    paddingTop: 20,
    flexDirection: "column",
    alignItems: "center",
    height: 200,
    backgroundColor: "black",
    borderRadius: 16,
    overflow: "hidden",
  },
  statusImg: {
    paddingRight: 90,
    color: "#FFD700",
  },
  statusTitle: {
    fontSize: 15,
    color: "#FFD700",
  },
  statusText: {
    fontSize: 20,
    marginLeft: 10,
    color: "#FFD700",
    fontWeight: "bold",
  },
  timeContainer: {
    paddingTop: 20,
    flexDirection: "column",
    alignItems: "center",
    height: 200,
    backgroundColor: "#FFD700",
    borderRadius: 16,
    overflow: "hidden",
  },
  timeImg: {
    paddingRight: 90,
  },
  timeTitle: {
    fontSize: 15,
    color: "#000",
  },
  timeText: {
    fontSize: 20,
    marginLeft: 10,
    color: "#000",
    fontWeight: "bold",
  },
});

export default App;
