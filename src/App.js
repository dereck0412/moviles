import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";


const Stack = createNativeStackNavigator();
const Tab= createBottomTabNavigator();

const HomeScreen=()=>{
  return (
    <View>
      <Text>HomeScreen </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/*<Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />*/}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25
  }
});
