import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // State Management
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Container 1 for logo and back button */}
          <View style={styles.container1}>
            {/* Back Button */}
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.goBack()}
            >
              <Icons name='arrow-left' size={40} color='white' />
            </TouchableOpacity>
            {/* Login Logo */}
            <Text style={{ fontSize: 50, color: 'white', marginRight: 120 }}>
              Login
            </Text>
          </View>
          {/* Container 2 for mobile number and password inputs */}
          <View style={styles.container2}>
            {/* Mobile Number */}
            <Text style={styles.text}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={setMobileNumber}
              value={mobileNumber}
              placeholder="Enter mobile number"
              placeholderTextColor="black"
              keyboardType="phone-pad"
            />
            {/* Password */}
            <Text style={styles.text}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter password"
                placeholderTextColor="black"
                secureTextEntry={!isPasswordVisible}
              />
              {/* Icon for show password */}
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Icons name={!isPasswordVisible ? "eye-with-line" : "eye"} size={30} color='red' />
              </TouchableOpacity>
            </View>
            {/* Forget Password */}
            <TouchableOpacity>
              <Text style={styles.fptext}>Forget password</Text>
            </TouchableOpacity>
          </View>
          {/* Container 3 for login and signup button */}
          <View style={styles.container3}>
            {/* Login button */}
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
                onPress={() => navigation.navigate('Orders')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/* Signup button */}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signup}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container1: {
    height: '30%',
    backgroundColor: '#FFDC52',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container2: {
    height: '50%',
    width: '100%',
    marginTop: -40,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  container3: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#000',
    marginLeft: 30,
    marginTop: 20,
  },
  input: {
    height: 60,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: '#FFDC5299',
    paddingRight: 50,
    paddingLeft: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: '#FFDC5299',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    height: 60,
    paddingLeft: 10,
  },
  showPasswordButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fptext: {
    paddingLeft: 280,
    color: 'red',
    fontWeight: '500',
  },
  signup: {
    color: 'red',
    fontWeight: '500',
    marginTop: 5,
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
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
