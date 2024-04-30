import { View, Text, Button } from 'react-native'
import styles from './style'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CandidateLogin from './Screens/CandidateLogin'
import CandidateRegister from './Screens/CandidateRegister'
import CandidateHome from './Screens/CandidateHome';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='CandidateLogin' component={CandidateLogin} />
        <Stack.Screen name='CandidateRegister' component={CandidateRegister} />
        <Stack.Screen name='CandidateHome' component={CandidateHome} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}