import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from './Login';
import HomeComponent from './Home';
import RequestComponent from './Request';
import OpenSlotComponent from './OpenSlot';
import ActiveSlotComponent from './ActiveSlot';
import { TransitionSpecs } from '@react-navigation/stack';

const Stack = createStackNavigator();
const noAnimationTransition = {
  animation: 'timing',
  config: {
    duration: 0, 
  },
};
function NavigationComponent() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name="Login" component={LoginComponent}  options={{ headerShown: false,  transitionSpec: {open: noAnimationTransition, close: noAnimationTransition,}, }} />
          <Stack.Screen name="Home" component={HomeComponent} options={{ headerShown: false,  transitionSpec: {open: noAnimationTransition, close: noAnimationTransition,}, }}/>
          <Stack.Screen name="Request" component={RequestComponent} options={{ headerShown: false,  transitionSpec: {open: noAnimationTransition, close: noAnimationTransition,}, }}/>
          <Stack.Screen name="OpenSlot" component={OpenSlotComponent} options={{ headerShown: false,  transitionSpec: {open: noAnimationTransition, close: noAnimationTransition,}, }}/>
          <Stack.Screen name="ActiveSlot" component={ActiveSlotComponent} options={{ headerShown: false,  transitionSpec: {open: noAnimationTransition, close: noAnimationTransition,}, }}/>
        </Stack.Navigator>
     </NavigationContainer>

  );
}





module.exports =  NavigationComponent;