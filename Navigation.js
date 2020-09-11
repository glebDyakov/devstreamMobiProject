import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from './App';
import { createStackNavigator } from './SecondScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName={"First"}>
      <Stack.Screen name="First"  component={App} />
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  );
}