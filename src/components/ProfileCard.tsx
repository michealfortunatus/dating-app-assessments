import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {
  useState,
  useEffect,
} from "react";


export default function ProfileCard({
  profile,
  onOpenProfile,
}: any) {
  useEffect(() => {
  setCurrentImage(0);
}, [profile.id]);

  const [currentImage, setCurrentImage] =
    useState(0);

  const nextImage = () => {
    if (
      currentImage <
      profile.images.length - 1
    ) {
      setCurrentImage(
        currentImage + 1
      );
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(
        currentImage - 1
      );
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: profile.images[currentImage],
        }}
        style={styles.image}
      />

      {/* Progress Bars */}
      <View
        style={styles.progressContainer}
      >
        {profile.images.map(
          (
            _: any,
            index: number
          ) => (
            <View
              key={index}
              style={[
                styles.progressBar,
                index ===
                  currentImage &&
                  styles.activeBar,
              ]}
            />
          )
        )}
      </View>

      {/* Image Navigation Areas */}
      <Pressable
        style={styles.leftTap}
        onPress={prevImage}
      />

      <Pressable
        style={styles.rightTap}
        onPress={nextImage}
      />

      {/* Profile Info */}
      <View style={styles.info}>
        <View
          style={
            styles.nameContainer
          }
        >
          <Text
            style={styles.name}
          >
            {profile.name},{" "}
            {profile.age}
          </Text>

          <Pressable
            onPress={() =>
              onOpenProfile(profile)
            }
            hitSlop={30}
            style={
              styles.arrowButton
            }
          >
            <Ionicons
              name="arrow-up-circle"
              size={34}
              color="white"
            />
          </Pressable>
        </View>

        <Text
          style={styles.location}
        >
          📍 Lives in{" "}
          {profile.location}
        </Text>

        <Text
          style={styles.location}
        >
          📍 {profile.distance}
        </Text>

        <Text
          style={styles.location}
        >
          Bio: {profile.bio}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 25,
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  progressContainer: {
    position: "absolute",
    top: 15,
    left: 10,
    right: 10,
    flexDirection: "row",
    zIndex: 20,
  },

  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor:
      "rgba(255,255,255,0.4)",
    marginHorizontal: 2,
    borderRadius: 10,
  },

  activeBar: {
    backgroundColor: "#fff",
  },

  
  leftTap: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "50%",
    height: "72%",
    zIndex: 1,
  },

  rightTap: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "50%",
    height: "72%",
    zIndex: 1,
  },

  info: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    zIndex: 999,
    elevation: 999,
  },

  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 999,
    elevation: 999,
  },

  name: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    marginRight: 8,
  },

  arrowButton: {
    padding: 8,
    zIndex: 9999,
    elevation: 9999,
  },

  location: {
    color: "#fff",
    fontSize: 18,
    marginTop: 6,
  },
});