import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Text, SafeAreaView, View} from 'react-native';
import {
  Home,
  Login,
  SignUp,
  ForgotPassword,
  Chat,
  Profile,
  Matches,
} from '../screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {DrawerItems} from 'react-navigation';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = ({navigation}) => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={Chat} options={{title: 'Chat'}} />
      <Stack.Screen name="Matches" component={Matches} />
    </Drawer.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Chat" component={Chat} options={{title: 'Chat'}} />
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="Matches" component={Matches} />
        <Stack.Screen name="Drawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
