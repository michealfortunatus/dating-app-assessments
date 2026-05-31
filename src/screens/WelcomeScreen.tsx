import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import AppButton from "../components/AppButton";

export default function WelcomeScreen({
  navigation,
}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        ❤️ Matchly
      </Text>

      <Text style={styles.text}>
        Find meaningful connections.
      </Text>

      <AppButton
        title="Start Matching"
        onPress={() =>
          navigation.navigate("Discover")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginVertical: 24,
  },
});