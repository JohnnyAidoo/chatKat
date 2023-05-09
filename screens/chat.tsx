import {Dimensions, View, ScrollView, Text} from 'react-native'
import { AppBar, Avatar, Button, IconButton, TextInput, } from "@react-native-material/core";
import Icon from '@expo/vector-icons/Ionicons'
import MessageTile from '../components/messageTile';
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, orderBy , query, Timestamp} from 'firebase/firestore';
import {firestore} from '../components/firebase' 
import AsyncStorage from '@react-native-async-storage/async-storage';


function Chat({navigation, route}, props) {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    const [textboxValue, setTextboxValue] = useState('');
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

    const group_name = route.params;
    const conn_ref = JSON.stringify(group_name.group_name)


    const ctr = '#44007A'
    const ctr2 = '#761CBD'
    const primary = '#EDD8FE'

    const doc_ref =  getDocs(query(collection(firestore, conn_ref), orderBy('time', 'asc'))).then((res)=>{
        const data =  res.docs
        .map((doc)=> ({...doc.data(),id:doc.id}));
        setMessages(data)
        
    })
    useEffect(()=>{
        doc_ref
        setUser(AsyncStorage.getItem('user'))
    },[])


    
   

    const sendmessage =(e) =>{
        const doc_ref = addDoc(collection(firestore,conn_ref),{
            message: text,
            senderuid: JSON.stringify(user._j),
            time: Timestamp.now()
        })
        setTextboxValue('')
        
        doc_ref

    }
    

    return (
        <View style={{backgroundColor:ctr2, height:HEIGHT}}>
        <View id='Appbar' style={{height:HEIGHT/9, backgroundColor:ctr2, paddingTop:10,
        display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'
        }}>
            <IconButton onPress={()=>{
                navigation.goBack()
            }} icon={<Icon name='ios-chevron-back' size={25} color='white' />} />

            <View style={{flexDirection:'row', alignItems:'center' }} >
                <Avatar label={conn_ref.toString()} image={{uri:'uri'}}   />
                <Text style={{padding:10, color:'white'}}>{conn_ref}</Text>
            </View>
            <View style={{width:'20%'}}></View>
        </View>


        <View style={{backgroundColor:'white', borderRadius: 30, paddingTop:20,}}>
            <ScrollView style={{height:HEIGHT/1.4, marginBottom:HEIGHT/10}}>
           
          {messages.map((message)=>(
          <MessageTile
          key={message.id}
          id={message.senderuid}
          text={message.message}
          align = {message.senderuid == JSON.stringify(user._j) ? 'end' : 'start'}
          color = {message.senderuid == JSON.stringify(user._j) ? ctr2 : 'white'}
          />))}

            </ScrollView>
        </View>

        <View style={{backgroundColor:'white',position:'absolute', bottom:0, width:WIDTH, justifyContent:'space-around',alignItems:'center', flexDirection:'row'}}>
            <TextInput value={textboxValue} onChangeText={newtext =>{setText(newtext); setTextboxValue(newtext)}} style={{width:'70%',backgroundColor:'white'}}  variant='outlined' placeholder='message...' />
            <IconButton  onPress={sendmessage} style={{width:'20%' , backgroundColor:'white'}} icon={<Icon name='send' size={25} color={ctr} />} />
        </View>
        </View>
    );
}

export default Chat;