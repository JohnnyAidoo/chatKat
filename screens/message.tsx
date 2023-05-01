import { TextInput , IconButton, ListItem, Button, Avatar} from '@react-native-material/core';
import {View, ScrollView} from 'react-native'
import Icons from '@expo/vector-icons/Ionicons'
import Icons1 from '@expo/vector-icons/FontAwesome'
import Chat from './chat';


function Messages({navigation}) {
    const ctr = '#8F00FF'
    let list = [1,2,3,4,5,6,7,8,9,0] 
    return (  
        <>
         <View style={{backgroundColor:'white',flexDirection:'row' ,alignContent:'center', justifyContent:'space-around'}}>
            <TextInput placeholder='search' style={{width:'75%', marginTop:5}}  inputContainerStyle={{height: 40, alignItems:'center', }}  color='grey' variant='outlined'  />
            <IconButton icon={<Icons name='settings-sharp'  size={25}/>}> </IconButton>
        </View>
        
        <ScrollView>
        {
        list.map((i)=>
        <ListItem key={i} onPress= {()=> navigation.push('chat')} title='John Doe' leadingMode='avatar' 
        leading={<Avatar label='John Doe' 
        image={{uri : "https://assetbucketdevelopment.blob.core.windows.net/testing/7434099611858225-Male_3.jpg"}} color={ctr}/>} secondaryText="I'm on my way ..."
        trailing={<Icons1 name='circle' color={ctr} />} 
        /> 
        )}
        

        </ScrollView>
        </>
    );
}

export default Messages;
