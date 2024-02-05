import { View, Text, StyleSheet, ImageBackground, Image } from "react-native"
import font from "../layouts/fonts"
import colors from "../layouts/colors"
import { StatusBar } from "expo-status-bar";

const Splash = () => {
  return(
    <View style = {styles.cont}>      
      <StatusBar style='light' />
      {/* <ImageBackground
      source={require('../../assets/logo.png')} // Set the path to your image
      style={styles.imageBackground}
    >
      </ImageBackground> */}
      <View style={styles.iconcont}>
      <Image source={require('../../assets/icons/groupicon.png')} // Set the path to your image
      style={styles.imageicon} />
       <Image source={require('../../assets/icons/burner.png')} // Set the path to your image
      style={styles.image} />
      </View>
      {/* <Text style = {styles.text}>Hello</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover', // You can adjust the resizeMode as needed
    justifyContent: 'center', // Adjust as needed
  },
  iconcont: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    resizeMode: 'cover', // You can adjust the resizeMode as needed
    alignSelf: 'center', // Adjust as needed
    justifyContent: 'center',
    marginTop: '100%',
  },
  imageicon: {
    marginRight: 7,
  },
  text: {
    fontSize: 80,
  },
})

export default Splash