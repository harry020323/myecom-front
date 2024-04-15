import React from 'react';
import {Alert, Button, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/Home';
import ProfileScreen from './src/screens/profile/Profile';
const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home title'}}
        />
        <Stack.Screen
          name="Profile"
          options={{title: 'Profile title'}}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const HomeScreen = () => {
// return (
//   <>
//     <View>
//       <Text>my test home screen</Text>
//     </View>
//     <Button
//       title="Go to profile"
//       onPress={() => console.log('go to profile')}
//     />
//   </>
// <Button
//   title="Go to Jane's profile"
//   onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
// />
// );
// };
// const ProfileScreen = () => {
//   return <Text>This is's profile</Text>;
// };

// const HomeScreen = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//       }
//     />
//   );
// };
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };
