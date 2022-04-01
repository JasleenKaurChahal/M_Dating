import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ChatHeader from '../../components/ChatHeader';
import {images} from '../../assets/images';
import styles from './styles';

const Profile = ({navigation}) => {
  const [textMsg, onChangeText] = React.useState('');

  const columns = [
    {text: 'Name : User'},
    {text: 'Age : 17 '},
    {text: 'Height : 5.8'},
    {text: 'Job Status : Student'},
    {text: 'Job Status : Student'},
  ];

  const onSubmit = () => {
    textMsg !== '' &&
      onChangeChat([...textChat, {isSender: false, text: textMsg}]);
    onChangeText({textMsg: ''});
  };

  return (
    <View style={styles.container}>
      <ChatHeader navigation={navigation} showInfo={false} />
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          style={{height: 140, width: 140, marginTop: 30, marginBottom: 30}}
          source={images.profile}
        />
        {columns.map(item => {
          return (
            <View
              style={[
                styles.chatView,
                {
                  backgroundColor: '#022648',
                  width: '90%',
                  marginTop: 10,
                },
              ]}>
              <Text
                style={{
                  color: '#F7C505',
                  fontSize: 14,
                }}>
                {item.text}
              </Text>
            </View>
          );
        })}
      </View>

      <TouchableOpacity onPress={onSubmit}>
        <View style={styles.bottom}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Block</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
