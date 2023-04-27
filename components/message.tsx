import { TextInput , IconButton, ListItem, Button} from '@react-native-material/core';
import {View, ScrollView} from 'react-native'
import Icons from '@expo/vector-icons/Ionicons'
import ContactTile from '../components/contact_tile';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Chat from '../screens/chat';


function MessagesStack({navigation}) {
    return (  
        <>
         <View style={{backgroundColor:'white',flexDirection:'row' ,alignContent:'center', justifyContent:'space-around'}}>
            <TextInput placeholder='search' style={{width:'75%', marginTop:5}}  inputContainerStyle={{height: 40, alignItems:'center', }}  color='grey' variant='outlined'  />
            <IconButton icon={<Icons name='settings-sharp'  size={25}/>}> </IconButton>
        </View>
        <Button title='move' onPress={()=>navigation.push('chat')}></Button>
        <ScrollView>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>
            <ContactTile/>

        </ScrollView>
        </>
    );
}

function Message() {

    const Stack = createNativeStackNavigator();

    return (
        <>
        <Stack.Navigator>
            <Stack.Screen name="Message" component={MessagesStack} 
            options={{headerShown:false}}
            />
            <Stack.Screen name='tile' component={ContactTile} />
            <Stack.Screen name="chat" component={Chat} />
        </Stack.Navigator>
        
        </>
    );
}

export default Message;