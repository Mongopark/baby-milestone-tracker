import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();


  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
