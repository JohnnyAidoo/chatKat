

import Icons2 from '@expo/vector-icons/AntDesign'
import Icons3 from '@expo/vector-icons/FontAwesome'
import Profile from './profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Messages from './groups';





function Home({route}) {
    const Tab = createBottomTabNavigator();

    return (
        <>
        <Tab.Navigator>
            <Tab.Screen name="index" component={Messages} options={{
                headerShown:false ,tabBarIcon:(() => <Icons2 name='message1' size={20}></Icons2>)
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown:false, tabBarIcon:(()=> <Icons3 name='user-circle-o' size={20}></Icons3>)
            }}/>
        </Tab.Navigator>
        </>
    );
}

export default Home;