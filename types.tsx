import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Homescreen: undefined;
  Login: undefined;
  Signup: undefined;
  Orders: undefined; 
  PendingDeliveries: undefined; 
  Profile: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Homescreen'>;
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type SignupScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;
export type OrdersScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Orders'>;
export type PendingDeliveriesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PendingDeliveries'>;
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;