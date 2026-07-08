import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import FeedScreen from './screens/FeedScreen';
import BulletinScreen from './screens/BulletinScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen 
          name="Feed" 
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons 
                name="images" 
                size={size} 
                color={color} 
              />
            ),
          }}
        />

        <Tab.Screen 
          name="Bulletin" 
          component={BulletinScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons 
                name="pin" 
                size={size} 
                color={color} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}