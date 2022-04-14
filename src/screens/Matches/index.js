import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import ChatHeader from '../../components/ChatHeader';
import {images} from '../../assets/images';
import styles from './styles';

const Matches = ({navigation}) => {
  const [textMsg, onChangeText] = React.useState('');
  const [textChat, onChangeChat] = React.useState([
    {isSender: true, text: 'Hi'},
    {isSender: false, text: 'Hey, How Are you?'},
    {isSender: true, text: 'I am good!'},
    {isSender: true, text: 'What about you?'},
  ]);

  const onSubmit = () => {
    textMsg !== '' &&
      onChangeChat([...textChat, {isSender: false, text: textMsg}]);
    onChangeText({textMsg: ''});
  };

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

  return (
    <View style={styles.container}>
      <ChatHeader navigation={navigation} showInfo={false} title={'Matches'} />
      <ScrollView>
        {data.map(item => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              <View key={item.index} style={styles.contain}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    resizeMode="cover"
                    source={{
                      uri: item.image,
                    }}
                    style={{height: 50, width: 50, borderRadius: 25}}
                  />
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 12,
                        color: '#022648',
                      }}>
                      20, Student
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 30,

                    backgroundColor: '#F7C505',
                    borderRadius: 10,
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="cover"
                    source={images.chat}
                    style={{height: 30, width: 20}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Matches;
