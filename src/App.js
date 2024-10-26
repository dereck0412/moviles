import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import SavedScreen from './SavedScreen';
import SettingsScreen from './SettingsScreen';
import InfoScreen from './InfoScreen';


const homeIcon_active= require("./assets/icons/home-active.png");
const homeIcon= require("./assets/icons/home.png");
const compass_active= require("./assets/icons/compass-active.png");
const compass= require("./assets/icons/compass.png");
const savedIcon_active= require("./assets/icons/saved-active.png");
const savedIcon= require("./assets/icons/saved.png");
const settingsIcon_active= require("./assets/icons/settings-active.png");
const settingsIcon= require("./assets/icons/settings.png");


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />   
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          headerShown:false,
          TabBarIcon:({focused})=>{
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? homeIcon_active : homeIcon;
            } else if (route.name === "Map") {
              iconName = focused ? compass_active : compass;
            } else if (route.name === "Saved") {
              iconName = focused ? savedIcon_active : savedIcon;
            } else if (route.name === "Settings") {
              iconName = focused ? settingsIcon_active : settingsIcon;
            }
            return (
              <Image source={iconName} resizeMode="contain" style={styles.footerIcon} />
            )
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            //position: "absolute",
            //padding: 10,
            //backgroundColor:  'black',
            //borderTopStartRadius: 40,
            //borderTopEndRadius: 40,
            justifyContent: 'center', // Centra el contenido horizontalmente
            padding: 20, // Aumenta el padding
            backgroundColor: 'black',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            
          }
        })}
      
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
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