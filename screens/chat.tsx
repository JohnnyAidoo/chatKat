import {Dimensions, View} from 'react-native'
import { AppBar, Avatar, IconButton, Text, } from "@react-native-material/core";
import Icon from '@expo/vector-icons/Ionicons'
import MessageCon from '../components/messageCon';

function Chat({navigation}) {

    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

    const ctr = '#44007A'
    const ctr2 = '#761CBD'
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
        <View style={{backgroundColor:'white', borderRadius: 30, height:HEIGHT, paddingTop:20}}>

            <MessageCon />

        </View>


        </View>
    );
}

export default Chat;