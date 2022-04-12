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
      isLiked: false,
    },
    {
      index: 2,
      image: 'https://source.unsplash.com/1024x768/?water',
      title: 'hi2',
      isLiked: true,
    },
    {
      index: 3,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
      isLiked: false,
    },
    {
      index: 4,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
      isLiked: false,
    },
    {
      index: 5,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
      isLiked: false,
    },
    {
      index: 6,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
      isLiked: false,
    },
    {
      index: 7,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
      isLiked: false,
    },
    {
      index: 8,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
      isLiked: false,
    },
    {
      index: 9,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'hi3',
      isLiked: false,
    },
  ];

  const [isLiked, setIsLiked] = useState(false);

  const renderItem = ({item, index}) => {
    setIsLiked(item.isLiked);
    return (
      <View
        key={index}
        style={{
          width: '100%',
          flex: 1,
          height: 900,
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          source={{
            uri: item.image,
          }}
          style={{
            height: 400,
            width: '40%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignSelf: 'flex-start',
          }}
        />
        <View
          style={{
            height: 200,
            backgroundColor: '#022648',
            alignSelf: 'flex-start',
            width: '40%',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
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
            height: 50,
            width: '40%',
            marginTop: 10,
            alignSelf: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'space-around',
            // alignSelf: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={images.previous}
            style={{
              height: 50,
              width: 50,
              alignSelf: 'center',
              // height: 400,
              // width: '100%',
              // borderRadius: 10,
            }}
          />
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Image
              resizeMode="contain"
              source={isLiked ? images.heart_filled : images.heart}
              style={{
                height: 60,
                width: 60,
                alignSelf: 'center',
                // height: 400,
                // width: '100%',
                // borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <Image
            resizeMode="contain"
            source={images.next}
            style={{
              height: 60,
              width: 60,
              alignSelf: 'center',
              // height: 400,
              // width: '100%',
              // borderRadius: 10,
            }}
          />
        </View>
      </View>
      // <View
      //   style={{
      //     alignItems: 'center',
      //     height: 400,
      //     justifyContent: 'center',
      //   }}>
      //   {item.image ? (
      //     <Image
      //       // resizeMode="contain"
      //       // source={item.image}
      //       source={{
      //         uri: item.image,
      //       }}
      //       style={{height: '100%', width: '100%'}}
      //     />
      //   ) : (
      //     <View style={{height: '100%', width: '100%'}}>
      //       <ActivityIndicator size="small" color="#F7C505" />
      //     </View>
      //   )}
      // </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <ScrollView
        style={{flex: 1, margin: 15, padding: 20, marginBottom: -200}}>
        <Carousel
          // layout={'tinder'}
          style={{width: '100%'}}
          layoutCardOffset={18}
          ref={c => {
            this._carousel = c;
          }}
          data={data}
          renderItem={renderItem}
          // sliderWidth={Dimensions.get('window').width}
          // itemWidth={Dimensions.get('window').height}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').height}
        />

        {/* <View
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
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Home;
