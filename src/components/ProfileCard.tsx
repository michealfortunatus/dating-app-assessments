import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import { Profile } from "../types/profile";

export default function ProfileCard({
  profile,
}: {
  profile: Profile;
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: profile.image }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>
          {profile.name}, {profile.age}
        </Text>

        <Text>{profile.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
  },
});