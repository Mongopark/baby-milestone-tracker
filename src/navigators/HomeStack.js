import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import Onboard from "../screens/Onboard"

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions = {{headerShown: false}}
    >
    <Stack.Screen name = {"Onboard"} component = {Onboard}/>
      <Stack.Screen name = {"HomeScreen"} component = {Home}/>
    </Stack.Navigator>
  )
}

export default HomeStack