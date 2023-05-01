import { Surface } from '@react-native-material/core';
import {View, Text} from 'react-native'

function MessageCon() {
    return (
        <>
        <Surface elevation={4} style={{padding:20,margin:8,marginBottom:-5, alignSelf:'flex-start', borderRadius:20}}>
            <Text>
                Hello there
            </Text>
        </Surface>
        </>
    );
}

export default MessageCon;