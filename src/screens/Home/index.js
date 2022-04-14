import React, {useState} from 'react';
import {collection} from 'firebase/firestore';
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
  Alert,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './styles';
import {images} from '../../assets/images';
import Header from '../../components/Header';
import axios from 'axios';

const Home = ({navigation}) => {
  const data = [
    {
      index: 1,
      image: 'https://source.unsplash.com/1024x768/?nature',
      title: 'Jane',
      isLiked: false,
    },
    {
      index: 2,
      image: 'https://source.unsplash.com/1024x768/?water',
      title: 'Julia',
      isLiked: true,
    },
    {
      index: 3,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'James',
      isLiked: false,
    },
    {
      index: 4,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'Kate',
      isLiked: false,
    },
    {
      index: 5,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'Shine',
      isLiked: false,
    },
    {
      index: 6,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'Roger',
      isLiked: false,
    },
    {
      index: 7,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'Jazz',
      isLiked: false,
    },
    {
      index: 8,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'Rachel',
      isLiked: false,
    },
    {
      index: 9,
      image: 'https://source.unsplash.com/1024x768/?girl',
      title: 'Marry',
      isLiked: false,
    },
  ];

  let handleClick = event => {
    // const {BigQuery} = require('@google-cloud/bigquery');
    // const {BigQuery} = require('@google-cloud/bigquery');
    // const bigquery = new BigQuery({
    //   projectId: 'mdating',
    //   // keyFilename: '../../credentials/(credential file name).json',
    // });
    // const query = `
    // SELECT * FROM \`mdating.profiles.user_profiles\` LIMIT 1000;
    //     `;
    // bigquery
    //   .query(query)
    //   .then(data => {
    //     const rows = data[0];
    //     rows.forEach(row => alert('Hello'));
    //   })
    //   .catch(err => console.log(err));
  };

  const [isLiked, setIsLiked] = useState(false);
  const [name, setName] = useState('User');

  const goForFetch = async () => {
    setIsLiked(true);
    await axios({
      url: 'https://us-central1-mdating.cloudfunctions.net/testName',
      method: 'POST',
      params: {
        name: name,
      },
    }).then(response => {
      return Alert.alert(response.data);
    });
  };

  const renderItem = ({item, index}) => {
    setIsLiked(item.isLiked);
    () => setName(item.title);
    return (
      <View key={index} style={styles.container2}>
        <Image
          resizeMode="cover"
          source={{
            uri: item.image,
          }}
          style={styles.photo}
        />
        <View style={styles.info}>
          <Text style={{color: '#F7C505', fontSize: 20}}>{item.title}</Text>
          <Text style={{color: '#F7C505', fontSize: 14}}>20, Student</Text>
          <Text style={{color: '#F7C505', fontSize: 14, weight: 'bold'}}>
            {'\n'}About me:{'\n\n'}
            {
              'Mastering the perfect and most authentic Dating app bio is not the easiest of tasks!'
            }
          </Text>
        </View>
        <View style={styles.controls}>
          <Image
            resizeMode="contain"
            source={images.previous}
            style={styles.back}
          />
          <TouchableOpacity
            onPress={() => {
              goForFetch();
            }}>
            <Image
              resizeMode="contain"
              source={isLiked ? images.heart_filled : images.heart}
              style={styles.next}
            />
          </TouchableOpacity>
          <Image
            resizeMode="contain"
            source={images.next}
            style={styles.next}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <ScrollView style={{flex: 1, marginBottom: -200}}>
        <Carousel
          style={{width: '100%', padding: 0, margin: 0}}
          layoutCardOffset={18}
          ref={c => {
            this._carousel = c;
          }}
          data={data}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').height}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
