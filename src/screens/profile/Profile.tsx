import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../../../types';
import React from 'react';
type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  return (
    <View>
      <Text>Profile screen data. </Text>
      <Text>Profile screen data. </Text>
      <Text>Profile screen data. </Text>
      <Text>Profile screen data. </Text>
      <Text>Profile screen data. </Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.push('Home')}
      />
    </View>
  );
};

export default ProfileScreen;
