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
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './styles';
import {images} from '../../assets/images';
import Header from '../../components/Header';

const Home = ({navigation}) => {
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
          justifyContent: 'center',
        }}>
        {item.image ? (
          <Image
            // resizeMode="contain"
            // source={item.image}
            source={{
              uri: item.image,
            }}
            style={{height: '100%', width: '100%'}}
          />
        ) : (
          <View style={{height: '100%', width: '100%'}}>
            <ActivityIndicator size="small" color="#F7C505" />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
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
    </View>
  );
};

export default Home;
