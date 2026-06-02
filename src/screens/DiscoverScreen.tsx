import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-deck-swiper";

import { profiles } from "../data/profiles";
import ProfileCard from "../components/ProfileCard";

export default function DiscoverScreen({
  navigation,
}: any) {
  const [finished, setFinished] =
    useState(false);

  if (finished) {
    return (
      <View
        style={styles.emptyContainer}
      >
        <Text
          style={styles.title}
        >
          You're all caught up!
        </Text>

        <Text
          style={styles.subtitle}
        >
          No more profiles
          available right now.
        </Text>

        <Text
          style={
            styles.smallText
          }
        >
          Check back later for
          new matches.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Swiper
        cards={profiles}
        backgroundColor="#000"
        stackSize={2}
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
        renderCard={(card) => {
          if (!card) return null;

          return (
            <ProfileCard
              key={card.id}
              profile={card}
              onOpenProfile={(
                profile: any
              ) =>
                navigation.navigate(
                  "ProfileDetails",
                  { profile }
                )
              }
            />
          );
        }}
        onSwiped={(index) => {
          console.log(
            `Swiped ${
              index + 1
            } of ${
              profiles.length
            }`
          );
        }}
        onSwipedAll={() => {
          setFinished(true);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#000",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 18,
    marginTop: 12,
    textAlign: "center",
    color: "#555",
  },

  smallText: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
    color: "#888",
  },
});