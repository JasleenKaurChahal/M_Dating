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

  return (
    <View style={styles.container}>
      <ChatHeader navigation={navigation} showInfo={true} />
      <ScrollView>
        {textChat.map((msg, index) => {
          return (
            <View
              key={index}
              style={[
                styles.chatView,
                {
                  backgroundColor: msg.isSender ? '#022648' : '#F7C505',
                  alignSelf: msg.isSender ? 'flex-start' : 'flex-end',
                },
              ]}>
              <Text
                style={{
                  color: msg.isSender ? '#F7C505' : '#022648',
                  fontSize: 14,
                }}>
                {msg.text}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bottom}>
        <TextInput
          style={{flex: 1, width: '80%'}}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          value={textMsg}
          placeholder="Type your text here..."
        />
        <TouchableOpacity
          style={{height: '100%', width: '20%', marginRight: -10}}
          onPress={onSubmit}>
          <Image
            source={images.send}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Matches;
