import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export default function AppButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#FF4D67",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  text: {
    color: "#F4F4F4",
    fontSize: 18,
    fontWeight: "600",
  },
});