import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './styles';
import {images} from '../../assets/images';

const Home = () => {
  // const [data, setData] = useState('');
  const data = [
    {
      index: 1,
      image: 'https://source.unsplash.com/1024x768/?nature',
      title: 'hi',
    },
    {
      index: 2,
      image: 'https://source.unsplash.com/1024x768/?water',
      title: 'hi2',
    },
    {
      index: 3,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          height: 400,
          backgroundColor: 'red',
          justifyContent: 'center',
        }}>
        <Image
          // resizeMode="contain"
          // source={item.image}
          source={{
            uri: item.image,
          }}
          style={{height: '100%', width: '100%'}}
        />
      </View>
    );
  };

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
          <Image
            source={images.menu}
            style={{height: 30, width: 30}}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <Carousel
          layout={'stack'}
          layoutCardOffset={18}
          ref={c => {
            this._carousel = c;
          }}
          data={data}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').height}
        />

        <View
          style={{
            height: 200,
            backgroundColor: '#022648',
            margin: 15,
            borderRadius: 10,
            padding: 15,
          }}>
          <Text style={{color: '#F7C505', fontSize: 20}}>
            FirstName LastName
          </Text>
          <Text style={{color: '#F7C505', fontSize: 14}}>20, Student</Text>
          <Text style={{color: '#F7C505', fontSize: 14}}>{'\n'}shsldkjlsf</Text>
        </View>

        <View
          style={{
            height: 200,
            backgroundColor: '#F7C505',
            margin: 15,
            borderRadius: 10,
            padding: 15,
          }}>
          <Text style={{color: '#022648', fontSize: 20}}>Description</Text>
          <Text style={{color: '#022648', fontSize: 14}} />
          <Text style={{color: '#022648', fontSize: 14}}>{'\n'}shsldkjlsf</Text>
        </View>
      </ScrollView>

      {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={images.m_love}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: 'center',
            height: '100%',
          }}> */}
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
      {/* </ImageBackground>
      </View> */}
    </View>
  );
};

export default Home;
