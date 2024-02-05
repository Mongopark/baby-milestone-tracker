import { Pressable, StyleSheet, Text, Image } from "react-native"
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
      <Image style={styles.googlepic} source={require("../../assets/icons/google.png")} />{title}
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
  },
  googlepic: {
width: 15,
height: 15,
  }
})