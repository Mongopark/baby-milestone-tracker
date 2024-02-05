import { useEffect, useState } from "react"
import * as Font from "expo-font"

const useFonts = () => {
  const [appLoading, setAppLoading] = useState(true)
  
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          normal1: require("../../assets/fonts/Inter-Thin.ttf"),
          normal2: require("../../assets/fonts/Inter-ExtraLight.ttf"),
          normal3: require("../../assets/fonts/Inter-Light.ttf"),
          normal4: require("../../assets/fonts/Inter-Regular.ttf"),
          normal5: require("../../assets/fonts/Inter-Medium.ttf"),
          normal6: require("../../assets/fonts/Inter-SemiBold.ttf"),
          normal7: require("../../assets/fonts/Inter-Bold.ttf"),
          normal8: require("../../assets/fonts/Inter-ExtraBold.ttf"),
          normal9: require("../../assets/fonts/Inter-Black.ttf"),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppLoading(false)
      }
    }
    loadFonts()
  }, [])
  
  return appLoading;
}

export default useFonts