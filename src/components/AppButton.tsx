import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

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
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.red,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },
});