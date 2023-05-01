import {Dimensions, View, ScrollView} from 'react-native'
import { AppBar, Avatar, Button, IconButton, Text, TextInput, } from "@react-native-material/core";
import Icon from '@expo/vector-icons/Ionicons'
import MessageCon from '../components/messageCon';

function Chat({navigation}) {

    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

    const ctr = '#44007A'
    const ctr2 = '#761CBD'
    const primary = '#EDD8FE'
    return (
        <View style={{backgroundColor:ctr2, height:HEIGHT}}>
        <View id='Appbar' style={{height:HEIGHT/9, backgroundColor:ctr2, paddingTop:10,
        display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
        }}>
            <IconButton icon={<Icon name='ios-chevron-back' size={25} color='white' />} />
            <View style={{flexDirection:'row', alignItems:'center' }} >
                <Avatar label='John Doe' image={{uri:'https://assetbucketdevelopment.blob.core.windows.net/testing/7434099611858225-Male_3.jpg'}}   />
                <Text style={{padding:10, color:'white'}}>John Doe</Text>
            </View>
            <View style={{width:'20%'}}></View>
        </View>
        <View style={{backgroundColor:'white', borderRadius: 30, paddingTop:20,}}>
            <ScrollView style={{height:HEIGHT}}>
            <MessageCon />
            <MessageCon />
   
            
            </ScrollView>
        </View>

        <View style={{backgroundColor:'white',position:'absolute', bottom:0, width:WIDTH, justifyContent:'space-around',alignItems:'center', flexDirection:'row'}}>
            <TextInput style={{width:'70%',backgroundColor:'white'}}  variant='outlined' placeholder='message...' />
            <IconButton style={{width:'20%' , backgroundColor:'white'}} icon={<Icon name='send' size={25} color={ctr} />} />
        </View>
        </View>
    );
}

export default Chat;