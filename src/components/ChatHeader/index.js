import React from 'react';
import {View, Image, TouchableWithoutFeedback, Text} from 'react-native';

import styles from './styles';
import {images} from '../../assets/images';

const ChatHeader = ({navigation, showInfo}) => {
  return (
    <View style={styles.head}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image source={images.back} style={styles.image} resizeMode="contain" />
      </TouchableWithoutFeedback>
      <Text style={styles.heading}>User</Text>
      {showInfo ? (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={images.info}
            style={[styles.image, {height: 30}]}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      ) : (
        <View />
      )}
    </View>
  );
};

export default ChatHeader;
