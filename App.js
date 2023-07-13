import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MediaScreen from './src/screens/MediaScreen';
// import { BlurView } from 'expo-blur';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MyDrawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <MyDrawer.Navigator>
      <MyDrawer.Screen
        options={{
          drawerIcon: (props) => <AntDesign name='android1' {...props} />,
        }}
        name='Welcome1'
        component={WelcomeScreen}
      />
      <MyDrawer.Screen name='Welcome3' component={LoginScreen} />
      <MyDrawer.Screen name='Welcome2' component={RegisterScreen} />
    </MyDrawer.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarActiveBackgroundColor: '#555',
          tabBarStyle: {
            backgroundColor: '#ccc',
            height: 80,
          },
          tabBarItemStyle: {
            backgroundColor: 'white',
            width: 70,
            height: 70,
            // padding: 10,
            borderRadius: 50,
          },
          tabBarBackground: () => <View style={{ backgroundColor: 'blue' }} />,
          tabBarBadge: 3,
          tabBarIcon: (props) => <AntDesign name='alipay-square' {...props} />,
        }}
        name='Welcome'
        component={WelcomeScreen}
      />
      <Tab.Screen name='Register' component={RegisterScreen} />
      <Tab.Screen name='Register1' component={RegisterScreen} />
      <Tab.Screen name='Register2' component={RegisterScreen} />
      <Tab.Screen name='Register3' component={RegisterScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{
          title: 'Home Screen',
        }}
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
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
