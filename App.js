import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from './screens/FeedScreen';
import BulletinScreen from './screens/BulletinScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Feed" 
          component={FeedScreen} 
        />

        <Stack.Screen 
          name="Bulletin" 
          component={BulletinScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}