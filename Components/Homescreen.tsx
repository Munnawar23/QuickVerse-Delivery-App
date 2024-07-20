import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { HomeScreenNavigationProp } from '../types'; 

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.parentContainer}>
      {/* Container 1 for background image and logo */}
      <View style={styles.container1}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/bg.jpg')}
        />
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../assets/logo.png')}
          />
        </View>
      </View>

      {/* Container 2 for login and signup buttons */}
      <View style={styles.container2}>
        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('Login')} // Navigate to Login screen
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Signup')} // Navigate to Signup screen
        >
          <Text style={styles.button2Text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    height: '60%',
    width: '100%',
  },
  container2: {
    height: '40%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
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
  button: {
    backgroundColor: '#8F1413',
    padding: 8,
    height: 45,
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
    height: 45,
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

export default HomeScreen;
