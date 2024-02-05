import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeStack from "./src/navigators/HomeStack";
import Onboard from "./src/screens/Onboard";
import { AllProvider, AllContext } from "./src/context/AllContext";
import useFonts from "./src/hooks/useFonts";
import Splash from "./src/screens/Splash";
import { StatusBar } from "expo-status-bar";

const App = () => {
  // const {userInfo, isLoggedIn, } = useContext(EventContext);
  const appLoading = useFonts();
  if (appLoading) {
    console.log("loading");
    return <Splash />;
  }



  return (
      <NavigationContainer>
        <AllProvider>
<HomeStack/>
         {/* <Splash /> */}
         {/* <Onboard /> */}

        </AllProvider>
        
      </NavigationContainer>

  );
};

export default App;