import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StateProvider } from './StateContext';
import Booked from './Booked/Booked';
import BookList from './BookList/BookList';
import BookDetail from './BookDetail/BookDetail';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Book = () => {
  return(
  <Stack.Navigator>

    <Stack.Screen
      name='Book List'
      component={BookList}>
    </Stack.Screen>

    <Stack.Screen
      name='Book Detail'
      component={BookDetail}>
    </Stack.Screen>

  </Stack.Navigator>
)};


export default function App() {
  return (

    <StateProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={({ route }) => ({
            tabBarActiveBackgroundColor: 'dodgerblue',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'list-ul'
              } else {
                iconName = 'file-o';
              }
              return <Icon name={iconName} size={24} color={color} />;
            }
          })}>
          <Tab.Screen
            name='Home'
            component={Book}></Tab.Screen>

          <Tab.Screen
            name='Booked'
            component={Booked}></Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>

    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
