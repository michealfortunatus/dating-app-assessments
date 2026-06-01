import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileDetailsScreen({ route }: any) {
  const { profile } = route.params;
  const navigation = useNavigation<any>();

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) return;

    setLiked(true);

    // Demo match simulation
    const isMatch = Math.random() > 0.5;

    if (isMatch) {
      Alert.alert(
        "🎉 It's a Match!",
        `You and ${profile.name} liked each other.`,
        [
          {
            text: "Start Chatting",
            onPress: () => {
              // navigation.navigate("Chats");
            },
          },
        ]
      );
    }
  };

  const handleMessage = () => {
    Alert.alert(
      "Message",
      `Opening chat with ${profile.name}`
    );

    // navigation.navigate("Chats");
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: profile.images[0] }}
        style={styles.image}
      />

      {/* NAME + BACK BUTTON */}
      <View style={styles.nameRow}>
        <Text style={styles.name}>
          {profile.name}, {profile.age}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-down-circle"
            size={32}
            color="white"
          />
        </TouchableOpacity>
      </View>

      {/* BIO */}
      <Text style={styles.bio}>
        {profile.bio}
      </Text>

      {/* INTERESTS */}
      <Text style={styles.heading}>
        Interests
      </Text>

      <View style={styles.interestsContainer}>
        {profile.interests.map(
          (
            interest: string,
            index: number
          ) => (
            <View
              key={index}
              style={styles.interestTag}
            >
              <Text
                style={styles.interestText}
              >
                {interest}
              </Text>
            </View>
          )
        )}
      </View>

      {/* ADDITIONAL PHOTOS */}
      {profile.images?.length > 1 && (
        <>
          <Text style={styles.heading}>
            Photos
          </Text>

          {profile.images
            .slice(1)
            .map(
              (
                image: string,
                index: number
              ) => (
                <Image
                  key={index}
                  source={{ uri: image }}
                  style={styles.extraImage}
                />
              )
            )}
        </>
      )}

      {/* ACTION BUTTONS */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.messageButton}
          onPress={handleMessage}
        >
          <Ionicons
            name="chatbubble"
            size={22}
            color="#fff"
          />
          <Text style={styles.buttonText}>
            Message
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.likeButton,
            liked &&
              styles.likeButtonActive,
          ]}
          onPress={handleLike}
        >
          <Ionicons
            name={
              liked
                ? "heart"
                : "heart-outline"
            }
            size={22}
            color="#fff"
          />
          <Text style={styles.buttonText}>
            {liked ? "Liked" : "Like"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* MATCH STATUS */}
      {liked && (
        <View style={styles.matchBanner}>
          <Ionicons
            name="heart"
            size={20}
            color="#ff3b5c"
          />
          <Text style={styles.matchText}>
            You've liked this profile
          </Text>
        </View>
      )}

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  image: {
    width: "100%",
    height: 500,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },

  name: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    flex: 1,
    marginRight: 10,
  },

  bio: {
    marginHorizontal: 20,
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
    color: "#ccc",
  },

  heading: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },

  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
  },

  interestTag: {
    backgroundColor: "#1c1c1e",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#333",
  },

  interestText: {
    color: "#fff",
    fontWeight: "600",
  },

  extraImage: {
    width: "90%",
    height: 420,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
  },

  actionsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
    gap: 12,
  },

  messageButton: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    paddingVertical: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  likeButton: {
    flex: 1,
    backgroundColor: "#ff3b5c",
    paddingVertical: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  likeButtonActive: {
    backgroundColor: "#28a745",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8,
  },

  matchBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#222",
  },

  matchText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "600",
  },
});