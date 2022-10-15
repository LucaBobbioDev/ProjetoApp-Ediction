import { createStackNavigator } from '@react-navigation/stack';

import Login  from "../screens/Login";
import Home  from "../screens/Home";
import Word from '../screens/Word';
import Bookmarked  from "../screens/Bookmarked";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='Word' component={Word}/>
      <Stack.Screen name="Bookmarked" component={Bookmarked} />
    </Stack.Navigator>
  );
}