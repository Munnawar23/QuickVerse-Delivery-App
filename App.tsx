import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import Login from './Components/Login';
import Homescreen from './Components/Homescreen';
import Signup from './Components/Signup';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parentContainer}>
        <Homescreen></Homescreen>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  parentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
