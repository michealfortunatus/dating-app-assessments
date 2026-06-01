import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import AppButton from "../components/AppButton";

export default function ProfileDetailsScreen({
  route,
}: any) {
  const { profile } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profile.image }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {profile.name}, {profile.age}
      </Text>

      <Text>{profile.bio}</Text>

      <Text style={styles.match}>
        ❤️ It's a Match
      </Text>

      <AppButton
        title="Message"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    height: 400,
    borderRadius: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },
  match: {
    marginVertical: 20,
    color: "red",
    fontWeight: "700",
  },
});