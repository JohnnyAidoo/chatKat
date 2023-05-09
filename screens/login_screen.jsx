import { Button, TextInput , Text} from "@react-native-material/core";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../components/firebase";
import Icons from '@expo/vector-icons/FontAwesome'
import { Dimensions, View } from "react-native";
import {useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";



function Login({navigation}) {


    const HEIGHT = Dimensions.get('window').height;


    const sign_in = async () => {
        signInAnonymously(auth).then((res) =>{
            AsyncStorage.setItem("user", res.user.uid)
        })
        navigation.navigate('home');
    }

    

    return (
        <>
        <View style={{height:HEIGHT, alignItems:"center", justifyContent:'center'}} >
        <Button onPress={sign_in} title='Enter' /> 
        </View>
        </>
    );
}

export default Login;