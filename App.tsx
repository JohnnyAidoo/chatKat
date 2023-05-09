import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import Home from './screens/home';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Chat from './screens/chat';
import { ActivityIndicator } from '@react-native-material/core';
import Login from './screens/login_screen';


export default function App() {
  const HEIGHT = Dimensions.get('window').height;
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    'fredoka': require('./assets/fonts/Fredoka-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <View style={{height:HEIGHT, alignContent:'center', justifyContent:'center'}} >
      <ActivityIndicator size={'large'} />
    </View>;
  }
  return (
      <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen options={{
            headerShadowVisible:false, title:'ChatKat', headerTitleStyle:{fontFamily:'fredoka', fontSize:25}}} name='Home' component={Home} />
          
          <Stack.Screen name='home' component={Home} 
          options={{title:'ChatKat', headerShadowVisible:false,headerBackVisible:false, headerTitleStyle:{fontFamily:'fredoka', fontSize:25}}}/>
          
          <Stack.Screen name='chat' component={Chat} 
          options={{headerShown:false}}
          />
          <Stack.Screen name='login' component={Login} 
          options={{headerShown:false}}
          />
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
