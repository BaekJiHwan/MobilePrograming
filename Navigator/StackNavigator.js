import {createStackNavigator} from '@react-navigation/stack'

import DrawerNavigator from './DrawerNavigator'

const Stack = createStackNavigator()



const StackNavigator = () => {
  return (
     <Stack.Navigator>

        <Stack.Screen name = "Root" component = {DrawerNavigator}
          options={{ headerShown: false }}
        />
     
      </Stack.Navigator>
  )
}


export default StackNavigator