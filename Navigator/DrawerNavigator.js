import {
  createDrawerNavigator,
  } from '@react-navigation/drawer'

import User from '../Screen/User'
import Calendar from '../Screen/Calender'
import Todolist from '../Screen/Todolist'
import OpenAI from '../Screen/OpenAiText'
import Youtube from '../Screen/Youtube'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName = 'Home'
      drawerPosition = 'right'
      drawerStyle = {{
        backgroundColor : 'lightgreen',
        width: 200
      }}
      drawerContentOptions = {{
        activeTintColor: 'black',
        activeBackgroundColor: 'white'
      }}
      screenOptions = {{
        headerShown: true
      }}
    >
      <Drawer.Screen name = "Main" component = {User} 
        options = {{
          
        }}
      />

      <Drawer.Screen name = "Todolist" component = {Todolist} 
        options = {{
         
        }}
      />

      <Drawer.Screen name = "Calender" component = {Calendar}
        options = {{
         
        }}
      />

      <Drawer.Screen name = "OpenAI" component = {OpenAI}
        options = {{
          
        }}
      />

      <Drawer.Screen name = "Youtube" component = {Youtube}
        options = {{
          
        }}
      />
      
    </Drawer.Navigator>
  )
}


export default DrawerNavigator