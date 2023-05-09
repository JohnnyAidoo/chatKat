import { Surface } from '@react-native-material/core';
import {View, Text} from 'react-native'




function MessageTile(props) {


    
    return (
        <>
        <Surface elevation={4} style={{padding:20,margin:8,marginBottom:-5, alignSelf: `flex-${props.align}` , borderRadius:20, backgroundColor:props.color}}>
            <Text>
                {props.text}
            </Text>
        </Surface>
        </>
    );
}

export default MessageTile;