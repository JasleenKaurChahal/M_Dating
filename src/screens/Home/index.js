import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './styles';
import {images} from '../../assets/images';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 60,
          backgroundColor: '#F7C505',
          justifyContent: 'center',
          padding: 20,
        }}>
        <TouchableWithoutFeedback>
          <Image source={images.menu} style={{height: 30, width: 30}} />
        </TouchableWithoutFeedback>
      </View>
      <ImageBackground
        source={images.m_love}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          height: '100%',
        }}>
        {/* <View style={{flex: 1}}>
        <View style={{height: 60, backgroundColor: 'red'}} />

        <View style={styles.container}>
          <Text>Home Screen</Text>

          <View style={styles.header}>
            <Text fontWeight="800" fontSize="xl">
              <View style={[styles.imageContainer]}>
                <Image style={styles.itemImage} source={images.background} />
              </View>
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text color="brown">jjjj</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      </ImageBackground>
    </View>
  );
};

export default Home;
