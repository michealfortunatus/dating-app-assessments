import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

import AppButton from "../components/AppButton";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/onboard.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <LinearGradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.85)",
          "#000000",
        ]}
        style={styles.overlay}
      />

      <View style={styles.contentContainer}>
        <View style={styles.logoRow}>
          <Text style={styles.heart}>❤</Text>
          <Text style={styles.logo}>
            Matchly
          </Text>
        </View>

        <Text style={styles.text}>
          Find meaningful connections and
          discover people who share your
          interests.
        </Text>

        <AppButton
         title="Start Matching"
         onPress={() =>
         navigation.replace("MainApp", {
        screen: "Discover",
    })
  }
/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    width,
    height,
    position: "absolute",
  },

  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.65,
  },

  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 60,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  heart: {
    fontSize: 42,
    color: "#FF4D67",
    marginRight: 10,
  },

  logo: {
    fontSize: 40,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  text: {
    fontSize: 16,
    color: "#8F8F8F",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
  },
});