import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";
const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>

        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    marginVertical: Dimensions.get("window").height / 30,
    overflow: "hidden",
    borderColor: "black",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans",
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
export default GameOverScreen;
