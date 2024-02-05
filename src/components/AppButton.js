import { Pressable, StyleSheet, Text } from "react-native"
import colors from "../layouts/colors"
import workSans from "../layouts/fonts";

const AppButton = ({
  onPress,
  title,
  style,
  textstyle
}) => {
  return (
    <Pressable
      style = {{...styles.btn, ...style}}
      onPress = {onPress}
    >
      <Text
        style = {{...styles.btnText, ...textstyle}}
        font = {workSans.normal5}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
  }
})