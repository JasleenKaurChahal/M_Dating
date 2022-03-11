import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Navigation from './src/navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} barStyle="light-content" />
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
