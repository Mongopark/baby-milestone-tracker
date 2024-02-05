import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, Image, Alert, Button, Linking, Platform, } from 'react-native'
import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar";
import inter from "../layouts/fonts";
import colors from '../layouts/colors';
import SpotifyButton from '../components/SpotifyButton';
import SkipButton from '../components/SkipButton';

const OnboardingScreen = ({navigation}) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const changeScreen = () => {
    if (currentScreen < 4) {
      // Fade out effect for current screen
      Animated.timing(fadeAnim, {
        toValue: 0.15,
        duration: 1000, // Set a longer duration for fade-out
        useNativeDriver: true,
      }).start(() => {
        setCurrentScreen(currentScreen + 1);
        // Fade in effect for next screen
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000, // Set a longer duration for fade-in
          useNativeDriver: true,
        }).start();
      });
    }
  };

  const openSpotify = () => {
    const spotifyUri = 'spotify:';
    Linking.canOpenURL(spotifyUri).then((supported) => {
  
        Alert.alert('','"Burner", wants to open "Spotify"',[{text:'Cancel',onPress:()=> {   alert('Action Cancelled!');
    } },{text:'Open',onPress:()=> {if (supported) {
        Linking.openURL(spotifyUri);
      } else {
        Linking.openURL('https://www.spotify.com/');
      }}
    }]); 
    
    });
  };

  const openHome = () => {
    navigation.navigate('HomeScreen')
  };

  return (
    <Pressable style={styles.container} onPress={changeScreen}>
      <Animated.View style={[styles.screen, { opacity: fadeAnim }]}>

             {/* Onboarding1 */}
          {currentScreen === 1 && (<View style = {styles.container1}>    
          <StatusBar style='light' />
         {/* <Text style = {styles.text1}>Onboarding1</Text> */}
      <Image source={require('../../assets/images/onboarding1.jpg')} // Set the path to your image
      style={styles.image1} />
       <Text style = {styles.staytext1}>Stay in tune</Text>
       <Text style = {styles.catchtext1}>Catch up on realeases from your favorite{'\n'} artists. Share new music, spread love</Text>
            < SpotifyButton onPress={openSpotify} title='  CONTINUE WITH SPOTIFY' style={{backgroundColor:'white', width:225, marginTop: 30, marginBottom: 60, borderRadius: 50, alignSelf: 'center', }} textstyle={{color:'black'}}/>
            <Text style = {styles.clicktext1}>By clicking continue, you agree to our <Text  style = {styles.termstext1}>Terms of Use</Text></Text>
    </View>)}


  {/* Onboarding2 */}
          {currentScreen === 2 && (<View style = {styles.container2}>   
    <StatusBar style='light' />
      {/* <Text style = {styles.text2}>Onboarding2</Text> */}
      <View style = {styles.textcont2}>
       <Text style = {styles.staytext2}>Maintain your {'\n'}spotify {'\n'}connection</Text>
       <Text style = {styles.catchtext2}>Uninterrupted access to your{'\n'} playlists and favorite tracks.</Text>
       </View>
       <View style={styles.skipcont2}>
       <Image source={require('../../assets/icons/carousel1.jpg')} // Set the path to your image
       style={styles.carousel2} />
       <SkipButton onPress={openHome} title='SKIP   >>' style={{ width:125, borderRadius: 50, alignSelf: 'flex-end', backgroundColor: colors.text, }} textstyle={{color:'white'}}/>
       </View>
      <Image source={require('../../assets/images/onboarding2.jpg')} // Set the path to your image
      style={styles.image2} />
            </View>)}


{/* Onboarding3 */}
          {currentScreen === 3 && (<View style = {styles.container3}>   
    <StatusBar style='light' />
      {/* <Text style = {styles.text3}>Onboarding3</Text> */}
      <View style = {styles.textcont3}>
       <Text style = {styles.staytext3}>Smooth {'\n'}playback {'\n'}controls</Text>
       <Text style = {styles.catchtext3}>Play, pause, skip, and adjust volume{'\n'}effortlessly. Stay in charge of your{'\n'}tunes!</Text>
       </View>
       <View style={styles.skipcont3}>
       <Image source={require('../../assets/icons/carousel2.jpg')} // Set the path to your image
       style={styles.carousel3} />
       <SkipButton onPress={openHome} title='SKIP   >>' style={{ width:125, borderRadius: 50, alignSelf: 'flex-end', backgroundColor: colors.text, }} textstyle={{color:'white'}}/>
       </View>
      <Image source={require('../../assets/images/onboarding3.jpg')} // Set the path to your image
      style={styles.image3} />
            </View>)}


            {/* Onboarding4 */}
          {currentScreen === 4 && (<View style = {styles.container4}>   
    <StatusBar style='light' />
      {/* <Text style = {styles.text4}>Onboarding4</Text> */}
      <View style = {styles.textcont4}>
       <Text style = {styles.staytext4}>Discover new {'\n'}releases from {'\n'}your favourites</Text>
       <Text style = {styles.catchtext4}>Unearth fresh tunes from your{'\n'}favourite artists.</Text>
       </View>
       <View style={styles.skipcont4}>
       <Image source={require('../../assets/icons/carousel3.jpg')} // Set the path to your image
       style={styles.carousel4} />
       <SkipButton onPress={openHome} title='GET STARTED' style={{ width:125, borderRadius: 50, alignSelf: 'flex-end', backgroundColor: colors.text, }} textstyle={{color:'white'}}/>
       </View>
      <Image source={require('../../assets/images/onboarding4.jpg')} // Set the path to your image
      style={styles.image4} />
            </View>)}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Replace with your desired background color
  },
  screen: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  container1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#000",
  },
  text1: {
    color: "#fff",
    fontSize: 30,
    paddingHorizontal: 20
  },
  staytext1: {
    fontFamily: inter.normal7,
    color: colors.text,
    fontSize: 40,
    alignSelf: 'center',
    lineHeight: 48,
  },
  catchtext1: {
    fontFamily: inter.normal5,
    color: colors.lightGrey,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 23,
  },
  clicktext1: {
    fontFamily: inter.normal4,
    color: colors.lightGrey,
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 39,
  },
  termstext1: {
    textDecorationLine: 'underline',
  },


  container2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#000",
    justifyContent: 'space-between',
  },
  text2: {
    color: "#fff",
    fontSize: 30,
    paddingHorizontal: 20,
  },
  textcont2: {
    marginHorizontal: 26,
    marginVertical: 12,
  },
  staytext2: {
    fontFamily: inter.normal7,
    color: colors.text,
    fontSize: 40,
    lineHeight: 48,
    alignSelf: 'flex-start',
  },
  catchtext2: {
    fontFamily: inter.normal5,
    color: colors.lightGrey,
    fontSize: 16,
    lineHeight: 23,
    alignSelf: 'flex-start',
  },  
  carousel2: {
    width: '20%',
    height: '20%',
  },  
  skipcont2: {
    position:'absolute',
    top: 330,
    zIndex: 9999,
    left: 0,
    right:0,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'red',
    // borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
     },
     image2: {
       width: '100%',
     },  


     container3: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: "#000",
        justifyContent: 'space-between',
      },
      text3: {
        color: "#fff",
        fontSize: 30,
        paddingHorizontal: 20,
      },
      textcont3: {
        marginHorizontal: 26,
        marginVertical: 12,
      },
      staytext3: {
        fontFamily: inter.normal7,
        color: colors.text,
        fontSize: 40,
        lineHeight: 48,
        alignSelf: 'flex-start',
      },
      catchtext3: {
        fontFamily: inter.normal5,
        color: colors.lightGrey,
        fontSize: 16,
        lineHeight: 23,
        alignSelf: 'flex-start',
      },  
      carousel3: {
        width: '20%',
        height: '20%',
      },  
      skipcont3: {
        position:'absolute',
        top: 330,
        zIndex: 9999,
        left: 0,
        right:0,
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 25,
         },
         image3: {
         },  



         container4: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingTop: Constants.statusBarHeight + 10,
            backgroundColor: "#000",
            justifyContent: 'space-between',
          },
          text4: {
            color: "#fff",
            fontSize: 30,
            paddingHorizontal: 20,
          },
          textcont4: {
            marginHorizontal: 26,
            marginVertical: 12,
          },
          staytext4: {
            fontFamily: inter.normal7,
            color: colors.text,
            fontSize: 40,
            lineHeight: 48,
            alignSelf: 'flex-start',
          },
          catchtext4: {
            fontFamily: inter.normal5,
            color: colors.lightGrey,
            fontSize: 16,
            lineHeight: 23,
            alignSelf: 'flex-start',
          },  
          carousel4: {
            width: '20%',
            height: '20%',
          },  
          skipcont4: {
            position:'absolute',
            top: 330,
            zIndex: 9999,
            left: 0,
            right:0,
            alignItems: 'center',
            justifyContent: 'space-between',
            // borderColor: 'red',
            // borderWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 25,
             },
             image4: {
              width: '100%',
             },  
     });

export default OnboardingScreen;
