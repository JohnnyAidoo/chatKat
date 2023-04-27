import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Profile from './screens/profile';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Icons from '@expo/vector-icons/AntDesign'


export default function App() {
  const BottomTabNavigator = createBottomTabNavigator();
  const [fontsLoaded] = useFonts({
    'fredoka': require('./assets/fonts/Fredoka-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  return (
      <>
      <NavigationContainer>

        <BottomTabNavigator.Navigator >
          <BottomTabNavigator.Screen 
          options={{tabBarIcon : () => (<Icons name='message1' size={20} />) , 
          headerTitle:'ChatKat' , headerShadowVisible: false, headerTitleStyle:{fontFamily: 'fredoka', fontSize: 25}}} 
          name='Messages' component={Home}  />

          <BottomTabNavigator.Screen name='Profile' component={Profile}
          options={{tabBarIcon: () =>(<Icons name='user' size={20}/>)}} />
        </BottomTabNavigator.Navigator>
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
