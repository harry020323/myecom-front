import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../../types';
import React from 'react';
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View>
      <Text>Home screen data.</Text>
      <Text>Home screen data.</Text>
      <Text>Home screen data.</Text>
      <Text>Home screen data.</Text>
      <Text>Home screen data.</Text>
      <Text>Home screen data.</Text>
      <Button
        title="Go to profile"
        onPress={() => props.navigation.push('Profile')}
      />
    </View>
  );
};

export default HomeScreen;
