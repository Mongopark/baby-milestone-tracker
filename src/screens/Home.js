import { View, Text, StyleSheet, ImageBackground, Image } from "react-native"
import inter from "../layouts/fonts";
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
      
      <Text style = {styles.welcometext}>Welcome To</Text>
      <View style={styles.iconcont}>
      <Image source={require('../../assets/icons/groupicon.png')} // Set the path to your image
      style={styles.imageicon} />
       <Image source={require('../../assets/icons/burner.png')} // Set the path to your image
      style={styles.image} />
      </View>
      <Text style = {styles.hometext}>HomePage</Text>
      {/* <Text style = {styles.text}>Hello</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  iconcont: {
    flexDirection: 'row',
    alignItems: 'center', // Center content horizontally
    marginTop: 20, // Adjust margin as needed
  },
  welcometext: {
    fontFamily: inter.normal7,
    color: colors.text,
    fontSize: 40,
    lineHeight: 48,
  },
  hometext: {
    fontFamily: inter.normal7,
    color: 'white',
    fontSize: 40,
    lineHeight: 48,
  },
  imageicon: {
    marginRight: 7,
  },
});

export default Splash;