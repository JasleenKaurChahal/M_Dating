import React from 'react';
import {View, Image, TouchableWithoutFeedback, Text} from 'react-native';

import styles from './styles';
import {images} from '../../assets/images';

const Header = ({navigation}) => {
  return (
    <View style={styles.head}>
      <TouchableWithoutFeedback>
        <Image source={images.menu} style={styles.image} resizeMode="contain" />
      </TouchableWithoutFeedback>
      <Text style={styles.heading} />
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Chat')}>
        <Image
          source={images.chat}
          style={[styles.image, {height: 30}]}
          resizeMode="contain"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
