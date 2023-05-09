import { TextInput , IconButton, ListItem, Text, Avatar} from '@react-native-material/core';
import {View, ScrollView} from 'react-native'
import Icons from '@expo/vector-icons/Ionicons'
import Icons1 from '@expo/vector-icons/FontAwesome'
import Chat from './chat';
import {firestore} from '../components/firebase'
import {useEffect, useState} from 'react'
import { collection, getDoc, getDocs, query } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';





function Groups({navigation, route}) {
    const ctr = '#8F00FF'
    const [list, setList] = useState([])


    


    useEffect(()=>{
        const groups_ref = getDocs(query(collection(firestore, 'group_list'))).then((res) =>{
            const data = res.docs.map(doc => ({...doc.data(), id: doc.id}))
            setList(data)

        })
        
    },[])

    return (  
        <>
         <View style={{backgroundColor:'white',flexDirection:'row' ,alignContent:'center', justifyContent:'space-around'}}>
            <TextInput placeholder='search' style={{width:'75%', marginTop:5}}  inputContainerStyle={{height: 40, alignItems:'center', }}  color='grey' variant='outlined'  />
            <IconButton icon={<Icons name='settings-sharp'  size={25}/>}> </IconButton>
        </View>
        
        <ScrollView>
        {
        list.map((group_item)=>
        <ListItem key={group_item.id} onPress= {()=> navigation.push('chat' ,{group_name: group_item.name})} title={group_item.name} leadingMode='avatar' 
        leading={<Avatar label={group_item.name} 
        image={{uri : "uri"}} color={ctr}/>} secondaryText="I'm on my way ..."
        trailing={<Icons1 name='circle' color={ctr} />} 
        /> 
        
        )}

        </ScrollView>
        </>
    );
}

export default Groups;
