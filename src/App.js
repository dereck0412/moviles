
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  console.log('HomeScreen renderizado')
  return (
    <View style={{
      flex:1,
      backgroundColor:'#e7e7e7',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <Text>HomeScreen</Text>
    </View>
  );
};
const MapScreen = () => {
  console.log('HomeScreen renderizado')
  return (
    <View style={{
      flex:1,
      backgroundColor:'#e7e7e7',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <Text>MapScreen</Text>
    </View>
  );
};

const SavedScreen = () => {
  console.log('HomeScreen renderizado')
  return (
    <View style={{
      flex:1,
      backgroundColor:'#e7e7e7',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <Text>SavedScreen</Text>
    </View>
  );
};
const SettingsScreen = () => {
  console.log('HomeScreen renderizado')
  return (
    <View style={{
      flex:1,
      backgroundColor:'#e7e7e7',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: 'gray',
  },
});