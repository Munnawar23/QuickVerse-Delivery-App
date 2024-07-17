import {StyleSheet,Text,Linking,TouchableOpacity, View, Image,} from 'react-native';
import React from 'react';

export default function Homescreen() {
  return (
<View>
      {/* Background image and logo*/}
      <View>
        <Image style={styles.backgroundImage} source={require('../assets/bg.jpg')} />
        {/* Logo  */}
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={require('../assets/logo.png')} />
        </View>
      </View>

      {/* Buttons Container  */}
    <View style={styles.buttonContainer}>
        {/* Login Button  */}
        <TouchableOpacity  activeOpacity={0.6}  style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Button  */}
        <TouchableOpacity  activeOpacity={0.6}  style={styles.button2}>
          <Text style={styles.button2Text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: 450,
        width: 400,
      },
      logoImage: {
        width: '70%', 
        height: '70%', 
        resizeMode: 'contain',
      },
      logoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 130,
   
  },
  button: {
    backgroundColor: '#8F1413',
    padding: 8,
    height:45,
    width: 170,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFDC52FF',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: '#FFDC52FF',
    padding: 8,
    height:45,
    width: 170,
    borderRadius: 20,
    marginTop: 20,
  },
  button2Text: {
    fontSize: 20,
    color: '#8F1413',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
