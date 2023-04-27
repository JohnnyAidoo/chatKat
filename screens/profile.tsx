import { Dimensions, View } from "react-native";
import { Avatar , Button, Text} from '@react-native-material/core'

function Profile() {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const primaryColor:string = '#EDD8FE'

    return (
        <View style={{backgroundColor:'white'}}>
        <View style={{width:WIDTH, alignItems:'center'}}>
        <Avatar label='L' size={WIDTH/1.6}></Avatar>
        <Text  variant="h5" style={{marginTop:20}}>Lisie Alexander</Text>
        </View>

        <View style={{alignItems:'center', width:WIDTH,paddingTop:20, justifyContent:'space-around', height:HEIGHT/3}}>
            <Button  color={primaryColor} title='Edit Profile' style={{width:WIDTH/1.2}}></Button>
            <Button color={primaryColor} title='Hep' style={{width:WIDTH/1.2}}></Button>
            <Button color={primaryColor} title='Report Issue' style={{width:WIDTH/1.2}}></Button>
            <Button color={primaryColor} title='About ' style={{width:WIDTH/1.2}}></Button>
        </View>
        </View>
    );
}

export default Profile;