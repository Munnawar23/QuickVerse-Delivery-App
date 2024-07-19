// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the types for your stack navigator
export type RootStackParamList = {
  Homescreen: undefined;
  Login: undefined;
  Signup: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Homescreen'>;
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type SignupScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;
