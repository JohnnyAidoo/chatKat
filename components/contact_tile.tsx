import {ListItem, Avatar} from '@react-native-material/core'
import Icons from '@expo/vector-icons/FontAwesome'


function ContactTile() {
    const primary = '#EDD8FE'
    const ctr = '#8F00FF'

    return (
        <>
        <ListItem title='John Doe' leadingMode='avatar' 
        leading={<Avatar label='John Doe' 
        image={{uri : "https://assetbucketdevelopment.blob.core.windows.net/testing/7434099611858225-Male_3.jpg"}} color={ctr}/>} secondaryText="I'm on my way ..."
        trailing={<Icons name='circle' color={ctr} />} 
        />
        </>
    );
}

export default ContactTile;