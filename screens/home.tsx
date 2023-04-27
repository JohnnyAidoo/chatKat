import { TextInput , IconButton, ListItem} from '@react-native-material/core';
import {View, ScrollView} from 'react-native'
import Icons from '@expo/vector-icons/MaterialIcons'

import Profile from './profile';
import ContactTile from '../components/contact_tile';


function Home({}) {


    return (
        <>

        <View style={{backgroundColor:'white',flexDirection:'row' ,alignContent:'center', justifyContent:'space-around'}}>
            <TextInput placeholder='search' style={{width:'75%', marginTop:5}}  inputContainerStyle={{height: 40, alignItems:'center', }}  color='grey' variant='outlined'  />
            <IconButton icon={<Icons name='settings'  size={25}/>}> </IconButton>
        </View>
        
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

export default Home;