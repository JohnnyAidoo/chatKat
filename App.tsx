import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Chat from './screens/chat';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    'fredoka': require('./assets/fonts/Fredoka-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  return (
      <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShadowVisible:false, title:'ChatKat', headerTitleStyle:{fontFamily:'fredoka', fontSize:25}}} name='Home' component={Home} />
          <Stack.Screen name='chat' component={Chat} />
        </Stack.Navigator>
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
