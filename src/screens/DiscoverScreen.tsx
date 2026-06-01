import Swiper from "react-native-deck-swiper";
import { View } from "react-native";

import { profiles } from "../data/profiles";
import ProfileCard from "../components/ProfileCard";

export default function DiscoverScreen({
  navigation,
}: any) {
  return (
    <View style={{ flex: 1 }}>
      <Swiper
        cards={profiles}
        renderCard={(card) => (
          <ProfileCard profile={card} />
        )}
        onSwipedRight={(index) =>
          navigation.navigate(
            "ProfileDetails",
            {
              profile: profiles[index],
            }
          )
        }
        backgroundColor="white"
        stackSize={3}
      />
    </View>
  );
}